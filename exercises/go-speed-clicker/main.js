


const conter = localStorage.getItem("clicks")
let count = conter
function startIt(){
    if(conter === null){
        count = 0
    }
    else{
        count = conter
    }
}
// setTimeout(function(){
    document.getElementById("clickIt").addEventListener("click", function(){
    count++
        localStorage.setItem("clicks", count)
        ptag.textContent = count
        console.log(conter)
        })
// }, 60000)


const ptag = document.createElement("p")

const s = document.getElementById('s')

s.appendChild(ptag)

