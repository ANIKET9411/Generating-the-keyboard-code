let container=document.querySelector('.container');
let sound=document.querySelector('#sound');
let main=document.querySelector('.main');
let character=document.querySelector('.character');
let pressed=document.querySelector('.pressed');
let codes=document.querySelector('.codes');
let historylist=document.querySelector('.history')
let histories=document.querySelector('.histories');

codes.style.display='none';
let history="";
document.addEventListener('keydown',function(event){
    let keys=event.key;
    let code=event.keyCode;
    if(event.ctrlKey && event.key!==undefined)
    {
        character.innerText=("ctrl+"+keys);
        sound.play();
        codes.style.display='none';
    }
    else{
        character.innerText=keys;
        codes.innerText=code;
        codes.style.display='block';
    }
    history+=keys+" ";
    pressed.style.display='block';
    container.style.display='none';
});
historylist.addEventListener('click',function(){
    histories.innerText=history;
    });




