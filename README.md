# Telegram Bot Alert USDC and USDT

This Project i learn about 
- ether js, 
- nodejs,  
- telegram api

 
Telegram Bot Alert USDC is a bot that tracks large transfers of USDC (USD Coin) and USDT (usd tether) on the Ethereum blockchain and alerts about them on Telegram channel.


## Prerequisites

Before running the bot, make sure you have the following:

- Node.js 
- API credentials from Telegram
- RPC URL for the Ethereum network you can use infura, alchemy or your own node

## Installation

1. Clone the repository or download the source code.

2. Install the dependencies by running the following command:

   
      ```bash
      npm install
   
   
   
## Configuration

1. Create a .env file in the root directory of the project.

2. Add the following environment variables to the .env file:


   ```bash

      RPC_URL=yourvalue
      TELEGRAM_KEY=yourvalue
      CHAT_ID=yourvalue
   

   
Replace  with your actual values.




## Usage

      
      npm start


The bot will listen for large transfers of USDC and post alerts on Telegram Channel.



## License

This project is licensed under the MIT License.

