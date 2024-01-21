/*Chatgpt and Github co-pilot used for debugging, writing code, refactoring*/

// Instantiate a new CardGroup to manage a collection of cards
let cardgroup = new CardGroup();

/**
 * Renders the cards in the card group to the HTML container.
 */
function draw() {
    // Retrieve the container element for cards
    let cardContainer = document.getElementById(ELEMENT_TYPES.ID_CARD_CONTAINER);
    // Clear existing content in the container
    cardContainer.innerHTML = USER_MESSAGES.EMPTY_STRING;

    // Iterate over each card in the group and render it
    cardgroup.list.forEach(card => {
        // Create a new div element for each card
        let card_el = document.createElement('div');
        card_el.classList.add('card-read');

        // Create a paragraph element to display the card's text
        let p = document.createElement('p');
        p.innerHTML = card.text;
        card_el.appendChild(p);

        // Append the card element to the container
        cardContainer.appendChild(card_el);
    });
}

/**
 * Updates the clock element with the current time.
 */
function updateClock() {
    // Get the current time
    let now = new Date();
    // Format the time as a string
    let timeString = now.toLocaleTimeString();
    // Retrieve the clock element
    let clock = document.getElementById('clock');
    // Update the clock's text with the current time
    if (clock) {
        clock.textContent = `Last Saved: ${timeString}`;
    }
}

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    // Create a clock div and append it to the body
    let clock = document.createElement('div');
    clock.id = 'clock';
    clock.textContent = 'Last Saved: --:--:--';
    document.body.appendChild(clock);

    // Update the clock every 2 seconds
    setInterval(updateClock, 2000);

    // Create a container for cards and append it to the body
    let cardContainer = document.createElement('div');
    cardContainer.id = 'cardContainer';
    document.body.appendChild(cardContainer);

    // Create a return button and append it to the body
    let returnButton = document.createElement('button');
    returnButton.textContent = 'Return to Index';
    returnButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    document.body.appendChild(returnButton);

    // Initial call to render the cards
    draw();
    // Re-render the cards every 2 seconds
    setInterval(draw, 2000);
});
