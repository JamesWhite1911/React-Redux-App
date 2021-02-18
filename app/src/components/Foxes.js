//react
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//actions
import { getImage } from '../actions'

//main
const Foxes = (props) => {
    const { image, isFetching, error } = props;

    const handleClick = () => {
        props.getImage();
    }

    useEffect(() => {
        props.getImage();
    }, [])

    if (error) {
        return <h3>Error: {error}</h3>;
    }

    if (isFetching) {
        return <h3>Fetching a fox :)</h3>;
    }

    return (
        <div>
            <img src={image}></img>
            <button onClick={handleClick}>Get another fox!</button>
        </div>
    )
}

//map state to props
const mapStateToProps = state => {
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
}

//connect
export default connect(mapStateToProps, { getImage })(Foxes);