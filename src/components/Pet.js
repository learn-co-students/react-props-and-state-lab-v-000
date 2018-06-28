import React from 'react'

class Pet extends React.Component {
    constructor(props) {
        super(props)

        this.genderSymbol = this.genderSymbol.bind(this);
    }

    genderSymbol = () => {
        if(this.props.pet.gender === 'male') {
            return '♂';
        } else {
            return '♀';
        };
    }


    render() {
        const adoptedStatus = () => {
            if(this.props.pet.isAdopted === true) {
                return <div> <button className="ui disabled button">Already adopted</button></div>
            } else {
                return <div><button className="ui primary button" onClick={() => this.props.onAdoptPet(petId)}>Adopt pet</button></div>
            };
        }

        const petId = this.props.pet.id;
        const adoptMe = () => {
            if(this.props.pet.isAdopted) {
                return 'ADOPTED';
            } else {
                return 'NOT ADOPTED';
            };
        };

        return (
            <div className="card">
                <div className="content">
                    <a className="header">
                        {this.genderSymbol()}
                    </a>
                    <div className="meta">
                        <span className="date"></span>
                    </div>
                    <div className="description">
                        <p>Name: {this.props.pet.name}</p>
                        <p>Age: {this.props.pet.age}</p>
                        <p>Weight: {this.props.pet.weight}</p>
                        <p>Type: {this.props.pet.type}</p>
                        <p>Id: {this.props.pet.id}</p>
                        <p>Adopted? {adoptMe()}</p>
                    </div>
                </div>
                <div className="extra content">
                    {adoptedStatus()}
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Pet
