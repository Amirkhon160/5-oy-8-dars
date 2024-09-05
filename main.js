// let myarray = [
//     {
//         id: 1,
//         title: "Ryukzak",
//         image: "https://fjallraven.co.nz/cdn/shop/products/Foldsack_No._1_24210-560_A_MAIN_FJR_1100x.png?v=1721022412",
//         button: "BUY"

//     },
//     {
//         id: 2,
//         title: "Futbolka ",
//         image: "https://png.pngtree.com/png-vector/20240607/ourmid/pngtree-casual-comfort-exploring-the-versatility-of-t-shirts-png-image_12647213.png",
//         button: "BUY"

//     },
//     {
//         id: 3,
//         title: "Kurtka",
//         image: "https://www.pngarts.com/files/4/Nylon-Jacket-PNG-Free-Download.png",
//         button: "BUY"

//     },

// ]


// let body = document.querySelector("body");
// body.style.display = "flex";
// body.style.justifyContent = "Space-around";


// myarray.forEach((item, index) => {
//     let ParentBox = document.createElement("div");
//     let box = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let img = document.createElement("img");

//     h2.textContent = item.title;
//     img.src = item.image;
//     img.alt = item.title;
//     img.style.width = "175px";


//     box.style.border = "5px solid black";
//     body.style.backgroundColor = "white"
//     box.style.backgroundColor = "bisque"
//     h2.style.color = "black"
//     h2.style.fontSize = "25px"
//     h2.style.textAlign = "center"







//     box.style.borderRadius = "10px";
//     box.style.margin = "10px";
//     box.style.padding = "10px";
//     box.style.width = "400px";
//     box.style.height = "300px"
//     box.style.width = "313px"

//     box.append(h2, img);
//     ParentBox.appendChild(box);
//     body.append(ParentBox);


// });



// let button = document.querySelector('button')
// let input = document.querySelector('input')
// let h1 = document.querySelector('h1')





// button.addEventListener('click', (event) =>{
// event.preventDefault()
// console.log(input.value);
// body.style.backgroundColor = input.value

// })





let counter = 0;

let counterDisplay = document.getElementById('counter');
let incrementBtn = document.getElementById('incrementBtn');
let decrementBtn = document.getElementById('decrementBtn');

function updateCounterDisplay() {
    counterDisplay.innerText = counter;
}

incrementBtn.addEventListener('click', function() {
    counter++;
    updateCounterDisplay();
});

decrementBtn.addEventListener('click', function() {
    counter--;
    updateCounterDisplay();
});
