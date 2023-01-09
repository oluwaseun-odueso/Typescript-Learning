// Enums are good for restriction options
// NB: Using const with the enum keyword doesn't generate too much of code
const enum SeatChoice {
    // You can put up a strict number and the rest of the values will follow
    AISLE = "aisle",
    // Once you start putting strict string values, you must put a value for the next member
    MIDDLE = "middle",
    WINDOW = 2,
    // Putting a value for all the members can be stopped with a number
    FOURTH 
};

const hcSeat = SeatChoice.AISLE;

export {}