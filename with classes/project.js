const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//Event Listeners
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);

}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        //error
        UI.displayMessages("Please Fill The Blanks", "danger")
    } else {
        //add new film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // add film to software
        Storage.addFilmToStorage(newFilm); // add film to Storage
        UI.displayMessages("Film is added successfully", "success")
    }
    UI.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    //console.log(e.target.id);
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling
            .previousElementSibling.textContent) // searh as a title

        UI.displayMessages("Film Deleted Successfully", "success");
    }

}

function clearAllFilms() {
    if (confirm("Are You Sure ? ")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }

}