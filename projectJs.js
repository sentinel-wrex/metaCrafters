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
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _pantType, _bling) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "pantType": _pantType,
        "bling": _bling
    }

    NFTs.push(NFT);
    console.log("Minted: "+ _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nID is: " + '"' + (i+1) + '"');
        console.log("Name is: " + '"' + NFTs[i].name + '"');
        console.log("EyeColor is: " + '"' + NFTs[i].eyeColor + '"');
        console.log("Shirt Type is: " + '"' + NFTs[i].shirtType + '"');
        console.log("Pant Type is: " + '"' + NFTs[i].pantType + '"');
        console.log("Bling is: " + '"' + NFTs[i].bling + '"');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFTs minted are: " + NFTs.length);
}

// call your functions below this line
mintNFT("Max", "Black", "Sweatshirt","Jeans", "Diamond chain");
mintNFT("Sam", "Red", "T-Shirt", "Trousers", "Diamond Ring");
mintNFT("Jack", "Yellow", "Shirt", "Chinos", "Diamond Bracelet");
mintNFT("Joe", "Green", "Hoodie", "Cargos", "Diamond glasses");

listNFTs();
getTotalSupply();