import "./index.css"

let todo = document.getElementById('todo');
let form = document.createElement('form');
form.id="form"
let l1= document.createElement('label')
l1.innerText="Task"
let input = document.createElement('input')
input.type="text"
input.id="name"
let l2 = document.createElement('label')
l2.innerText="Date"
let input2 = document.createElement('input')
input2.type="date"
input2.id="Date"
let submit = document.createElement('input')
submit.type="submit"
submit.id="submit"
form.append(l1,input,l2,input2,submit)
todo.appendChild(form)

let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
tbody.id="Tableb"
let tr = document.createElement('tr')
let th1 = document.createElement('th')
th1.innerText="Task"
let th2 = document.createElement('th')
th2.innerText="Date"
let th3 = document.createElement('th')
th3.innerText="Status"
tr.append(th1,th2,th3)
thead.append(tr)
table.append(thead,tbody)
todo.append(table)


let tb=document.getElementById("Tableb")
document.getElementById("form").addEventListener("submit",addItem)
function addItem(event){
    event.preventDefault();
var name = document.getElementById("name").value
var date = document.getElementById("Date").value
var row=document.createElement("tr");
var td1=document.createElement("td");
td1.textContent=name;
var td2=document.createElement("td");
td2.textContent=date;
var td3=document.createElement("td");
td3.textContent="Pending";
row.append(td1,td2,td3)
tb.append(row)
}

let icon = document.getElementById("icon")
let image = document.createElement("img")
image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplnquYacn4RNDRicUdkGX1qvAZQ7Ai6FnVg&usqp=CAU"
image.id="Image1"
icon.append(image)