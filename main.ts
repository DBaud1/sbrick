sbrick.onConnected(function () {
    sbrick.drive(255, SBPort.B, SBDirection.Forward)
    basic.pause(10000)
})
sbrick.connect("SBrick")
