const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
        alert("Trebuie sa adaugi ceva !");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener("click", function(){
            li.remove();
        });

    }
    inputBox.value = '';

}



