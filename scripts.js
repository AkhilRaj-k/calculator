function valinp(e){
    // console.log(e.target.textContent)
    inp.value+=e.target.textContent
}
function ev(){
    inp.value=eval(inp.value)
}
// function resultEval(){
//     inp.value=eval(inp.value)
// }
function clearinp(){
    inp.value=""
}

function backspace(){
    inp.value=inp.value.slice(0,-1);
}