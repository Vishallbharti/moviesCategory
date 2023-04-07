
// Getting the upcomming movie details and show on index page
function getCommingSoonMovies() {
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
                var commingMovieDiv = document.getElementById('comming-movie');
                var movieItem = '';
                // iterating data
                commingMovies.forEach((item, index) => {
                    // set condition for show data only 5 movies on main index page and for more movies click on more button 
                    if (index < 5) {
                        movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="img/${item.poster}"
                    alt="Card image cap">
                       <div class="card-body">
                            <h6 class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 150px;">${item.title}</h5>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="addFavourite('${item.title}','${item.posterurl}','${item.year}','${item.releaseDate}','${item.imdbRating}');">Add Favourite</button>
                        </div>
                     </div>
                    </div>`;
                    }
                });
                movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 align-self-center mb-5">
                              <a href="movieDetail/upcommingMovie.html"> <span style="font-size: 28px;">More</span><span><i class="fa fa-angle-double-right" style="font-size: 28px; margin-left:10px;"></i></span>
                              </a>
                             </div>`;
                commingMovieDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}

getCommingSoonMovies();


// Getting the data of movies in theater and show on index page
function getMoviesInTheater() {
    // making http request
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up : ( Cannot create an XMLHTTP instance! ');
        return false;
    }
    // check the http request status and get data by url from json file
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://localhost:3000/movies-in-theaters');
    httpRequest.send();
    //make a function for show the html element in UI page
    function alertContents() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var count = 0;
                // parsing data
                var theaterMovies = JSON.parse(httpRequest.responseText);
                var theaterMoviesDiv = document.getElementById('movie-in-theater');
                var movieItem = '';
                // iterating data
                theaterMovies.forEach((item, index) => {
                    // set condition for show data only 5 movies on main index page and for more movies click on more button 
                    if (index < 5) {
                        movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="img/${item.poster}"
                    alt="Card image cap">
                       <div class="card-body">
                            <h6 class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 150px;">${item.title}</h5>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="addFavourite('${item.title}','${item.posterurl}','${item.year}','${item.releaseDate}','${item.imdbRating}');">Add Favourite</button>
                            </div>
                     </div>
                    </div>`;
                    }
                });
                movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 align-self-center mb-5">
                              <a href="movieDetail/theaterMovies.html"> <span style="font-size: 28px;">More</span><span><i class="fa fa-angle-double-right" style="font-size: 28px; margin-left:10px;"></i></span>
                              </a>
                             </div>`;
                theaterMoviesDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}

getMoviesInTheater();


// Getting the data of top rated movies in india and show on index page
function getIndiaTopRatedMovies() {
    var httpRequest = new XMLHttpRequest();
    // making http request
    if (!httpRequest) {
        alert('Giving up : ( Cannot create an XMLHTTP instance! ');
        return false;
    }
    // check the http request status and get data by url from json file
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://localhost:3000/top-rated-india');
    httpRequest.send();
    //make a function for show the html element in UI page
    function alertContents() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var count = 0;
                // parsing data
                var topRatedMovieInIndia = JSON.parse(httpRequest.responseText);
                var topRatedMovieInIndiaDiv = document.getElementById('top-rated-movie-in-india');
                var movieItem = '';
                // iterating data
                topRatedMovieInIndia.forEach((item, index) => {
                    // set condition for show data only 5 movies on main index page and for more movies click on more button 
                    if (index < 5) {
                        movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="img/${item.poster}"
                    alt="Card image cap">
                       <div class="card-body">
                            <h6 class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 150px;">${item.title}</h5>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="addFavourite('${item.title}','${item.posterurl}','${item.year}','${item.releaseDate}','${item.imdbRating}');">Add Favourite</button>
                            </div>
                     </div>
                    </div>`;
                    }
                });
                movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 align-self-center mb-5">
                              <a href="movieDetail/topRatedIndiaMovies.html"> <span style="font-size: 28px;">More</span><span><i class="fa fa-angle-double-right" style="font-size: 28px; margin-left:10px;"></i></span>
                              </a>
                             </div>`;
                topRatedMovieInIndiaDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}

getIndiaTopRatedMovies();




// Getting the data of top rated movies and show on index page
function getTopRatedMovies() {
    // making http request
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up : ( Cannot create an XMLHTTP instance! ');
        return false;
    }
    // check the http request status and get data by url from json file
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://localhost:3000/top-rated-movies');
    httpRequest.send();
    //make a function for show the html element in UI page
    function alertContents() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var count = 0;
                // parsing data
                var topRatedMovies = JSON.parse(httpRequest.responseText);
                var topRatedMoviesDiv = document.getElementById('top-rated-movie');
                var movieItem = '';
                // iterating data
                topRatedMovies.forEach((item, index) => {
                    // set condition for show data only 5 movies on main index page and for more movies click on more button 

                    if (index < 5) {
                        movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="img/${item.poster}"
                    alt="Card image cap">
                       <div class="card-body">
                            <h6 class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 150px;">${item.title}</h5>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="addFavourite('${item.title}','${item.posterurl}','${item.year}','${item.releaseDate}','${item.imdbRating}');">Add Favourite</button>
                            </div>
                     </div>
                    </div>`;
                    }
                });
                movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 align-self-center mb-5">
                              <a href="movieDetail/topRatedMovie.html"> <span style="font-size: 28px;">More</span><span><i class="fa fa-angle-double-right" style="font-size: 28px; margin-left:10px;"></i></span>
                              </a>
                             </div>`;
                topRatedMoviesDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}

getTopRatedMovies();


// Getting the data of favourite movie movies and show on index page
function getFavouriteMovie() {
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
                var favaouriteMovies = JSON.parse(httpRequest.responseText);
                var favaouriteMoviesDiv = document.getElementById('favourite-movie');
                var movieItem = '';
                var count = 0;
                // iterating data
                favaouriteMovies.forEach((item, index) => {
                    // set condition for show data only 5 movies on main index page and for more movies click on more button 
                    count++;
                    if (index < 5) {
                        movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 mb-5">
                    <div class="card">
                    <img class="card-img-top" style="height:250px;"
                    src="${item.poster}"
                    alt="Card image cap">
                       <div class="card-body">
                            <h6 class="card-title" style="overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            max-width: 150px;">${item.title}</h5>
                            <button type="button" class="btn-sm btn-info align-content-center" onclick="removeItem('${item.id}');">Remove</button>
                            </div>
                     </div>
                    </div>`;
                    }
                });
                if (count > 5) {
                    movieItem += `<div class="col-sm-12 col-md-2 col-lg-2 align-self-center mb-5">
                    <a href="movieDetail/favouriteMovies.html"> <span style="font-size: 28px;">More</span><span><i class="fa fa-angle-double-right" style="font-size: 28px; margin-left:10px;"></i></span>
                    </a>
                   </div>`;
                }

                favaouriteMoviesDiv.innerHTML = movieItem;
            } else {
                alert("There is a problem with request!");
            }
        }
    }
}

getFavouriteMovie();


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



