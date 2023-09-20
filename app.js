// const correctValue = document.getElementsByClassName("correct_value");
// const correctValue = document.getElementsByTagName("h2");

const correctValue = document.querySelector("#correct_value");
const squares = document.querySelectorAll(".square");
const button = document.querySelector(".btn");
let isWin = false;

// console.log(correctValue);

const colors = [];

for(let i = 0; i < 9; i++){
    colors.push(`rgb(${Math.floor(Math.random() * 256)}), ${Math.floor(Math.random() * 256)}), ${Math.floor(Math.random() * 256)})`);
   
}

const correctColor = colors[Math.floor(Math.random() * 9)];
correctValue.textContent = correctColor;

squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
    square.setAttribute("color",colors[i]);
})

// squares[0].style.backgroundColor = colors[0];

squares.forEach((square) => {
    square.addEventListener("click", ()=> {
        const squareColor = square.getAttribute("color");
        if(!isWin){
            if(squareColor === correctColor){
                squares.forEach(squ => {
                    squ.style.backgroundColor = correctColor;
                })
                isWin = true;
            }
            else {
                square.style.backgroundColor = "#0A141D";
            }
        }
    })  
})

button.addEventListener("click", () => {
    location.reload();
})