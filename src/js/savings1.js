const goalButton=document.querySelector(".addgoals")
const goalList=document.querySelector(".list")

goalButton.addEventListener("click", addList)
goalList.addEventListener("click", deleteList)

function addList(e){
    e.preventDefault()
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo")
    
    const todo=document.createElement("li")
    todo.textContent=todoInput.value
    todoDiv.appendChild(todo)
    
    const urgentButton=document.createElement("button")
    urgentButton.classList.add("urgent-button")
    todoDiv.appendChild(urgentButton)
    urgentButton.textContent="Urgent?"
      
  }