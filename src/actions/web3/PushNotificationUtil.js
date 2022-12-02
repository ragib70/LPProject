import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = process.env.PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Order booked`,
        body: `You order has been booked on BankiFi`
      },
      payload: {
        title: `BankiFi order booked`,
        body: `Hi, your order placed on BankiFi has been booked and an NFT has been minted to your wallet address.`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0xfcAB9CaFC67535fE27F88C0b30Ec5E69221D96b7', // recipient address
      channel: 'eip155:5:0xfcAB9CaFC67535fE27F88C0b30Ec5E69221D96b7', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

export { sendNotification };