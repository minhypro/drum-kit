"use strict"

document.querySelectorAll(".drum").forEach((drum) => {
    drum.addEventListener("click", handleClick)
})

document.addEventListener("keydown", function (event) {
    playDrum(event.key)
    animation(event.key)
})

function playDrum(key) {
    let drumType
    const validKey = ['w', 'a', 's', 'd', 'j', 'k', 'l']
    if (validKey.includes(key)) {
        switch (key) {
            case 'w':
                drumType = 'tom-1'
                break
            case 'a':
                drumType = 'tom-2'
                break
            case 's':
                drumType = 'tom-3'
                break
            case 'd':
                drumType = 'tom-4'
                break
            case 'j':
                drumType = 'snare'
                break
            case 'k':
                drumType = 'crash'
                break
            case 'l':
                drumType = 'kick-bass'
                break
        }
        var audio = new Audio(`./sounds/${drumType}.mp3`)
        audio.play()
    }
}

function handleClick(drum) {
    let key = drum.target.textContent
    playDrum(key)
    animation(key)
}

function animation(key) {
    let activeBtn = document.querySelector(`.${key}`)

    if (activeBtn) {
        activeBtn.classList.add('pressed')
        setTimeout(() => {
            activeBtn.classList.remove('pressed')
        }, 100)
    }
}