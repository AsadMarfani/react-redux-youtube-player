import React, { Component }  from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { 
            term : ''
         };
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    render(){
        return (
            <div>
                <input type="text" value = {this.state.term} onChange = {this.onInputChange.bind(this)}/>
                {/*<p>Value of Input is { <span>{this.state.term}</span> }</p>*/}
            </div>
        );
    }
} 

export default SearchBar;