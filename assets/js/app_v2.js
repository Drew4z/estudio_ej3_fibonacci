import { fibonacci } from "./fibonacciService.js";

document.addEventListener("DOMContentLoaded",()=>{
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    const containerResult = document.getElementById("containerResult");
    let seedNumber = 0;
    console.log(seedNumber)

    updateLayout();
    loadResult(seedNumber, containerResult);

    previous.addEventListener("click",()=>{
        seedNumber -=1;
        updateLayout();
        loadResult(seedNumber,containerResult);
        
    })
    
    next.addEventListener("click",()=>{
        seedNumber +=1;
        updateLayout();
        loadResult(seedNumber,containerResult);
    })


    function updateLayout(){
        seedNumber == 0 ? previous.disabled = true : previous.disabled = false
    }

    function loadResult(number, container){
        container.innerText = '';

        const fiboNumber = fibonacci(number);

        const span = document.createElement("span");
            span.textContent = fiboNumber;

        container.appendChild(span);
    }

})