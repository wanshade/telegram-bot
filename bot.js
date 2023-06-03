require('dotenv').config();
const { ethers, Contract } = require('ethers');
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');

const rpcURL = process.env.RPC_URL;
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const CONTRACT_ADDRESS_USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // USDC
const CONTRACT_ABI_USDC = JSON.parse(fs.readFileSync('Contract-ABI-USDC.json')); // ERC-20 ABI
const CONTRACT_ADDRESS_USDT = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // USDT
const CONTRACT_ABI_USDT = JSON.parse(fs.readFileSync('Contract-ABI-USDT.json'));
const contract_usdc = new Contract(CONTRACT_ADDRESS_USDC, CONTRACT_ABI_USDC, provider);
const contract_usdt = new Contract(CONTRACT_ADDRESS_USDT, CONTRACT_ABI_USDT, provider);

// Note: USDC uses 6 decimal places
const TRANSFER_THRESHOLD = 1000000000000;

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with the token provided by BotFather
const bot = new TelegramBot(process.env.TELEGRAM_KEY, { polling: true });

const formatNumberWithCommas = (number) => {
  const [wholePart, decimalPart] = ethers.utils.formatUnits(number, 6).split('.');
  return `${wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimalPart}`;
};

const sendTelegramMessage = async (message) => {
  try {
    // Replace 'CHAT_ID' with the ID of the chat or channel where you want to send the message
    await bot.sendMessage(process.env.CHAT_ID, message);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  const name = await contract_usdc.name();
  const nameB = await contract_usdt.name();
  console.log(`Whale tracker started!\nListening for large transfers on ${name} and ${nameB}`);

  contract_usdc.on('Transfer', async (from, to, amount, data) => {
    if (amount.toNumber() >= TRANSFER_THRESHOLD) {
      try {
        const formattedAmount = formatNumberWithCommas(amount);
        await sendTelegramMessage(`🐋🐋🐋 Whale alert 🚨 ${formattedAmount} USDC transferred from address ${from} to address ${to} | tx hash: https://etherscan.io/tx/${data.transactionHash}`);
        console.log("Message USDC sent successfully!");
      } catch (e) {
        console.log(e);
      }
    }
  });

  contract_usdt.on('Transfer', async (from, to, amount, data) => {
    if (amount.toNumber() >= TRANSFER_THRESHOLD) {
      try {
        const formattedAmount = formatNumberWithCommas(amount);
        await sendTelegramMessage(`🐋🐋🐋 Whale alert 🚨 ${formattedAmount} USDT transferred from address ${from} to address ${to} | tx hash: https://etherscan.io/tx/${data.transactionHash}`);
        console.log("Message USDT sent successfully!");
      } catch (e) {
        console.log(e);
      }
    }
  });
};

main();
