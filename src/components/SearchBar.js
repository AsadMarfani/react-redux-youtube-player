import React, { Component }  from 'react';
import '../styles/SearchBar.css';
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { 
            term : ''
         };
    }

    onInputChange(event){
        this.setState({ term: event.target.value })
        this.props.onSearchTermChange(this.state.term);
    }

    render(){
        return (
            <div className = "search-bar">
                <input type="text" placeholder = "Search" value = {this.state.term} onChange = {this.onInputChange.bind(this)}/>
                {/*<p>Value of Input is { <span>{this.state.term}</span> }</p>*/}
            </div>
        );
    }
} 

export default SearchBar;