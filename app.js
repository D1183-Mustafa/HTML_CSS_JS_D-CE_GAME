//1 gelene kadar atılan zarlar.
let p1Scor = document.querySelector(".container-1-player-skor");
let p2Scor = document.querySelector(".container-2-player-skor");

// current skorlar.
let p1Sayac = document.querySelector(".container-1-player-sayac-sayac");
let p2Sayac = document.querySelector(".container-2-player-sayac-sayac");

let randomZar = document.querySelector(".random-zar");


const roleDice = document.querySelector(".role-dice");
const holdDice = document.querySelector(".hold");
const newDice = document.querySelector(".new-game");



tümEventler();

function tümEventler() {
    roleDice.addEventListener("click",roleDiceEvent);
    newDice.addEventListener("click" ,() => {
        window.location.reload(false);
    }); // new game butonu ile oyunu sıfırlama işlemi gerçekleştirildi.
}



function roleDiceEvent() {
    console.log("selam");
    randomZar.style.visibility = "visible";  //visibility preporty değeri hidden'dı ; click eventi ile birlikte değeri visible yaptım. görünür hale geldi.
    let zarDeğer = Math.floor(Math.random() * 6) + 1; // rastgele zar değerleri üretiliyor .
    randomZar.innerHTML = `<img src="./images/dice-${zarDeğer}.png" alt="" class="img">`

}