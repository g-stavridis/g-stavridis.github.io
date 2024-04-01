// Init JS
const ReadSmore = window.readSmore

// target all read more elements
const readMoreEls = document.querySelectorAll('.js-read-smore')

const options = {
    isInline: true
}

const RMs = ReadSmore(readMoreEls, options)

// Init
ReadSmore(readMoreEls).init()