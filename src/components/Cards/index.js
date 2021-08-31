import React from 'react';
import "./styles.scss"
import Car from '../Car';

class Cards extends React.Component{
    render() {
        const startups = [
            {
                img : '',
                title: 'CourseIt',
                description: 'Descripcion de CourseIt'
            },
            {
                img : '',
                title: 'Endava',
                description: 'Descripcion de Endava'
            }
        ]

        return(
            <div>
                {startups.map ( (startup,key) => {
                    return(
                        <Car startup={startup} key={key} />
                    )
                }
                )}
            </div>           
        );
    }
}

export default Cards;