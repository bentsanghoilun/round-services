import React, {useState} from 'react';

const Image = props => {
    const [isLoaded, setisLoaded] = useState(0);

    return(
        <img className='image' isLoaded={isLoaded} src={props.src} onLoad={() => setisLoaded(1)} />
    )
}

export default Image;