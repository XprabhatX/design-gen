const colors = ['#ffa500', '#6666c9', '#d41717', '#cbda25', '#61d7c7']

const boxes = document.querySelectorAll('.box')

function generate() {
    Array.from(boxes).forEach(box => {
        let color = Math.round(Math.random() * colors.length)
        let skewA = Math.round(Math.random() * 45) + "deg"
        let skewB = Math.round(Math.random() * 45) + "deg"
    
        let brA = Math.round(Math.random() * 50) + "%"
        let brB = Math.round(Math.random() * 50) + "%"
        let brC = Math.round(Math.random() * 50) + "%"
        let brD = Math.round(Math.random() * 50) + "%"
        
        const characters = 'A23456789JQK';
        let letter = Math.random() * characters.length

        box.style.backgroundColor = colors[color]
        // box.style.transform = `skew(${skewA})`
        box.style.borderRadius = `${brA} ${brB} ${brC} ${brD}`
        box.innerHTML = characters.charAt(letter)
    });
}

window.addEventListener('load', generate())