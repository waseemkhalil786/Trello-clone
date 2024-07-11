const main = document.querySelector("#main");
const addCardForm = document.querySelector("#addCardForm");
const btn = document.querySelector("#addCard");
// console.log(main);

let jiselementkohamnepkrahuah = null;

btn.addEventListener("click", () => {
  const divName = prompt("Plese enter divName!!");

  while (divName === "" || divName === null) {
    if (divName === null) return; // User canceled prompt
    alert("Please enter a name for the card.");
    divName = prompt("Create card name");
  }
  const mainDiv = createCard(divName);
  main.appendChild(mainDiv);
  btn.before(mainDiv);
});

const addTask = (event) => {
  event.preventDefault();
  const currentForm = event.target;
  const value = currentForm.elements[0].value;
  const parent = currentForm.parentElement;
  // console.log(parent);
  const ticket = createTicket(value);

  parent.insertBefore(ticket, currentForm);
  currentForm.reset();
};

for (let i = 0; i < main.length; i++) {
  const form = main[i].lastElementChild;

  form.addEventListener("submit", addTask);
}

const createCard = (waseem) => {
  const mydiv = document.createElement("div");
  const h3 = document.createElement("h3");
  const form = document.createElement("form");
  const myinput = document.createElement("input");
  const h3Text = document.createTextNode(waseem);

  mydiv.setAttribute("class", "main");
  myinput.setAttribute("class", "task1");
  myinput.setAttribute("type", "text");
  myinput.setAttribute("placeholder", "Add task");

  h3.appendChild(h3Text);
  mydiv.appendChild(h3);
  form.appendChild(myinput);
  mydiv.appendChild(form);

  mydiv.addEventListener("dragleave", (event) => event.preventDefault());
  mydiv.addEventListener("dragover", (event) => event.preventDefault());

  mydiv.addEventListener("drop", (event) => {
    const jispedropkiya = event.target;
    if (jispedropkiya.className.includes("main")) {
      jispedropkiya.appendChild(jiselementkohamnepkrahuah);
    }

    if (jispedropkiya.className.includes("ticket")) {
      jispedropkiya.parentElement.appendChild(jiselementkohamnepkrahuah);
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputKiValue = event.target.firstChild.value;
    console.log(inputKiValue);

    const para = createTicket(inputKiValue);
    form.before(para);
    form.reset();
  });
  return mydiv;
};

const createTicket = (value) => {
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.appendChild(elementText);

  ticket.addEventListener("mousedown", (event) => {
    jiselementkohamnepkrahuah = event.target;
    console.log("chal gia");
  });

  return ticket;
};
