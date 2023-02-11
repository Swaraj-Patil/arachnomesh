const icons = document.querySelectorAll('footer .row.row2 .col div')

icons.forEach(icon => {
    icon.addEventListener("mouseenter", rotateCW)
    icon.addEventListener("mouseleave", rotateCCW)
})

function rotateCW(e) {
    const divNodes = e.target.parentNode.childNodes
    for(let i = 0; i < divNodes.length; i++) {
        divNodes[i].nodeName.toLowerCase() == 'div' ? divNodes[i].style.transform = 'rotate(-360deg)' : null
    }
}
function rotateCCW(e) {
    const divNodes = e.target.parentNode.childNodes
    for(let i = 0; i < divNodes.length; i++) {
        divNodes[i].nodeName.toLowerCase() == 'div' ? divNodes[i].style.transform = 'rotate(0deg)' : null
    }
}
