const form = document.querySelector("form");
const card = document.querySelector(".card");
const card_success = document.querySelector(".card-success");


form.addEventListener("submit", (e) => {

    e.preventDefault();
    card.classList.add("hide");
    card_success.classList.remove("hide");    
})
