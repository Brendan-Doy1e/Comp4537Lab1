// USER_MESSAGES: Contains all user-facing strings to centralize the text displayed in the UI.
// This helps in managing text in one place, making it easier for potential localization or changes.
const USER_MESSAGES = {
    EMPTY_NOTE_ERROR: "Notes cannot be empty.", // Message displayed when a note is left empty
    EMPTY_STRING: "",                            // Represents an empty string, used for initializing or resetting values
    ACTION_REMOVE: "Remove",                     // Text for 'Remove' action buttons
    ACTION_ADD_NOTE: "Add a note",               // Text for 'Add a note' action buttons
    ACTION_SUBMIT: "Submit",                     // Text for 'Submit' action buttons
    LABEL_LAST_SAVED: "Last save: ",             // Label prefix for displaying the last saved time
    ACTION_RETURN_HOME: "Return to Home",        // Text for buttons returning to the home page
}

// ELEMENT_TYPES: Defines constants for commonly used HTML element types and IDs.
// This helps in maintaining consistency across the codebase and eases updates to element types or identifiers.
const ELEMENT_TYPES = {
    TYPE_INPUT: "input",             // Identifier for input elements
    TYPE_TEXT: "text",               // Identifier for text elements
    CLASS_CARD: "card",              // Class name for card elements
    ID_CARDS: "cards",               // ID for an element that contains multiple cards
    ID_CARD_CONTAINER: "cardContainer", // ID for the card container element
    TYPE_BUTTON: "button",           // Identifier for button elements
    TYPE_DIV: "div",                 // Identifier for div elements
    TYPE_LABEL: "label",             // Identifier for label elements
    TYPE_H1: "h1",                   // Identifier for h1 header elements
    TYPE_H6: "h6",                   // Identifier for h6 header elements
    ID_TIME: "time"                  // ID for the time display element
}
