import React from 'react';

class Filters extends React.Component {
    constructor() {
        super();
        
    }
    
    findPetsClicked = () => {
        this.props.onFindPetsClick();
    }
    selectChangeHandler = (e) => {
        this.props.onChangeType(e.target.value);
    }
    
    render() {

        let filter = this.props.filters.type

        return (
            <div className="ui form">
                <h3>Animal type</h3>
                <div className="field">
                    <select name="type" id="type" value={filter} onChange={this.selectChangeHandler}>
                        <option value="all">All</option>
                        <option value="cat">Cats</option>
                        <option value="dog">Dogs</option>
                        <option value="micropig">Micropigs</option>
                    </select>
                </div>

                <div className="field">
                    <button className="ui secondary button" onClick={this.findPetsClicked} >Find pets</button>
                </div>
            </div>
        );
    }
}

export default Filters;
