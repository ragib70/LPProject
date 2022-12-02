const mintNFTUsingNFTPort = async () => {
    const url = "https://api.nftport.xyz/v0/mints/customizable/batch"
    const data = {
        "tokens": [
            {
                "mint_to_address": "0x3E6dE70dbF930f323887D1ba0727cEfAB81f8aeC",
                "token_id": "2",
                "metadata_uri": "https://ipfs.io/ipfs/QmWmsL95CYvci8JiortAMhezezr8BhAwAVohVUSJBcZcBL",
                "quantity": 1
            },
            {
                "token_id": "3",
                "mint_to_address": "0xd33A543b5f838B95763653F64693C2062A6D8EE0",
                "metadata_uri": "https://ipfs.io/ipfs/QmWmsL95CYvci8JiortAMhezezr8BhAwAVohVUSJBcZcBL",
                "quantity": 1
            }
        ],
        "chain": "goerli",
        "contract_address": "0x349b0c6472989b8A4BD43Cc804ab4Ac062a78a4F"    
    }
    const headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "Authorization": process.env.NFT_PORT_API_KEY
    }

    try {
        const response = await fetch(url, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(data)
        });
        const res = await response.json();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
    return "";
}

export { mintNFTUsingNFTPort };
