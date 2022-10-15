const addBtn = document.querySelector("#add-btn");
const itemText = document.querySelector("#item-text");
const todoContents = document.querySelector(".todo-contents");
const errorP = document.querySelector("#error");

const edit = document.querySelector(".edit");
const deletes = document.querySelector(".delete");

const itemList = document.querySelector(".item");

const deleteBtn = document.querySelector("#deleteAll-btn");

addBtn.addEventListener('click', e => {
    let done = false;
    let edit = false;

    if(itemText.value == ""){
        errorP.style.display = "block";
    }else{
        errorP.style.display = "none";
        const divItemContainer = document.createElement("div"); 
        divItemContainer.classList.add("item-container");
    
        const divTodoItem = document.createElement("div"); 
        divTodoItem.classList.add("todo-item");
        const para = document.createElement("input");
        para.setAttribute("type", "text");
        para.setAttribute("disabled", "");
        para.style.backgroundColor = "transparent";
        para.style.outline = "none";
        para.style.border = "none";
        para.style.color = "white";
        para.style.fontSize = "1.2rem";
        para.style.width = "100%";
        
        para.classList.add("item");
        para.value = itemText.value;
        divTodoItem.appendChild(para);

        itemText.value = "";
    
        const divTodoModify = document.createElement("div");
        divTodoModify.classList.add("todo-modify");

        const spanDone = document.createElement("button");
        spanDone.innerHTML = `<span class="iconify " data-icon="akar-icons:check-box" style="color: #d17c7c;" data-width="30" data-height="30"></span>`;
        spanDone.classList.add("done");
    
        const spanEdit = document.createElement("button");
        spanEdit.innerHTML = `<span class="iconify" data-icon="clarity:note-edit-line" style="color: #45e190;" data-width="30" data-height="30"></span>`;
        spanEdit.classList.add("edit");

        const spanDelete = document.createElement("button");
        spanDelete.innerHTML = `<span class="iconify" data-icon="iconoir:delete-circled-outline" style="color: #000100;" data-width="30" data-height="30"></span>`;
        spanDelete.classList.add("delete");

        divTodoModify.appendChild(spanDone);
        divTodoModify.appendChild(spanEdit);
        divTodoModify.appendChild(spanDelete);
    
        divItemContainer.appendChild(divTodoItem);
        divItemContainer.appendChild(divTodoModify);
    
        todoContents.appendChild(divItemContainer);

        spanDone.addEventListener('click', e => {
            if(done == false){
                para.style.textDecoration = "line-through";
                para.style.color = "grey";
                done = true;
            }else if(done == true){
                para.style.textDecoration = "none";
                para.style.color = "white";
                done = false;
            }
            
        });

        spanEdit.addEventListener('click', e => {
            if((edit == false) && (done == false)){
                para.removeAttribute("disabled");
                para.style.border = "2px solid white";
                edit = true;
            }else if(edit == true && done == false){
                para.setAttribute("disabled", "");
                para.style.border = "none";
                edit = false;
            }
        });

        spanDelete.addEventListener('click', e => {
            todoContents.removeChild(divItemContainer);
        });

        deleteBtn.addEventListener('click', () => {
            todoContents.removeChild(divItemContainer);
        });
    }
});


