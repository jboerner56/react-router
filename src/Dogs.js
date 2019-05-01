import React from 'react';
import {Link} from 'react-router-dom';

// const dogs = [
//     'oakley',
//     'rocky',
//     'happy',
//     'gilmore'
// ];
    function Dogs ({dogs, match, history}) {

        const dogLinks = dogs.map(dogName => (
            <li>
                <Link to={`${match.path}/${dogName}`}>{dogName}</Link>
            </li>
        ));
        return(
            <div>
                <h1>Cute Doggos</h1>
                <ul>
                    {dogLinks}
                </ul>
                <button onClick={() => {
                    // history.push() lets us programmatically go to another route.
                    // can use this instead of a <Link>component if you need to trigger some other custom code, like setState()
                    history.push('/');
                }}>Go Home</button>
            </div>
        )
    }
export default Dogs;