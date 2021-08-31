import React from 'react';
import "./styles.scss"

class Navbar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleClick() {
        console.log ('click')
    }

    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <nav>
                <h1 onClick={ () => this.handleClick ()}>soy un navbar</h1>
                <input onChange={ (e) => this.handleChange (e)} type="text" />
                <p>Magui esta tipiando:{this.state.inputValue}</p>
            </nav>       
        );
    }
}

export default Navbar;