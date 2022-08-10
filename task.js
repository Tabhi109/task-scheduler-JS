let addbtn = document.getElementById("add_btn");
addbtn.addEventListener("click",addtask);
function addtask(e)
{
    let currentbtn = e.currentTarget;
    let currentinput = currentbtn.previousElementSibling;
    let taskname = currentinput.value;

    let newli = document.createElement('li');
    newli.classList.add('list-group-item');
    newli.innerHTML = `<h3 class = "flex-grow-1">${taskname}</h3>
     <button class="btn btn-warning" onClick="edittask(this)">edit</button>
    <button class="btn btn-danger" onclick="removetask(this)">remove</button>`;


    let parentlist = document.getElementById("parentList");
    parentlist.appendChild(newli);
}
function removetask(currelement)
{
    currelement.parentElement.remove();
    let parentList = document.getElementById("parentList");
    if(parentList.children.length <= 0)
    {
        let newEmptymsg = document.createElement("h3");
        newEmptymsg.textContent = "Nothing is here, Please add a task ! ";
        parentList.appendChild(newEmptymsg);
    }
}
function edittask(currelement)
{
    if(currelement.textContent == 'done')
    {
    
        currelement.textContent = "edit";
        let currtaskname = currelement.previousElementSibling.value;
        let currheading = document.createElement("h3");
        currheading.className = "flex-grow-1";
        currheading.textContent = currtaskname;
        currelement.parentElement.replaceChild(currheading, currelement.previousElementSibling)

    }
    else{
    currelement.textContent = "done";
    let currtaskname = currelement.previousElementSibling.textContent;
    let currinput = document.createElement('input');
    currinput.type = "text";
    currinput.placeholder = "task name";
    currinput.value = currtaskname;

    currelement.parentElement.replaceChild(currinput, currelement.previousElementSibling);
}}