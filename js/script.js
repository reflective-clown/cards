document.addEventListener('DOMContentLoaded', function () {

    init();

});

function init() {
    const cards = document.getElementsByClassName("card");

    Array.from(cards).forEach((card) => {
        card.addEventListener("touchend", function (evt) {
                console.log("TAP TAP.")
        });

    });

    console.log("Touch initialized.");
}

