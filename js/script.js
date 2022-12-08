document.addEventListener("DOMContentLoaded", () => {
    let tasklist = document.getElementById("tasklist");
    let inputBar = document.getElementById("search");
    let form = document.querySelector("form");
    let todoList = localStorage.getItem("todo");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let liElement = document.createElement("li");
        liElement.className = 'task-item';
        let liTextContent = document.createTextNode(inputBar.value);
        liElement.append(liTextContent);
        todoList = localStorage.setItem("todo", []);
        tasklist.append(liElement);
        // create trash icon
        let iElem =  document.createElement("i");
        iElem.className = "fas fa-trash";
        liElement.append(iElem);
        inputBar.value = '';
    });

    document.addEventListener("click", (e) => {
        if (e.target.className === "fas fa-trash") {
            e.target.parentNode.remove();
        }
    });
    
});

