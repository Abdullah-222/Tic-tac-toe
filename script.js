let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turn0=true;
const winPat=[
    [0,4,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8]
]
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button is clicked");
        if (turn0) {
            box.innerText="X";
            turn0=false;
        } else {
            box.innerText="O"
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableboxes=()=>{
     for(let box of boxes){
        box.disabled=true;
     }
}
const enableboxes=()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText="Congratulations You're Winner";
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    for( let pattern of winPat){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; 
    
    if (pos1Val!="" &&pos2Val!=""&& pos3Val !="") {
        if (pos1Val===pos2Val&&pos2Val===pos3Val) {
            console.log("winner",pos1Val);

            showWinner(pos1Val);
        }
    }}
};
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);