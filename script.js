let currentVal= "";
let prevVal="";
let currentOp="";

function appendNum(n){
    currentVal+=n;
    document.getElementById('display').value=`${prevVal} ${currentOp} ${currentVal}`;
}
function appendOp(o){
    if(currentVal === '') return;
    if(prevVal !== '') {
        calculate();
    }
    currentOp=o;
    prevVal = currentVal;
    currentVal='';
    document.getElementById('display').value = `${prevVal} ${currentOp}`;
}
function calculate(){
    if(prevVal == '' || currentVal=='') return;
    let prev = parseFloat(prevVal);
    let cur = parseFloat(currentVal);
    let result;

    switch(currentOp){
        case '+':
            result = prev + cur;
            break;
        case '-':
            result = prev - cur;
            break;
        case '/':
            if(cur != 0) result = prev / cur;
            else document.getElementById('display').value="error";
            return;
        case 'x':
            result = prev * cur;
            break;
        default:
            document.getElementById('display').value = "erorrr";
            return;
        
    }
    currentVal= result.toString();
    prevVal='';
    currentOp='';
    document.getElementById('display').value = `${currentVal}`;

}
function clearDisplay(){
    currentVal='';
    currentOp='';
    prevVal='';
    document.getElementById('display').value='';
}