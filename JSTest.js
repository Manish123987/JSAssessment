/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, image) {
  let nft = {
    name: name,
    description: description,
    image: image
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Description: " + nftCollection[i].description);
    console.log("Image: " + nftCollection[i].image);
    console.log("---------------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + nftCollection.length);
}

// call your functions below this line
mintNFT("NFT 1", "This is NFT 1", "https://example.com/nft1.jpg");
mintNFT("NFT 2", "This is NFT 2", "https://example.com/nft2.jpg");
listNFTs();
getTotalSupply();
