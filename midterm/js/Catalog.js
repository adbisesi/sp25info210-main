//create a constant to reference off of
const catalogRef = document.querySelector("#cataloglist");

//data for the grids

const catalogItems = [

    {
        image: "https://www.figma.com/file/7iFgOnyNeAPBb25UQiMjCT/image/5c7be56f906ee0f61136a050e1e5e79ed5fb0c31",
        name: "My First Fire",

    }, {
        image: "https://www.figma.com/file/7iFgOnyNeAPBb25UQiMjCT/image/554cb28d412e76012baef2e2e5bd2e6668605662",
        name: "Handy Hand",

    },
    {
        image: "https://www.figma.com/file/7iFgOnyNeAPBb25UQiMjCT/image/514142e4077559592476b447ca9c5469a05bbe0c",
        name: "NapSack",

    }, {
        image: "https://www.figma.com/file/7iFgOnyNeAPBb25UQiMjCT/image/54d95161fb3abb2a548b316fc1bbe673efed640c",
        name: "Hot Tub Wildlife Feeder",

    }, {
        image: "https://www.figma.com/file/7iFgOnyNeAPBb25UQiMjCT/image/ff877ddfbbc11b9218f6f4deb970afcfb99b82fc",
        name: "Toilet Meadow",

    }, {
        image: "https://www.figma.com/file/7iFgOnyNeAPBb25UQiMjCT/image/2900e791fe3709d4a30f95ef45037f380f9a470e",
        name: "Pudding Pouch",

    },
]; 

catalogRef.innerHTML = "";

for (let index = 0; index < catalogItems.length; index++) {
    const item = catalogItems[index];
    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);
    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHTML += newP;
    
    catalogRef.appendChild(newArticle);
}
