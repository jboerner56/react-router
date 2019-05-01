import React from 'react';
import {Link} from 'react-router-dom';

const arrayOfDogs = [
    'oakley',
    'rocky',
    'happy',
    'gilmore'
];
    function Dogs (props) {

        const dogLinks = arrayOfDogs.map(dogName => (
            <li>
                <Link to={`${props.match.path}/${dogName}`}>{dogName}</Link>
            </li>
        ));
        return(
            <div>
                <h1>Cute Doggos</h1>
                <ul>
                    {dogLinks}
                </ul>
            </div>
        )
    }
export default Dogs;