


document.addEventListener('DOMContentLoaded', function () {

    init();

});


function init() {
    let els = document.getElementsByClassName("card");
   // els.addEventListener("touchstart", handleStart, false);

    Array.from(els).forEach( (el) => {
         el.addEventListener("touchstart", handleStart, false);

    });

    // el.addEventListener("touchend", handleEnd, false);
    // el.addEventListener("touchcancel", handleCancel, false);
    // el.addEventListener("touchmove", handleMove, false);
    console.log("initialized.");
}


function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.")

}

//
//
// function registerListeners () {
//     const tiles = document.getElementsByClassName("box");
//
//     Array.from(tiles).forEach((tile) => {
//         tile.addEventListener('click', function () {
//
//             const active = tile.classList.contains("box-active");
// // const top = window.pageYOffset;
//             if (active) {
//
//
//                 console.info("active....");
//                 tile.style.transform = "translate(0px, 0px)";
//
//                 tile.classList.remove("box-active")
//
//             } else {
//                 const style = window.getComputedStyle(tile);
//                 const top = style.getPropertyValue('top');
//                 console.log(top);
//
//                 tile.classList.add('box-active');
//                 tile.style.transform = "translate(120px, 120px)";
//                 // tile.style.top = top.toString();
//                 // const tileTop = tile.style.top.toString();
//                 const windowXPos = window.pageXOffset.toString();
//                 const newTileTop = 0;
//                 console.log("coords: ", top, " ", windowXPos);
//
//             }
//
//         });
//     });
// }
