let screen= document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='C'){
            screenValue = '';
            screen.value='';
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
            screenValue = '';
        }else{
            screenValue += buttonText;
            screen.value += buttonText;
        }
    });
}