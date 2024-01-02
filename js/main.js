let imageBox = document.querySelectorAll(".imageBox"),
    portfoliImg = document.querySelectorAll(".imageBox img")
overlay = document.querySelector(".overlay"),
    pop_image = document.querySelector(".pop_image"),
    popImg = document.querySelector(".pop_image img");

imageBox.forEach(box => {
    box.addEventListener("click", () => {
        overlay.classList.add("active");
        pop_image.classList.add("active");
        popImg.src = box.querySelector("img").src;
    })
})

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    pop_image.classList.remove("active")
})