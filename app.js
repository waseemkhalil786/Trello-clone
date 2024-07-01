const column = document.querySelectorAll(".column");
const addCardForm = document.querySelector("#addCardForm");
const tasked = document.querySelectorAll(".task1")
const addTask = (event) => {
  event.preventDefault();

  const currentForm = event.target; 
  const value = currentForm.elements[0].value; 
  const parent = currentForm.parentElement;
  // console.log(parent); 
  const ticket = createTicket(value); 

  parent.insertBefore(ticket, currentForm); // add new task before form
  currentForm.reset(); 

  // const h3Value = parent.children[0].innerText;
  // // console.log(h3Value);
  // if (!Array.isArray(savedTasks[h3Value])) {
  //   savedTasks[h3Value] = [];
  // }
  
  // savedTasks[h3Value].push(value);

  // localStorage.setItem("Name", JSON.stringify(savedTasks)); 

};

for (let i = 0; i < column.length; i++) {
  const form = column[i].lastElementChild; // selecting every column's form because form is last element

  form.addEventListener("submit", addTask);
}

const createTicket = (value) => {
  //
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.appendChild(elementText);

  return ticket;
};