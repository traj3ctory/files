function fields() {
    const row = document.getElementById("collection");
    let id = `file${Math.ceil(Math.random() * 20000000000000)}`;
    

$fields = `<div class='row addedRow' style='position:relative'; id='${id}'>
                <div class='col-md-3'>
                    <div class='form-group'><label for='date'>Date&#58;</label>
                        <input type='date' id='date' name='date[]' data-id='${id}' class='form-control' title='Select Date' value='".date('Y-m-d')."'/>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div class='form-group'><label for='date'>Account&nbsp;Number&#58;</label>
                       <input type='text' id='acctNumber' name='acctNumber[]' class='form-control' title='Account Number' />
                    </div>
                </div>
                <div class='col-md-3'>
                    <div class='form-group'><label for='date'>Credit&#58;</label>
                        <input type='text' id='credit' name='credit[]' class='form-control' title='Enter Credit Amount' />
                    </div>
                </div>
                <div class='col-md-3'>
                    <div class='form-group'><label for='date'>Description&#58;</label>
                       <input type='text' id='description' name='description[]' class='form-control' title='Enter description' placeholder='Description'/>
                    </div>
                </div>
                 <button id='${id}' style='position:absolute;bottom:-40px;right:10px;' class='btn btn-sm btn-danger rbtn my-4'><i class="fa fa-minus-circle" aria-hidden="true" ></i> Remove</button>
            </div>`;

	row.insertAdjacentHTML("beforeend",$fields);
}

function removeField(id) {
  const row = document.querySelectorAll(".addedRow");
  row.forEach(item => {
    if (item.id === id) {
            document.getElementById("collection").removeChild(document.getElementById(id));
        }
  })
//   for (let i = 0; i < row.length; i++) {
// 		if (row[i].id === id) {
// 			row.removeChild(document.getElementById(id));
// 		}
// 	}
}

document.addEventListener("click", e => {
    if(e.target.classList.contains("rbtn")) {
        removeField(e.target.id);
    }
})








// (function() {
//     "use strict";

//     var todoApp = (function() {
//         document.addEventListener("DOMContentLoaded", function() {
//             init();
//         });

//         var init = function() {
//             document.getElementById("add-task").addEventListener("click", function() {
//                 var newTitle = document.getElementById("title").value,
//                     newContent = document.getElementById("content").value;
//                 if (validate(newTitle)) {
//                     addTodo(newTitle, newContent);
//                 }
//             }, false);

//             document.getElementById("todos").addEventListener("click", function(e) {
//                 if (e.target && e.target.nodeName == "BUTTON") {
//                     deleteTodo(e.target.parentNode);
//                 }
//             }, false);
//         };

//         var validate = function(newTitle, newContent) {
//             if (newTitle.length === 0) {
//                 var target = document.getElementById("title");
//                 target.className = target.className + " error";
//                 return false;
//             } else {
//                 return true;
//             }
//         };

//         var addTodo = function(title, content) {
//             var newTodo = document.createElement("section"),
//                 h2 = document.createElement("h2"),
//                 newTitle = document.createTextNode(title),
//                 p = document.createElement("p"),
//                 newContent = document.createTextNode(content),
//                 button = document.createElement("button"),
//                 deleteBtn = document.createTextNode("delete");

//             h2.appendChild(newTitle);
//             newTodo.appendChild(h2);
//             p.appendChild(newContent);
//             newTodo.appendChild(p);
//             button.appendChild(deleteBtn);
//             newTodo.appendChild(button);

//             document.getElementById("todos").appendChild(newTodo);
//             document.getElementById("form").reset();
//         };

//         var deleteTodo = function(todo) {
//             todo.parentNode.removeChild(todo);
//         };
//     }());
// }());
