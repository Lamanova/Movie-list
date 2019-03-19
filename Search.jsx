class Search extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      value: ''
    }   
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }
// when setState is called render() is executed
// when state changes render() is called
  render () {   
    const {handleSearchEvent} = this.props;
    return (
      <form className="form-inline my-2 my-lg-0">
        <input 
          className="form-control mr-sm-2" 
          id="search-text" 
          type="search" 
          placeholder="Search" 
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
          aria-label="Search"
        />
        <button 
          className="btn btn-outline-success my-2 my-sm-0"           
          type="submit"
          onClick={(e) => handleSearchEvent(e, this.state.value)}
        >
          Search
        </button>
      </form>
    )
  }
}

export default Search;