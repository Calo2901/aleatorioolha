input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        `)
    basic.showString("Fuck you, and you, and you I hate your friends and they hate me too I'm through, I'm through, I'm through")
})
music.play(music.stringPlayable("C5 B A G F E D C ", 140), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
