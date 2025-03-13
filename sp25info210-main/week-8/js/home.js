const petsULRef = document.querySelector("#pets");

// Data Variables
const pets =["Siamese", "Calico", "Tortoise Shell", "Orange", "Hairless", "Bobtail", "Longhair"];
const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240",
    "https://picsum.photos/250",
    "https://picsum.photos/260",
];

//Loop Throughour List

for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);

    const image = images[i];
    console.log(image);

    const imageHtml = "<img src='" + image + "' alt='' />";

    petsULRef.innerHTML += "<li>" + pet + imageHtml +"</li>";
    
}