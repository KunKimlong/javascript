var input = document.querySelector('input');

const clickShowNumber = (num)=>{
    input.value = input.value+num;
}

const calculate = ()=>{
    input.value = eval(input.value);
}

const absolute = ()=>{
    input.value = input.value*-1
}
const percent = ()=>{
    input.value = input.value/100;
}
const clearNumber = ()=>{
    input.value = '';
}