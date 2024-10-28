const button = document.getElementById('button');
const notesBottom = document.getElementById('notes-bottom');

button.addEventListener("click", () => {
    notesBottom.innerHTML +=
        `<div class="input-box">
        <p contenteditable="true" class='input-text'></p>
        <i class="fa-solid fa-trash fa-lg" style="color: #85888e;"></i>
        </div>`
    saveData();
});

notesBottom.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        const notesTxt = document.querySelectorAll('.input-text');
        notesTxt.forEach(txt => {
            txt.addEventListener('keyup', () => {
                saveData();
            });
        })
    }
    else if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem('data', notesBottom.innerHTML);
}
function showData() {
    notesBottom.innerHTML = localStorage.getItem('data');
}
showData();