const button3 = document.getElementById('myGame3');
const button8 = document.getElementById('myGame3.1');
const button13 = document.getElementById('myGame3.2');

button3.onclick = startGame;
button8.onclick = startGame;
button13.onclick = startGame;

function startGame() {

    const userText = prompt('Набери небольшой текст и прочти наоборот');

    function reverseString(str) {
        let newString = "";

        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    alert(reverseString(userText));
}