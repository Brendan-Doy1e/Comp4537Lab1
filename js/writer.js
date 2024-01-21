/*Chatgpt and Github co-pilot used for debugging, writing code, refactoring*/

// Initialize a new CardGroup to manage a collection of card objects
let cardgroup = new CardGroup();

/**
 * Renders the current state of cards in the card group.
 */
function draw() {
    // Retrieve and clear the card container element
    let cardContainer = document.getElementById(ELEMENT_TYPES.ID_CARD_CONTAINER);
    cardContainer.innerHTML = USER_MESSAGES.EMPTY_STRING;

    // Iterate over each card in the group and create its corresponding DOM elements
    cardgroup.list.forEach(card => {
        // Create a new card element
        let card_el = document.createElement('div');
        card_el.classList.add('card');

        // Create a textarea for the card text
        let textarea = document.createElement('textarea');
        textarea.value = card.text;
        textarea.id = `textarea-${card.id}`;
        // Update the card text in the card group on input
        textarea.addEventListener("input", () => cardgroup.update(card, textarea.value));
        card_el.appendChild(textarea);

        // Create a remove button for the card
        let remove_button = document.createElement('button');
        remove_button.innerText = 'Remove';
        // Remove the card from the card group on click
        remove_button.addEventListener("click", () => {
            cardgroup.remove(card);
            draw(); // Re-draw the card list
        });
        card_el.appendChild(remove_button);

        // Append the card element to the card container
        cardContainer.appendChild(card_el);
    });
}

/**
 * Adds a new, empty card to the card group.
 */
function addCard() {
    // Create a new card with empty text and a unique id
    let newCard = new Card(USER_MESSAGES.EMPTY_STRING, cardgroup.list.length);
    cardgroup.add(newCard); // Add the new card to the card group
    draw(); // Re-draw the card list
}

/**
 * Updates the clock element with the current time.
 */
function updateClock() {
    // Get the current time and format it as a string
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    // Retrieve the clock element and update its text
    let clock = document.getElementById('clock');
    if (clock) {
        clock.textContent = `Last Saved: ${timeString}`;
    }
}

// Set up the initial state and behavior when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create and append a clock element
    let clock = document.createElement('div');
    clock.id = 'clock';
    clock.textContent = 'Last Saved: --:--:--';
    document.body.appendChild(clock);

    // Update the clock every 2 seconds
    setInterval(updateClock, 2000);

    // Create and append the card container
    let cardContainer = document.createElement('div');
    cardContainer.id = 'cardContainer';
    document.body.appendChild(cardContainer);

    // Create and append the 'Add Card' button
    let add_button = document.createElement('button');
    add_button.textContent = 'Add Card';
    add_button.addEventListener('click', addCard);
    document.body.appendChild(add_button);

    // Create and append the 'Return to Index' button
    let returnButton = document.createElement('button');
    returnButton.textContent = 'Return to Index';
    returnButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    document.body.appendChild(returnButton);

    // Initial rendering of cards
    draw();
});
