import React from 'react' ;
import "./styles.scss"

class Car extends React.Component {
    render() {
        const {img, title, description} = this.props.startup;
        return(
            <div>
                <img src={img} />
                <p>{title}</p>
                <p>{description}</p>
            </div>
        );
    }
}

export default Car;