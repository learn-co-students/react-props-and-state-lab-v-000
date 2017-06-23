import React from 'react';

class Pet extends React.Component {
    constructor(props) {
        super(props);
    }

    adoptButtonClicked = () => {
        this.props.onAdoptPet(this.props.pet.id)
    }

    render() {
        let button; 
        if(this.props.isAdopted) {
            button = <button className="ui disabled button" disabled>Already adopted</button>
        } else {
            button = <button onClick={this.adoptButtonClicked} className="ui primary button">Adopt pet</button>
        }

        let gender = this.props.pet.gender==="male" ? "♂" : "♀";
        return (
            <div className="card">
                <div className="content">
                    <a className="header">{this.props.pet.name} ({gender})</a>
                    <div className="meta">
                        <span className="date">{this.props.pet.type}</span>
                    </div>
                    <div className="description">
                        <p>Age: {this.props.pet.age}</p>
                        <p>Weight: {this.props.pet.weight}</p>
                    </div>
                </div>
                <div className="extra content">
                    {button}
                </div>
            </div>
        );
    }
}

export default Pet;