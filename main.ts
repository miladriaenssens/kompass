let kompas = 0
input.calibrateCompass()
basic.forever(function () {
    if (kompas > 45 && kompas < 135) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    kompas = input.compassHeading()
})
basic.forever(function () {
    if (kompas > 135 && kompas < 225) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
