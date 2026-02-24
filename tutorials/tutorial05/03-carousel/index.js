let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) { //created the function of moveCarousel
    const items = document.querySelectorAll(".carousel-item"); //selects all items aka images

    if (direction == "forward") { //creates an if statement
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) { //allows if the forward button is clicked for the pictures to start flipping through
            return false;
        }
        currentPosition++;
    } else {
        if (currentPosition == 0) {
            return false;
        }
        currentPosition--;
    }

    const offset = (slideWidth + gap) * currentPosition;

    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
