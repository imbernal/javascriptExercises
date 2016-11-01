// Video 2.4 accompanies this exercise

// Build a trainCapacity variable and set it to 40. Then construct a string
// called occupancy in the following format:
//
//    "4 passengers present. with 36 seats remaining."
//
// In the console, use numPassengers to find the number of passengers
// on the bus, and use (trainCapacity - numPassengers) to find the number
// of seats remaining. Then enter occupancy.

var trainCapacity = 40
var numPassenger = 4
var occupancy = "4 passengers present. with "+(trainCapacity - numPassenger) + " seats remaining"
occupancy