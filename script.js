const titleEl = document.getElementById('title')
const counter = document.getElementById('counter')
const cvv = document.getElementById('cvv')
const btn = document.getElementById('btn')
let counterVar = 7
setTimeout(()=>{
    titleEl.style.display = "none"
    btn.style.display = "block"
},4000)
btn.addEventListener('click', ()=>{
    btn.style.display = "none"
    startConting()
})
function startConting(){
    counter.style.display = "block"
    counter.innerHTML = `${counterVar}`
    let decrease = setInterval(()=>{
        counterVar = counterVar - 1
        counter.innerHTML = `${counterVar}`
        if(counterVar == 0){
            counter.style.display = "none"
            const vdo = document.createElement('video')
            vdo.src = "./su.mp4"
            vdo.autoplay = true
            vdo.controls = true
            document.body.appendChild(vdo)
            vdo.play()
            clearInterval(decrease)
            
        }
    },1000)
    
}
function addVdo(){
    const vdo = document.createElement('video')
    
}