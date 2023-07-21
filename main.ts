input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onSound(DetectedSound.Loud, function () {
    向き = 向き * -1
    ランダムに色を変更()
    soundExpression.slide.playUntilDone()
})
input.onGesture(Gesture.LogoUp, function () {
    strip.showRainbow(1, 360)
    strip.shift(1)
    soundExpression.hello.playUntilDone()
})
input.onGesture(Gesture.LogoDown, function () {
    strip.showRainbow(1, 360)
    strip.shift(-1)
    soundExpression.yawn.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
function ランダムに色を変更 () {
    basic.pause(1000)
    色 = randint(1, 300)
    strip.showRainbow(色, 色 + 70)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
let 色 = 0
let strip: neopixel.Strip = null
let 向き = 0
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
soundExpression.happy.playUntilDone()
input.setSoundThreshold(SoundThreshold.Loud, 33)
向き = 1
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(16)
ランダムに色を変更()
basic.forever(function () {
    strip.rotate(向き)
    strip.show()
})
