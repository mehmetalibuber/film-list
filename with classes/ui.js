class UI {

    static addFilmToUI(newFilm) {
        //   <tr>
        //     <td><img src="" class="img-fluid img-thumbnail"></td>
        //     <td></td>
        //     <td></td>
        //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        //   </tr> 

        //console.log(newFilm);
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
       <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> 
        `;
    }
    static clearInputs(element1, element2, element3) {
        element1.value = "",
            element2.value = "",
            element3.value = ""
    }
    static displayMessages(message, type) {
        const cardBody = document.querySelector(".card-body");

        //create alert div
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 2000)
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films");
        films.forEach(element => {
            filmList.innerHTML += `
            <tr>
             <td><img src="${element.url}" class="img-fluid img-thumbnail"></td>
             <td>${element.title}</td>
             <td>${element.director}</td>
             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
           </tr> 
             `;
        });
    }

    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films");
        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }

    }
}