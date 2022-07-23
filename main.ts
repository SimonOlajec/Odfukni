input.onButtonPressed(Button.A, function () {
    control.reset()
})
let kol = 0
let riadok = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            riadok = randint(0, 4)
            kol = randint(0, 4)
        }
        if (led.point(kol, riadok)) {
            led.unplot(kol, riadok)
            led.plot(kol + 1, riadok)
        }
    }
})
