// On Button A is pressed
// "GETREADY!" text scrolls
// 
// 
// 
// 
input.onButtonPressed(Button.A, function () {
    basic.showString("GETREADY!")
    // Then index starts from 0 and stops at 3 by increasing in each loop.
    for (let index = 0; index <= 3; index++) {
        // If statement makes sure that the show number does not fall below 0 
        if (3 - countDown > 0) {
            basic.showNumber(3 - countDown)
            // in each loop countDown variable increases by 1, starting from 0 on start
            countDown += 1
        }
    }
})
// ON Logo Up
// This is activated when countDown variable is equal to 3. 
// Then it shows the image if user tilts the micro:bit towards itself
input.onGesture(Gesture.LogoUp, function () {
    if (countDown == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
    }
})
// ON Logo Down
// This is activated when countDown variable is equal to 3. 
// Then it shows the image if user tilts the micro:bit away from itself
input.onGesture(Gesture.LogoDown, function () {
    if (countDown == 3) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
// Rubric
// - Part of the message scrolls
// - Uses letters, numbers, or symbols
// - Displays at least one image
// - Displays at least one animation (a sequence of images to show movement)
// 
// ON START 
// Set countDown variable to 0
// Then an arrow shape slowly appears by scrolling towards Button A. 
let countDown = 0
countDown = 0
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . #
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . # #
        . . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . .
        . # # # .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # # # . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
