let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#btnContainer button");
let menssageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador
let player1 =0;
let player2 =0;

//adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
    //quando alguem clica na caixa

    boxes[i].addEventListener("click", function() {
        let a =checkA(player1,player2)

        //verifica se ja tem x ou o
       if(this.childNodes.length == 0){
           let cloneA = a.cloneNode(true);
           this.appendChild(cloneA);

           //computar jogada
           if (player1 == player2){
               player1 ++;

               if(secondPlayer== 'aiPlayers'){
                   //funcao executar a jogada
                   computerPlay();
                   player2++;
               }

           }else{
               player2++;
           }
       }
       //verifica vencedor
        checkWin()
    });
}


//evento 2 players ou ia
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");

        for (let j =0; j<buttons.length;j++){
            buttons[j].style.display = "none";
        }
        setTimeout(function (){
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        },500);

    });
}


function checkA(player1,player2) {
    if(player1 == player2){
        //x
        a =x;
    }else{
        //o
        a=o;
    }
    return a;
}


function checkWin(){
    let b1 =document.getElementById("block-1");
    let b2 =document.getElementById("block-2");
    let b3 =document.getElementById("block-3");
    let b4 =document.getElementById("block-4");
    let b5 =document.getElementById("block-5");
    let b6 =document.getElementById("block-6");
    let b7 =document.getElementById("block-7");
    let b8 =document.getElementById("block-8");
    let b9 =document.getElementById("block-9");

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1ChildNode = b1.childNodes[0].className;
        let b2ChildNode = b2.childNodes[0].className;
        let b3ChildNode = b3.childNodes[0].className;

        if(b1ChildNode =='x' && b2ChildNode =='x' && b3ChildNode =='x'){
            declareWinner('x');
        }else if (b1ChildNode =='o' && b2ChildNode =='o' && b3ChildNode =='o'){
            declareWinner('o');
        }

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4ChildNode = b4.childNodes[0].className;
        let b5ChildNode = b5.childNodes[0].className;
        let b6ChildNode = b6.childNodes[0].className;

        if(b4ChildNode =='x' && b5ChildNode =='x' && b6ChildNode =='x'){
            declareWinner('x');
        }else if (b4ChildNode =='o' && b5ChildNode =='o' && b6ChildNode =='o'){
            declareWinner('o');
        }

    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7ChildNode = b7.childNodes[0].className;
        let b8ChildNode = b8.childNodes[0].className;
        let b9ChildNode = b9.childNodes[0].className;

        if(b7ChildNode =='x' && b8ChildNode =='x' && b9ChildNode =='x'){
            declareWinner('x');
        }else if (b7ChildNode =='o' && b8ChildNode =='o' && b9ChildNode =='o'){
            declareWinner('o');
        }

    }

    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1ChildNode = b1.childNodes[0].className;
        let b4ChildNode = b4.childNodes[0].className;
        let b7ChildNode = b7.childNodes[0].className;

        if(b1ChildNode =='x' && b4ChildNode =='x' && b7ChildNode =='x'){
            declareWinner('x');
        }else if (b1ChildNode =='o' && b4ChildNode =='o' && b7ChildNode =='o'){
            declareWinner('o');
        }

    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2ChildNode = b2.childNodes[0].className;
        let b5ChildNode = b5.childNodes[0].className;
        let b8ChildNode = b8.childNodes[0].className;

        if(b2ChildNode =='x' && b5ChildNode =='x' && b8ChildNode =='x'){
            declareWinner('x');
        }else if (b2ChildNode =='o' && b5ChildNode =='o' && b8ChildNode =='o'){
            declareWinner('o');
        }

    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3ChildNode = b3.childNodes[0].className;
        let b6ChildNode = b6.childNodes[0].className;
        let b9ChildNode = b9.childNodes[0].className;

        if(b3ChildNode =='x' && b6ChildNode =='x' && b9ChildNode =='x'){
            declareWinner('x');
        }else if (b3ChildNode =='o' && b6ChildNode =='o' && b9ChildNode =='o'){
            declareWinner('o');
        }

    }

    //diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1ChildNode = b1.childNodes[0].className;
        let b5ChildNode = b5.childNodes[0].className;
        let b9ChildNode = b9.childNodes[0].className;

        if(b1ChildNode =='x' && b5ChildNode =='x' && b9ChildNode =='x'){
            declareWinner('x');
        }else if (b1ChildNode =='o' && b5ChildNode =='o' && b9ChildNode =='o'){
            declareWinner('o');
        }

    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3ChildNode = b3.childNodes[0].className;
        let b5ChildNode = b5.childNodes[0].className;
        let b7ChildNode = b7.childNodes[0].className;

        if(b3ChildNode =='x' && b5ChildNode =='x' && b7ChildNode =='x'){
            console.log('x venceu ');
        }else if (b3ChildNode =='o' && b5ChildNode =='o' && b7ChildNode =='o'){
            console.log('o venceu ');
        }

    }

    //velha
    let counter =0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] !=undefined){
        counter ++
        }
    }
    if (counter == 9){
        declareWinner('velha');
    }
}

//declara o vencedor e limpa o game
function declareWinner(winner){
    let scoreX = document.querySelector("#xScore1");
    let scoreY = document.querySelector("#oScore2");
    let msg ='';

    if(winner == 'x'){
        scoreX.textContent =parseInt(scoreX.textContent)+1;
        msg ='O Jogador x venceu!'
    }else if(winner == 'o') {
        scoreY.textContent = parseInt(scoreY.textContent) + 1;
        msg ='O Jogador o venceu!'
    }else{
        msg ='Velha!';
    }
    //exibe mensagem
        messageText.innerHTML = msg;
        menssageContainer.classList.remove('hide');

    //esconde mensagem
    setTimeout(function(){
        menssageContainer.classList.add("hide")
    },3000);

    //zerar as jogadas
    player1=0;
    player2=0;

    //remove x eo
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}

//logica jogada IA
function computerPlay(){
    let cloneO= o.cloneNode(true);
    counter =0;
    filled =0;

    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random()*5);
        //so preenche se estiver vazio o filho
        if(boxes[i].childNodes[0]== undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            //checagem de quantas estão preenchidas
        }else{
            filled ++;
        }
    }
    if (counter == 0 && filled < 9){
        computerPlay();
    }
}