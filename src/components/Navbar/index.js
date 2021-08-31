import React from 'react';
import "./styles.scss"

class Navbar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <nav className="nav">
                <input className="input" onChange={ (e) => this.handleChange (e)} type="text" />
                <p className="text">Magui esta tipiando: {this.state.inputValue}</p>
            </nav>       
        );
    }
}

export default Navbar;