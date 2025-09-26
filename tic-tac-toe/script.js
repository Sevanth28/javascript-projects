let boxes=document.querySelectorAll(".btn");
let reset=document.getElementById("reset");
let newgame=document.getElementById("New");
let msgcontainer=document.querySelector(".msgcontainer");
let winne=document.getElementById("msg");
let turn0=true;
const  win=[
    [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

 boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turn0){
            box.innerText=("0");
            box.style.color="#EAEBD0";
            turn0=false;
        }
        else{
            box.innerText=("X");
            box.style.color="#9FB3DF";
            turn0=true;

        }
        box.disabled=true;
        checkwinner();
        
            })
        })
        const resets=() => {
            enableboxes();
              msgcontainer.classList.add("hide");

        }
        const disableboxes =() =>{
            for(box of boxes){
                box.disabled=true;
            }
        }
        const enableboxes =() =>{
            for(box of boxes){
                box.disabled=false;
                box.innerText="";
              

            }
        }
        const winner=(win) =>{
            winne.innerText=`Congratulations,the winner is ${win}`;
            msgcontainer.classList.remove("hide");
            disableboxes();
        }
        const draw=() =>{
            
        }
 
 
        const checkwinner = () => {
            for( let pattern of win) {
                let pos1=boxes[pattern[0]].innerText;
                let pos2=boxes[pattern[1]].innerText;
                let pos3=boxes[pattern[2]].innerText;
                if(pos1 !=""&&pos2 !=""&&pos3 !=""){
                    if(pos1==pos2&&pos2==pos3){
                        winner(pos1);
            
            }        }
                
                    
                    
                }
               
        }
    
    newgame.addEventListener("click",resets);
    reset.addEventListener("click",resets);