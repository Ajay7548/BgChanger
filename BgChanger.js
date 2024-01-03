
        const randomColor = function () {
            const hex = "0123456789ABCDEF"
            let color = "#"
            for (let i = 0; i < 6; i++) {
                color = color + hex[(Math.floor(Math.random() * 16))]
            }
            return color
        }
let interval
        const startChange = function () {
            const startTimeout = function () {
                document.body.style.backgroundColor = randomColor()
            }
            if(!interval){
                interval = setInterval(startTimeout, 500)
            }
        }
        const stopChange = function () {
            clearInterval(interval)
            interval=null
           
        }
        document.getElementById("start").addEventListener("click", startChange)
        document.getElementById("stop").addEventListener("click", stopChange)
