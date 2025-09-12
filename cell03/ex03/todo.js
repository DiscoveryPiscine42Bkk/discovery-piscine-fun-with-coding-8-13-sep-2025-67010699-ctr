function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll("#ft_list div").forEach(div => {
        todos.push(div.textContent);
    });
    setCookie("todos", JSON.stringify(todos), 7);
}

function loadTodos() {
    let todos = getCookie("todos");
    if (todos) {
        JSON.parse(todos).forEach(text => addTodo(text, false));
    }
}

function addTodo(text, save = true) {
    if (!text) return;
    let div = document.createElement("div");
    div.textContent = text;
    div.addEventListener("click", () => {
        if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    });
    let list = document.getElementById("ft_list");
    list.insertBefore(div, list.firstChild);
    if (save) saveTodos();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("newBtn").addEventListener("click", () => {
        let text = prompt("Enter a new TO DO:");
        if (text) addTodo(text);
    });
    loadTodos();
});
