const file = document.getElementById("file-input");
const submitButton = document.getElementById("submit");
const copyButton = document.getElementById("copy-poem");
const input = document.getElementById("image-input");
const drag = document.getElementById("drag");
const image = document.getElementById("uploaded-image");
const poem = document.getElementById("poem")

input.addEventListener("click", (e) => {
    file.click();
})

file.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => image.setAttribute("src", e.target.result);
    fileReader.readAsDataURL(file);
    image.classList.remove("hidden")
    drag.classList.add("hidden")
    submitButton.classList.remove("hidden")
})

copyButton.addEventListener("click", (e) => {
    navigator.clipboard.writeText(poem.innerText).catch(e => { alert("Error copying text") })
})