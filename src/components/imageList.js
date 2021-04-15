import React from 'react';

const ImageList = props => {
    const images = props.images.map(({id, discription, urls}) => {
        return <img key={id} alt={discription} src={urls.regular} />
    });

    return <div>{images}</div>;  
};
export default ImageList;