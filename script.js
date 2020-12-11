let input = document.querySelector("input[type = 'text']")
let ul = document.querySelector("ul")
let filterOptionsDesktop = document.querySelector(".last-list-center-desktop")
let filterOptionsMobile = document.querySelector(".last-list-center-mobile")
let inputField = document.getElementById("todoInput")
let inputCheck = document.querySelectorAll("#checkbox")
let completed = document.querySelector("#completed")
// night mode
let Mode = document.querySelector("#mode").src
console.log(Mode)
let img = document.querySelector(".logo img")
let cse = false;
img.addEventListener("click", function() {
        if(cse) {
            img.src = "images/icon-moon.svg";
            cse = false
        } else {
            img.src = "images/icon-sun.svg";
            cse = true
        }
    document.querySelector(".wrapper").classList.toggle("night")
    document.querySelector(".todo-input").classList.toggle("bright-night")
    document.querySelector("ul").classList.toggle("bright-night")
    inputField.classList.toggle("bright-night")
    document.querySelector(".header").classList.toggle("header-image-toggle")
})

//write a code that add li to todo list 

function addli(event) {
    if(event.keyCode === 13 && inputField.value.length > 0) {
        let ul = document.querySelector("ul")
        let li = document.createElement("li")
        let h5 = document.createElement("h5")
        h5.append(inputField.value)
        let input = document.createElement("input")
        input.type = "checkbox"
        input.addEventListener("click", function(){
            input.parentElement.classList.toggle("lineThrough")
        })
        completed.addEventListener("click", function(){
            if(input.checked) {
                input.parentElement.remove()
            }
        })
        li.append(input)
        li.append()
        li.append(h5)
        ul.prepend(li)
        
        inputField.value = "" 
        listSize()
    }
}


//write a code that line's through a list when its checkbox is ticked(completed)
    inputCheck.forEach(element => {
        element.addEventListener("click", function(){
            element.parentElement.parentElement.classList.toggle("lineThrough")
        })
    })
input.addEventListener("keypress", addli)


// write code that shows numbers of todo's left
function listSize() {
    let length = document.querySelector("ul").children.length - 1
    let numberOfList = document.querySelector("#itemsLeft")
    numberOfList.innerHTML = `${length} items left`
}
listSize()

//write a code that clears completed todos
function clearCompleted() {
    inputCheck.forEach(element => {
        if(element.checked){
            element.parentElement.parentElement.remove()
        }
        listSize()
    })
}
completed.addEventListener("click", clearCompleted)
//write a code that filter's todo
// ALL, ACTIVE AND COMPLETED

function filter(event) {
    let list = document.querySelectorAll(".todo-list li")
    list.forEach(function(element) {
        if(event.target.id === "all") {
            element.style.display = "flex";
        } else if(event.target.id === "active"){
            element.classList.contains("lineThrough") ? element.style.display = "none" : element.style.display = "flex"
        } else if(event.target.id === "done") {
            element.classList.contains("lineThrough") ? element.style.display = "flex" : element.style.display = "none"
        }
        
    })
    
}
filterOptionsDesktop.addEventListener("click", filter)
filterOptionsMobile.addEventListener("click", filter)



