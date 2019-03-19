import MovieList from './MovieList.js'
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {  
  constructor(props) {   
    super(props);     
    this.state = {
      movies: [
        {title: 'Mean Girls', watched: false},
        {title: 'Hackers', watched: true},
        {title: 'The Grey', watched: true},
        {title: 'Sunshine', watched: false},
        {title: 'Ex Machina', watched: false}
      ].concat(this.getUserMovies()),
      displayMovies: [
        {title: 'Mean Girls', watched: false},
        {title: 'Hackers', watched: true},
        {title: 'The Grey', watched: true},
        {title: 'Sunshine', watched: false},
        {title: 'Ex Machina', watched: false}
      ].concat(this.getUserMovies()),
      watched: false
    }    
  }  

  getUserMovies() {
    return JSON.parse(localStorage.getItem('movies')) || [];
  }

  searchMovies(event, filterText) {    
    event.preventDefault();    
    if (filterText === '') {
      this.setState({
        displayMovies: this.state.movies
      })
    }
    let rgxp = new RegExp(filterText, "i");
    let newMovies = this.state.movies.filter((movie) => movie.title.match(rgxp));
    
    this.setState({
      displayMovies: newMovies
    })
  }

  addMovie(event, movieTitle) {
    event.preventDefault();
    let userMovies;
    if (localStorage.hasOwnProperty('movies')) {
      userMovies = JSON.parse(localStorage.getItem('movies')).concat({title: movieTitle, watched: false})      
    } else {
      userMovies = [{title: movieTitle, watched:false}]
    }
    localStorage.setItem('movies', JSON.stringify(userMovies));
    this.setState({
      movies: this.state.movies.concat({title: movieTitle, watched: false}),
      displayMovies: this.state.displayMovies.concat({title: movieTitle, watched: false})
    })

  } 

  setWatched(watched_flag) {
    if (watched_flag) {
      $('#watched-nav').addClass('active');    
      $('#to-watch-nav').removeClass('active')
    } else {
      $('#to-watch-nav').addClass('active')
      $('#watched-nav').removeClass('active');    
    }
    this.setState ({
      watched: watched_flag
    })
  }

  render() {  
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <AddMovie handleAddMovieEvent={this.addMovie.bind(this)}/>
          </div>
          <div className="col-md-6">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  id="watched-nav"
                  href="#"
                  onClick={() => this.setWatched(true)}
                >
                  Watched
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link active" 
                  id="to-watch-nav"
                  href="#"
                  onClick={() => this.setWatched(false)}
                >
                  To Watch
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Search handleSearchEvent={this.searchMovies.bind(this)}/>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            {(this.state.displayMovies.length === 0) ?
                ("Cannot find any movie by the name")
              :
                (<MovieList movies={this.state.displayMovies.filter((movie) => movie.watched === this.state.watched)}/>)
            }            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
