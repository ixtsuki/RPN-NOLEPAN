/**
 * @function searchTodo
 * @param {string} text
 * @returns {void}
 */
 
function searchTodo(text) {
  const ul = document.getElementById("list");
  for (let i = 0; i < ul.children.length; i++) {
    const child = ul.children[i];
    if (child.textContent.toLowerCase().includes(text.toLowerCase())) {
      child.style.display = "";
    } else {
      child.style.display = "none";
    }
  }
}

/**
 * @function addTodoList
 * @param {string} text
 * @returns {boolean}
 */
function addTodoList(text) {
  if (text.length < 5) {
    alert("Minimum text length is 5 character");
    return false;
  } 

  const ul = document.getElementById("list"); 
  for(let i = 0; i < ul.childNodes.length; i++) {
    const { textContent } = ul.childNodes[i];
    if (text === textContent.slice(0, textContent.length-1)) {
      alert("your todo is already on the list");
      return false;
    }     
  }

  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);

  const span = document.createElement("span");
  span.textContent = "\u00D7";

  li.addEventListener("click", _ => li.classList.toggle("checked"));
  span.addEventListener("click", _ => ul.removeChild(li));

  li.appendChild(span);
  return true;
}

/**
 * @function exec
 * @param {Event} _
 * @returns {void}
 */
function exec(_) {
  const defaultInputs = [
    "i want to bake a cake",
    "i wanna slap some ...",
    "must go to appoinment",
    "emm buy some eggs perhaps"
  ];

  defaultInputs.forEach(addTodoList);

  /**
    * @type {HTMLInputElement}
    */
  const input = document.getElementById("input");

  input.addEventListener("keyup", _ => searchTodo(input.value));

  input.addEventListener("keypress", event => {
    switch(event.key) {
      case "Enter":
        const success = addTodoList(input.value);
        if (success) input.value = "";
        break;
      default:
        break;
    }
  });
}

window.addEventListener("DOMContentLoaded", exec)
