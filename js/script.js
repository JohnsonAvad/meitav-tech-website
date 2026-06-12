let images=[

"images/laptop.png",

"images/home.jpg",

"images/wilson.jpg"

];


let texts=[

"Welcome to Meitev. Quality technology. Trusted experience",

"With Meitev, tech is not just products, its an experience",

"Thanks to our ecosystem and clients"

];


let i=0;


setInterval(()=>{


i++;


if(i>=images.length){

i=0;

}


document.getElementById("slider").src=images[i];


document.getElementById("caption").innerHTML=texts[i];


},4000);
