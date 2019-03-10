document.addEventListener('DOMContentLoaded', function () {

    init();

});


function init() {
    const cards = document.getElementsByClassName("card");

    Array.from(cards).forEach((card) => {
        card.move = false;
        card.addEventListener("touchend", function (evt) {
            if (card.move === true) {
                console.log("Not a Tap.")
            } else {
                evt.preventDefault();

                console.log("TAP TAP.")
            }

        });


        // card.addEventListener("touchend", handleStart, false);
        card.addEventListener("touchmove", function (evt) {
            // evt.preventDefault();
            card.move = true;
        });
    });

    console.log("Touch initialized.");
}


// function handleStart(evt) {
//     evt.preventDefault();
//     console.log("touchstart.")
//
// }

/*
if touchmove then not a tap

*/