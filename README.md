# Twitter Bot Alert USDC

This Project i learn about 
- ether js, 
- nodejs,  
- twitter api v2 

 this is my first project learn on web3, espesialy thanks to dappuniversity i got inspiration from this youtube video 


[![Watch the video](https://img.youtube.com/vi/u_lwNJobmAI/maxresdefault.jpg)](https://youtu.be/u_lwNJobmAI)



Twitter Bot Alert USDC is a bot that tracks large transfers of USDC (USD Coin) on the Ethereum blockchain and alerts about them on Twitter.


## Prerequisites

Before running the bot, make sure you have the following:

- Node.js 
- API credentials from Twitter 
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
   RPC_URL=YOUR_RPC_URL
   API_KEY=YOUR_CONSUMER_KEY
   API_SECRET=YOUR_CONSUMER_SECRET
   ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ACCESS_TOKEN_SECRET=YOUR_ACCESS_TOKEN_SECRET
   BEARER_TOKEN=YOUR_BEARER_TOKEN

   
Replace YOUR_RPC_URL, YOUR_CONSUMER_KEY, YOUR_CONSUMER_SECRET, YOUR_ACCESS_TOKEN, YOUR_ACCESS_TOKEN_SECRET and YOUR_BEARER_TOKEN  with your actual values.




## Usage

      
      npm start


The bot will listen for large transfers of USDC and post alerts on Twitter.



## License

This project is licensed under the MIT License.

