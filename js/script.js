document.addEventListener('DOMContentLoaded', function () {

    init();

});


function init() {
    const cards = document.getElementsByClassName("card");

    Array.from(cards).forEach((card) => {
        card.addEventListener("touchstart", handleStart, false);
    });

    console.log("initialized.");
}


function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.")

}