// Ia elementul input unde scrii task-ul
const inputBox = document.getElementById("input-box");

// Ia containerul (ex: <ul>) unde vor fi afișate task-urile
const listContainer = document.getElementById("list-container");

// Funcția care adaugă un task nou în listă
function addTask(){
    // Dacă inputul este gol, arată un mesaj de atenționare
    if(inputBox.value === ''){
        alert("Trebuie sa adaugi ceva !");
        return; // oprește funcția aici, nu adaugă nimic
    }

    // Creează un element 'li' nou
    let li = document.createElement("li");

    // Pune textul scris în input ca text în 'li'
    li.textContent = inputBox.value;

    // Creează un element 'span' care va fi butonul de ștergere (×)
    let span = document.createElement("span");

    // Pune simbolul '×' în 'span'
    span.textContent = "\u00d7";

    // Schimbă cursorul la pointer când treci peste span, ca să arate că se poate da click
    span.style.cursor = "pointer";

    // Când se dă click pe 'span', șterge task-ul (elementul 'li') și salvează lista actualizată
    span.addEventListener("click", function(){
        li.remove();      // șterge task-ul din listă
        saveData();       // actualizează localStorage
    });

    // Pune butonul '×' în 'li'
    li.appendChild(span);

    // Pune 'li' în containerul listei
    listContainer.appendChild(li);

    // Șterge textul din input pentru a fi gata pentru următorul task
    inputBox.value = '';

    // Salvează lista actualizată în localStorage
    saveData();
}

// Funcția care salvează lista curentă în localStorage
function saveData(){
    // Salvează conținutul HTML al listei în localStorage sub cheia "data"
    localStorage.setItem("data", listContainer.innerHTML);
}

// Funcția care încarcă lista salvată din localStorage când pagina se încarcă
function showTask(){
    // Pune în container conținutul salvat sau un string gol dacă nu există nimic salvat
    listContainer.innerHTML = localStorage.getItem("data") || "";

    // Pentru fiecare buton de ștergere (span) din listă:
    listContainer.querySelectorAll("span").forEach(span => {
        // Setează cursor pointer pentru claritate
        span.style.cursor = "pointer";

        // Leagă click-ul astfel încât să șteargă task-ul și să salveze lista actualizată
        span.addEventListener("click", function(){
            span.parentElement.remove();  // șterge task-ul (li-ul părinte)
            saveData();                   // actualizează localStorage
        });
    });
}

// Apelează showTask când pagina se încarcă pentru a afișa lista salvată
showTask();
