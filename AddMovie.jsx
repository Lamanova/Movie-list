class AddMovie extends React.Component {
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
  
    render () {   
        //function that changes state of App should be passed as props
        //this function should be called as anonymous fn from the event handler
      const {handleAddMovieEvent} = this.props;
      return (
        <form className="form-inline my-2 my-lg-0">
          <input 
            className="form-control mr-sm-2" 
            id="add-movie"             
            placeholder="Add Movie" 
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}            
          />
          <button 
            className="btn btn-outline-success my-2 my-sm-0"           
            type="submit"
            onClick={(e) => handleAddMovieEvent(e, this.state.value)}
          >
            Add
          </button>
        </form>
      )
    }
  }
  
  export default AddMovie;