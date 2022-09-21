const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEL = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
    remainingCounter()
})

updateCounter();
remainingCounter();

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length
}

function remainingCounter() {
    remainingCounterEL.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}