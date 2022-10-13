const NFTStore = {
    artPieces: [
        {
            pieceName: "Emo Flamingos",
            price: 30,
            ownerList: [
                {
                    name: "Fida Ernest",
                    userID: 23849,
                    purchaseDate: "09/13/2021",
                },
                {
                    name: "Eric Karger",
                    userID: 23510,
                    purchaseDate: "09/13/2021",
                },
            ],
        },
        {
            pieceName: "Where is my bit wallet",
            price: 100,
            ownerList: [],
        },
    ],
    storeCredits: 1000,
};

// TARGET PRICE OF FIRST artPieces

// TARGET pieceName OF SECOND artPieces

// WHAT IS NFTStore ?

// WHAT IS artPieces ?

// ADD A BUYER 
// You have to add this buyer to the ownerList of artPice called "Where is my bit wallet"
// HINT : First you need to target the element you want to modify
// HINT : Think about the type and what kind of tool you have to modify
const buyer = {
    name: "Rose Daniel",
    userID: 23849,
    purchaseDate: "11/29/2021",
};

// OUR BUYER IS NOW ADDED, MODIFY storeCredits TO ADD PRICE OF BOUGHT ARTPIECE
