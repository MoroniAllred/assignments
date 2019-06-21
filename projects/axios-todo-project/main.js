const todoForm = document.todoForm

function getRequst() {
    axios.get("https://api.vschool.io/moroniallred/todo")
        .then(response => {
            const todo = response.data
            createList(todo)
        })
        .catch(error => {
            console.error(error);
        })
}

function createList(todos) {
    console.log(todos)
    for (let i = 0; i < todos.length; i++) {
        const div = document.createElement("div")
        const finisedbox = document.createElement("input")
        const h1 = document.createElement("h1")
        const p1 = document.createElement("span")
        const img = document.createElement("img")
        const finised = document.createElement("span")
        const descrip = document.createElement("h3")
        const $$ = document.createElement("span")
        const deleteBut = document.createElement("button")
        const priceWrither = document.createElement("div")
        const isFinshed = document.createElement("div")
        const divDel = document.createElement("div")
        const editbut = document.createElement("button")
        const editDiv = document.createElement("div")

        finisedbox.type = "checkbox"
        h1.textContent = todos[i].title
        p1.textContent = todos[i].price
        descrip.textContent = todos[i].description
        deleteBut.textContent = "delete"
        finised.textContent = "finished:"
        finisedbox.checked = todos[i].completed
        $$.textContent = "$"
        $$.classList.add("money")
        priceWrither.classList.add("priceBox")
        isFinshed.classList.add("isItFinished")
        img.src = todos[i].imgUrl
        divDel.classList.add("deleteDiv")
        editbut.textContent = "Edit"
        editDiv.classList.add("editDiv")


        strikeout(finisedbox, h1)
        remove(finisedbox, h1)
        putIt(finisedbox, todos, i)
        deleteToDo(deleteBut, finisedbox, todos[i])
        // editIt(editbut, editForm, todos, i)

        div.classList.add("todo")
        div.appendChild(h1)
        div.appendChild(descrip)
        div.appendChild(img)
        div.appendChild(priceWrither)
        priceWrither.appendChild($$)
        priceWrither.appendChild(p1)
        div.appendChild(isFinshed)
        isFinshed.appendChild(finised)
        isFinshed.appendChild(finisedbox)
        div.appendChild(divDel)
        divDel.appendChild(deleteBut)
        div.appendChild(editDiv)
        editDiv.appendChild(editbut)
        // div.appendChild(editForm)
        document.getElementById("appendParent").appendChild(div)
        editbut.addEventListener("click", function (event){
           editIt(todos, i, editDiv) 
        })



        ////////   I AM WORKING HERE /////////////
        //editbut.addEventListener('click', (e) => {
            // // editPush.textContent = "Save";
            // const editTitle = document.createElement("input");
            // const editDecription = document.createElement("input");
            // const editPrice = document.createElement("input");
            // const editImageURL = document.createElement("input");

            // editTitle.placeholder = "Title";
            // editDecription.placeholder = "description";
            // editPrice.type = "number";
            // editPrice.placeholder = "$0";
            // editImageURL.placeholder = "image Url";
            // editTitle.name = "editTitle";
            // editFormInput.appendChild(editTitle);
            // editFormInput.appendChild(editDecription);
            // editFormInput.appendChild(editPrice);
            // editFormInput.appendChild(editImageURL);
            

        //})
    }
}


function deleteToDo(button, checkedBox, todos) {
    button.addEventListener("click", function (event) {
        if (checkedBox.checked === true) {
            axios.delete("https://api.vschool.io/moroniallred/todo/" + todos._id)
                .then(function () {
                    document.getElementById("appendParent").innerHTML = ""
                    getRequst()
                })
                .catch(error => {
                    console.error(error);
                })
        }
    })
}

todoForm.addEventListener("submit", function (event) {
    event.preventDefault()
    if (todoForm.title.value !== "" && !isNaN(todoForm.price.value)) {
        if (todoForm.image.value === "") {
            todoForm.image.value = "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        }
        axios.post("https://api.vschool.io/moroniallred/todo/", {
            title: todoForm.title.value,
            price: todoForm.price.value,
            description: todoForm.description.value,
            imgUrl: todoForm.image.value,
        })
            .then(function () {
                document.getElementById("appendParent").innerHTML = ""

                getRequst()

            })
            .catch()
        todoForm.title.value = ""
        todoForm.price.value = ""
        todoForm.description.value = ""
        todoForm.image.value = ""
    }
})

function strikeout(box, h1) {
    if (box.checked === true) {
        h1.classList.add("strike")
    }
}

function remove(box, h1) {
    if (box.checked === false) {
        h1.classList.remove("strike")
    }
}

function putIt(box, todos, i) {
    box.addEventListener("click", function (event) {
        axios.put("https://api.vschool.io/moroniallred/todo/" + todos[i]._id, { "completed": !todos[i].completed })
            .then(function () {
                document.getElementById("appendParent").innerHTML = ""

                getRequst()
            })
            .catch(error => {
                console.error(error);
            })
    })
 }

// const editTitle = document.createElement("input");
// const editDecription = document.createElement("input");
// const editPrice = document.createElement("input");
// const editImageURL = document.createElement("input");

function editIt(todos, i, editDiv) {
    // editBut.addEventListener("click", function (event) {

    // if (editPush.textContent === "Edit") {
    //     editPush.textContent = "Save";
        const editForm = document.createElement("form");
        const editTitle = document.createElement("input");
        const editDescription = document.createElement("input");
        const editPrice = document.createElement("input");
        const editImageURL = document.createElement("input");
        const saveBut = document.createElement("button")

        editTitle.placeholder = "Title";
        editDescription.placeholder = "description";
        editPrice.type = "number";
        editPrice.placeholder = "$0";
        editImageURL.placeholder = "image Url";
        editTitle.name = "editTitle";
        editDescription.name = "editDecription";
        editPrice.name= "editPrice";
        editImageURL.name="editImageURL";
        editForm.name = "editForm";
        saveBut.type = "submit";
        saveBut.textContent="save"
        editDiv.appendChild(editForm)
        editForm.appendChild(editTitle);
        editForm.appendChild(editDescription);
        editForm.appendChild(editPrice);
        editForm.appendChild(editImageURL);
        editForm.appendChild(saveBut)
        editForm.addEventListener("submit", function(event){
            event.preventDefault()
            console.log(typeof editTitle.value)
            const putObject = {}
            if(editTitle.value !== ""){
                putObject.title = editTitle.value
            }
            if(editDescription.value !== ""){
                putObject.description = editDescription.value
            }
            if(editPrice.value !== ""){
                putObject.price = editPrice.value
            }
            if(editImageURL.value !== ""){
                putObject.imgUrl = editImageURL.value
            }else{
                putObject.imgUrl ="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            }
            axios.put("https://api.vschool.io/moroniallred/todo/" + todos[i]._id,  //{
                putObject
                // title: editTitle.value,
                // description: editDescription.value,
                // price: editPrice.value,
                // imgUrl: editImageURL.value
            )
            .then(function () {
                document.getElementById("appendParent").innerHTML = ""
                getRequst()
            })
            .catch()
            // removeChild
        })
    //})
   // })
}
getRequst()