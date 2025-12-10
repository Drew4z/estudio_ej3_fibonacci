document.addEventListener("DOMContentLoaded",()=>{
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    const containerResult = document.getElementById("containerResult")
    const number = 0;

    if(number == 0){
        previous.disabled = true;
    }

    loadResult(number, containerResult);

    next.addEventListener("click",()=>{
        
        console.log(document.getElementById("numberValue").textContent);
        const currentNumber = parseInt(document.getElementById("numberValue").textContent);
          console.log(currentNumber);
        const nextNumber = fibonacci(currentNumber);
        console.log(nextNumber);
        loadResult(nextNumber, containerResult);
    })

    function loadResult(number, container){
        container.innerText = '';

        const span = document.createElement("span");
            span.textContent = number;
            span.id = "numberValue";

        container.appendChild(span);
    }


    function fibonacci(number){
        if(number == 0 || number == 1){
            return number;
        }

        const n = number+ (number - 1);
        return n;
    }

})