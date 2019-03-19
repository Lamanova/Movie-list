import MovieListEntry from "./MovieListEntry.js";

class MovieList extends React.Component {
  constructor(props) {    
    super(props);    
  }

  render () {  
    const {movies} = this.props;  
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {movies.map((movieObj, index) => {
            return <MovieListEntry movie={movieObj} key={index}/>            
          })}          
        </ul>
      </div>
    );
  }
}

export default MovieList;