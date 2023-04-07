// Getting the upcomiing movie details and show on seperate page
function getCommingMovies() {
    // making http request
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up : ( Cannot create an XMLHTTP instance! ');
        return false;
    }
    // check the http request status and get data by url from json file
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://localhost:3000/movies-coming');
    httpRequest.send();
    //make a function for show the html element in UI page
    function alertContents() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var count = 0;
                // parsing data 
                var commingMovies = JSON.parse(httpRequest.responseText);
                var commingMovieDiv = document.getElementById('comming-movies');
                var movieItem = '';
                // iterating data
                commingMovies.forEach((item, index) => {

                    movieItem += `<div class="col-sm-12 col-md-3 col-lg-3 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="../img/${item.poster}"
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
                            max-width: 400px;"><strong style="color:#002b80">Geners: </strong>${item.genres}</p>
                            <p class="card-title" style="
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                            word-wrap: normal;
                            min-height:50px;
                            max-height:50px; 
                            "><strong style="color:#002b80">Actors: </strong>${item.actors}</p>
                            <p class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 400px;"><strong style="color:#002b80">Duration: </strong>${item.duration}</p>
                            <p class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 400px;"><strong style="color:#002b80">Release Date: </strong>${item.releaseDate}</p>
                            <p class="card-title" style="
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 6;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                            word-wrap: normal;
                            min-height:150px;
                            max-height:150px;
                            "><strong style="color:#002b80">Story Line: </strong>${item.storyline}</p>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="addFavourite('${item.title}','${item.posterurl}','${item.year}','${item.releaseDate}','${item.imdbRating}');">Add Favourite</button>
                         </div>
                     </div>
                    </div>`;
                });
                commingMovieDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}


getCommingMovies();


// this function for adding movie in favourite list
function addFavourite(title = '', poster = '', year = '', releaseDate = '', imdb = '') {

    //making http connection
    fetch('http://localhost:3000/favourit', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
        //set the data
        body: JSON.stringify({
            title: title,
            year: year,
            poster: poster,
            releaseDate: releaseDate,
            imdbRating: imdb
        })
    }).then(res => res.json())
        .then(res => console.log(res));
    alert(title + " Is added to Favorite");
    window.location.reload(true);
}


