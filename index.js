"use strict"
document.querySelectorAll(".drum").forEach((drum) => {
    drum.addEventListener("click", handleClick)
})

function playDrum (key) {
    let drumType
    if (key === 'w' || 
        key === 'a' || 
        key === 's' || 
        key === 'd' || 
        key === 'j' || 
        key === 'k' || 
        key === 'l') 
        {
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
}

document.addEventListener("keypress", function(ele) {
    playDrum(ele.key)
})
