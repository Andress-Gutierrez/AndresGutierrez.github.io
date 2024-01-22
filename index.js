const contador =document.getElementById("incr");


let numero =0;

contador.addEventListener("click",()=>{
    numero++;
    alert(numero);
    console.log(contador);
    console.log(numero);
});
