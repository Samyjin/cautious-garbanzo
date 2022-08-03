const ERROR_INPUT_ADD_MODAL =
    "Error: A field is empty or rating is not between 1 and 5.";
const ID_ERROR_ADD_MODAL = "error-add-modal";

const addMovieModal = document.getElementById("add-modal");
const deleteModal = document.getElementById("delete-modal");
const btnAddMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const addModalActionBtn = document.querySelector(".modal__actions");
const cancelBtnAddMovieModal = addModalActionBtn.children[0];
const addBtnAddMovieModal = addModalActionBtn.children[1];
const addMovieUserInputs = addMovieModal.querySelectorAll("input");

const emptyMovieListMsg = document.getElementById("entry-text");

const movies = [];

const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
    clearUserInputs();
};

const toggleDeleteModal = () => {
    deleteModal.classList.toggle("visible");
    toggleBackdrop();
}

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
};

const clearUserInputs = () => {
    for (input of addMovieUserInputs) {
        input.value = "";
    }

    const errorDiv = addMovieModal.querySelector(`#${ID_ERROR_ADD_MODAL}`);
    if (errorDiv) errorDiv.remove();
};

const updateUI = () => {
    if (movies.length === 0) {
        emptyMovieListMsg.style.display = "block";
    } else {
        emptyMovieListMsg.style.display = "none";
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (let movie of movies) {
        if (movie.id === movieId) break;
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const list = document.getElementById("movie-list");
    list.children[movieIndex].remove();
    updateUI();
}

const deleteMovieHandler = (movieId) => {
    toggleDeleteModal();
};

const renderNewMovieElem = (id, title, imgUrl, rating) => {
    const listElem = document.createElement("li");
    listElem.className = "movie-element";
    listElem.innerHTML = `
    <div class="movie-element__image">
        <img src="${imgUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating} / 5 </p>
    </div>
    `;

    listElem.addEventListener("click", deleteMovieHandler.bind(null, id));
    const list = document.getElementById("movie-list");
    list.append(listElem);
};

const updateMovieList = () => {
    updateUI();

    // if (movies.length === 0)
    //     return ;

    // for (let movie of movies) {
    //     if (movie.rendered) continue;

    //     listElem = createNewMovieElem(movie.title, movie.imgUrl, movie.rating);

    //     movieListElement.append(listElem);
    //     movie.rendered = true;
    // }
};

const addMovieHandler = () => {
    const titleValue = addMovieUserInputs[0].value;
    const imgUrlValue = addMovieUserInputs[1].value;
    const rating = addMovieUserInputs[2].value;
    const errorDiv =
        addMovieModal.querySelector(`#${ID_ERROR_ADD_MODAL}`) ||
        createErrorDiv(ERROR_INPUT_ADD_MODAL, ID_ERROR_ADD_MODAL);

    let IsValidInput = !(
        titleValue.trim() === "" ||
        imgUrlValue.trim() === "" ||
        rating.trim() === "" ||
        +rating < 1 ||
        +rating > 5
    );

    if (!IsValidInput) {
        console.log(errorDiv);
        addModalActionBtn.insertAdjacentElement("beforebegin", errorDiv);
        return;
    }

    const movie = {
        id: Math.random().toString(),
        title: titleValue,
        imgUrl: imgUrlValue,
        rating: rating,
    };

    movies.push(movie);
    console.log(movies);

    toggleMovieModal();
    updateMovieList();
    renderNewMovieElem(movie.id, movie.title, movie.imgUrl, movie.rating);
};

const createErrorDiv = (
    errorMsg = "An error has occured !",
    errorId = "error-div"
) => {
    const errorDiv = document.createElement("div");

    errorDiv.id = errorId;
    errorDiv.innerHTML = errorMsg;
    errorDiv.style.color = "red";
    errorDiv.style.marginLeft = "2em";

    return errorDiv;
};

btnAddMovie.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelBtnAddMovieModal.addEventListener("click", cancelAddMovieHandler);
addBtnAddMovieModal.addEventListener("click", addMovieHandler);
