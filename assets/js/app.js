import { fibonacci } from "./fibonacciService.js";

document.addEventListener("DOMContentLoaded", () => {
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    const containerResult = document.getElementById("containerResult")
    let seedNumber = 0;

    // Initial state
    updateButtonState();
    updateDisplay();

    next.addEventListener("click", () => {
        seedNumber += 1;
        updateDisplay();
        updateButtonState();
    });

    previous.addEventListener("click", () => {
        if (seedNumber > 0) {
            seedNumber -= 1;
            updateDisplay();
            updateButtonState();
        }
    });

    function updateButtonState() {
        seedNumber === 0 ? previous.disabled = true : previous.disabled =   false;
    }

    function updateDisplay() {
        // Calculate the value
        const val = fibonacci(seedNumber);
        // Display result
        loadResult(val, containerResult);
    }

    function loadResult(fiboNumber, container) {
        container.innerText = '';

        const span = document.createElement("span");
        span.textContent = fiboNumber;
        span.id = "numberValue";

        container.appendChild(span);
    }


})