import { create as ipfsHttpClient } from 'ipfs-http-client'
import { Buffer } from 'buffer'

const getNFTMetadataURIFromInfuraIPFS = async (data) => {
    const projectId = '2HzRS59YzbXfRCdtunpS3G6ZN97';
    const projectSecret = process.env.INFURA_PROJECT_SECRET_KEY;
    const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    const client = ipfsHttpClient({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    });
    try {
        const result = await client.add(data);
        const uri = `https://infura-ipfs.io/ipfs/${result.path}`;
        return uri
    } catch (error) {
        console.log("ipfs image upload error: ", error)
    }
    return '';
}

export { getNFTMetadataURIFromInfuraIPFS };