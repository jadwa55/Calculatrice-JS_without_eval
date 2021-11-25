const elements = {
    numbers: document.querySelectorAll(".number"),
    signs: document.querySelectorAll(".signs"),
    point: document.querySelector("#point"),
    equals: document.querySelector("#equals"),
    clear: document.querySelector("#clear"),
    currentCalculation: document.querySelector("#current-calculation"),
};

function numberClicked(e) {
    const button = e.target;
    const number = button.textContent;
    elements.currentCalculation.textContent +=number;
}

elements.numbers.forEach((element) => {
    element.addEventListener("click", numberClicked);
});

elements.signs.forEach((element) => {
    element.addEventListener("click", numberClicked);
});

elements.clear.addEventListener("click", () => {
    elements.currentCalculation.textContent ="";
});

elements.point.addEventListener("click", () => {
    const lastChar = elements.currentCalculation.textContent.slice(-1);
    if(lastChar!== "."){
    elements.currentCalculation.textContent += ".";
    }
});

elements.equals.addEventListener("click", (e) => {
    const text = elements.currentCalculation.textContent;
    let result;
    let first;
    let curruntSign;
    let second;
    for (const char of text.split("")){
        if(first ===undefined){
            first = char;
            continue;
        }else if (curruntSign === undefined){
            curruntSign = char;
            continue;
        }else if (second === undefined) {
            second = char;
            continue;
        }else {
            const operation = {
                "+": first + second,
                "-": first + second,
                "*": first + second,
                "/": first + second,
            };
        }
    }
})

