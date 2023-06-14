import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return (
            <input className={`search-box ${this.props.className}` }//string interpolation ca be useful
            //to target a specific search box (console will show: search-box monsters-search-box)
            type='search'
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
            ></input>
        )
    }
}

export default SearchBox;