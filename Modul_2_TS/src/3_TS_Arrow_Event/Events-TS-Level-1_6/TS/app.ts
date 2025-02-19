const selector = document.querySelector<HTMLInputElement>(".selector")
const outputtxt = document.querySelector<HTMLParagraphElement>(".output")

addEventListener("change", selectchange);

function selectchange() {
    if (selector && outputtxt) {
        outputtxt.innerHTML = "Du hast ausgewählt:" + selector.value;
    }
}