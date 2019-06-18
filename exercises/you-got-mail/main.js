
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const staryArr = JSON.parse(xhr.responseText)

        displayInfo(staryArr)
    }
}

xhr.open("Get", "https://swapi.co/api/planets")
xhr.send()

function displayInfo(arr){
    for(let i = 0; i < arr.results.length; i ++){
        const h1 = document.createElement("h1")
        h1.textContent = arr.results[i].name
        document.body.appendChild(h1)
    }
}