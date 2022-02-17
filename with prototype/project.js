const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI Object start
const ui = new UI();

//storage start
const storage = new Storage();

//Event Listeners
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", () => {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Please Fill The Blanks", "danger")
    } else {
        //add new film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // add film to software
        storage.addFilmToStorage(newFilm); // add film to storage
        ui.displayMessages("Film is added successfully", "success")
    }
    ui.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    //console.log(e.target.id);
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling
            .previousElementSibling.textContent) // searh as a title

        ui.displayMessages("Film Deleted Successfully", "success");
    }

}

function clearAllFilms() {
    if (confirm("Are You Sure ? ")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

}