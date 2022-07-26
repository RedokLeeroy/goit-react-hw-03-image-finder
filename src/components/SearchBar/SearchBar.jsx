import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class SearchBar extends Component { 
    
    state = {
        value : ""
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.value.trim() !== "") {
                 this.props.onSubmit(this.state.value)
                this.setState({value: ""})   
        }else{
        return toast.error("You're request is empty")}

    }

    handleChange = (event) => {
        const {value} = event.target
        return this.setState({value: value})}
    
    
    render() {return <header class="searchbar">
  <form class="form" onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
        onChange={this.handleChange}
        value={this.state.value}
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    }
}