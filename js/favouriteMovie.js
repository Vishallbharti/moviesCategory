// Getting the upcomiing movie details and show on seperate page
function getFavouriteMovies() {
    // making http request
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up : ( Cannot create an XMLHTTP instance! ');
        return false;
    }
    // check the http request status and get data by url from json file
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://localhost:3000/favourit');
    httpRequest.send();
    //make a function for show the html element in UI page
    function alertContents() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var count = 0;
                // parsing data
                var favouriteMovies = JSON.parse(httpRequest.responseText);
                var favouriteMoviesDiv = document.getElementById('favourite-movie');
                var movieItem = '';
                // iterating data
                favouriteMovies.forEach((item, index) => {

                    movieItem += `<div class="col-sm-12 col-md-3 col-lg-3 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="${item.poster}"
                    alt="Card image cap">
                       <div class="card-body">
                            <p class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 400px;"><strong style="color:#002b80">Title:</strong> ${item.title}</p>
                            <p class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 400px;"><strong style="color:#002b80">IMDB Rating: </strong>${item.imdbRating}</p>
                            <p class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 400px;"><strong style="color:#002b80">Release Date: </strong>${item.releaseDate}</p>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="removeItem('${item.id}');">Remove</button>
                            </div>
                     </div>
                    </div>`;
                });
                favouriteMoviesDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}


getFavouriteMovies();

// remove movie from favourite list
const removeItem = async (id) => {
    fetch("http://localhost:3000/favourit/" + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: null,
    });
    window.location.reload(true);
};



