import React from 'react';


function Dog({match}) {
    return(
        <div>
            Hey there, {match.params.dog} !
        </div>
    );
}
export default Dog;