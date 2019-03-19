class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {movie} = this.props
    return (
      <w className="list-group-item">     
        <div className="row">
          <div className="col-md-9">
            {movie.title}
          </div>
          <div className="col-md-3">
            <span className="badge badge-pill badge-success">{movie.watched? 'watched' : 'not watched'}</span>
          </div>
        </div>        
      </li>
    )
  }
}

export default MovieListEntry;
