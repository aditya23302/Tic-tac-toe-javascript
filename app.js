const boxes=Array.from(document.getElementsByClassName('box'));
console.log(boxes);
const playText=document.getElementById('PlayText')
const restartBtn=document.getElementById('restartBtn');
const o_player="O";
const x_player="X";
const spaces=[];
let currentplayer;
moves=0;
const drawBoard=()=>{
    boxes.forEach((box,index)=>{
        let styleString='';
        if(index<3)
        {
            styleString+=`border-bottom:3px solid var(--purple);`;

        }
        if(index%3===0)
        {
            styleString+=`border-right: 3px solid var(--purple);`;

        }
        if(index>5)
        {
            styleString+=`border-top: 3px solid var(--purple);`;
        }
        if(index%3===2)
        {
            styleString+=`border-left: 3px solid var(--purple);`;
        }
        box.style=styleString;
        box.addEventListener('click',boxclicked)
    });
};
const boxclicked=(e)=>{
    moves=moves+1;
    console.log("Box clicked");
    console.log(moves);
    const id=e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id]=currentplayer;
        e.target.innerText=currentplayer;

        if(playerhaswon())
        {
            playText.innerText=`---${currentplayer} has Won!!!!---`;
            return;
        }
        currentplayer=currentplayer===o_player?x_player:o_player;
        if(!playerhaswon() && moves===9)
        {
            playText.innerText=`---Its a TIE---`;
            return;
        }
        
    }

};

const playerhaswon=()=>{
    if(spaces[0]===currentplayer){
        if(spaces[1]===currentplayer && spaces[2]===currentplayer)
        {
            return true;
        }
        if(spaces[3]===currentplayer && spaces[6]===currentplayer)
        {
            return true;
        }
        if(spaces[4]===currentplayer && spaces[8]===currentplayer)
        {
            return true;
        }
    }
    if(spaces[8]===currentplayer){
        if(spaces[6]===currentplayer && spaces[7]===currentplayer)
        {
            return true;
        }
        if(spaces[2]===currentplayer && spaces[5]===currentplayer)
        {
            return true;
        }
    }
    if(spaces[4]===currentplayer)
    {
        if(spaces[1]===currentplayer && spaces[7]===currentplayer)
        {
            return true;
        }
        if(spaces[3]===currentplayer && spaces[5]===currentplayer)
        {
            return true;
        }
        if(spaces[6]===currentplayer && spaces[2]===currentplayer)
        {
            return true;
        }
    }
    if(moves===9)
    {
        return false;
    }
    
};



const restart=()=>{
    spaces.forEach((space,index)=>{
        spaces[index]=null;
    });
    boxes.forEach((box)=>{
        box.innerText='';
    });
    PlayText.innerText=`---Let's play!!!---`;
    currentplayer=o_player;
    moves=0;
}
restartBtn.addEventListener('click',restart);
restart();
drawBoard();