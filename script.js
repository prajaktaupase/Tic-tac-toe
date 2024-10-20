
let boxes = document.querySelectorAll(".btn1");
let rreset = document.querySelector("#rreset");
let msgcontainer = document.querySelector(".msg-container");
let newg = document.querySelector("#newg");
let msg = document.querySelector("#msg");



let turnO = true;

let count = 0;

const win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((btn) => {

    btn.addEventListener("click",()=>{
        if(turnO){
            btn.innerText ="O";
            turnO= false;
        }
        else{
            btn.innerText ="X";
            turnO= true;
        }
        btn.disabled =true;

         count++;

    let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();

    }});
});


const  gameDraw =() => {
    
  msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
  disablebtn();


}

const disablebtn = () =>{

   for (let box of boxes){
        box.disabled =true;
   }
};
const enablebtn = () =>{

    for (let box of boxes){
        box.disabled= false ;
        box.innerText="";
    }
 };

const resetGame = () =>{

    turnO = true;
    count = 0 ;
    enablebtn();
    msgcontainer.classList.add("hide");
    
};

const showwinner =(winner) =>{

    msg.innerText=`Congrats, winner is ${winner} `;

    msgcontainer.classList.remove("hide");
    disablebtn();
};

const checkwinner=()=>{

    for (let pattern of win ){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !="" && pos2 != "" && pos3 !=""){

            if (pos1==pos2 && pos2==pos3){
                //console.log("Winner");
                showwinner(pos1);
                return true;
            }

        }
    }

};

newg.addEventListener("click",resetGame);
rreset.addEventListener("click",resetGame);
