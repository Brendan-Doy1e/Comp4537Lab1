/*Chatgpt and Github co-pilot used for debugging, writing code, refactoring*/

/**
 * Class representing a Card.
 */
class Card {
    /**
     * Creates a new Card instance.
     * @param {string} text - The text content of the card.
     * @param {number} id - The unique identifier for the card.
     */
    constructor(text, id) {
        this.text = text; // Text content of the card
        this.id = id;     // Unique identifier for the card
    }
}

/**
 * Class representing a group of Cards.
 */
class CardGroup {
    /**
     * Creates a new CardGroup instance.
     * Initializes the list of cards from local storage, if available.
     */
    constructor() {
        this.list = JSON.parse(localStorage.getItem('cards')) || []; // Initialize list from local storage or as empty array
    }

    /**
     * Removes a card from the group.
     * @param {Card} card - The card to be removed.
     */
    remove(card) {
        this.list = this.list.filter(c => c.id !== card.id); // Remove the card with matching id
        this.save(); // Update local storage
    }

    /**
     * Adds a new card to the group.
     * @param {Card} card - The new card to be added.
     */
    add(card) {
        this.list.push(card); // Add the new card to the list
        this.save(); // Update local storage
    }

    /**
     * Updates the text of a specific card in the group.
     * @param {Card} card - The card to be updated.
     * @param {string} newText - The new text content for the card.
     */
    update(card, newText) {
        let foundCard = this.list.find(c => c.id === card.id); // Find the card by id
        if (foundCard) {
            foundCard.text = newText; // Update the text of the found card
        }
        this.save(); // Update local storage
    }

    /**
     * Saves the current state of the card list to local storage.
     */
    save() {
        localStorage.setItem(ELEMENT_TYPES.ID_CARDS, JSON.stringify(this.list)); // Save the list to local storage in JSON format
    }

    /**
     * Retrieves the last saved time as a string.
     * @return {string} The formatted last saved time.
     */
    getLastSavedTimeString() {
        let currentdate = new Date(); // Get the current date and time
        // Format and return the time as a string
        return `${USER_MESSAGES.LABEL_LAST_SAVED} ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
    }
}
