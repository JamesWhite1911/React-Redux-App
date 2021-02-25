//react
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//actions
import { getImage } from '../actions'

import styled from 'styled-components';

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
        return (
            <StyledFetch>Fetching a fox :)</StyledFetch>
        )
    }

    return (
        <StyledDiv>
            <h1>Foxes!</h1>
            <img src={image}></img>
            <button onClick={handleClick}>Get another fox!</button>
        </StyledDiv>
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


const StyledDiv = styled.div`
  background-color: #ed960b;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 5% 0;
  padding-top: 0;
  img {
      height: 600px;
      width: 800px;
      margin: 0 -2px;
  }
  button {
      display: flex;
      margin-top: 5%;
      padding: 10px 50px;
      letter-spacing: 1px;
      color: white;
      background-color: black;
      border-style: none;
  }
  h1 {
  background-color: black;
  margin: 0;
  width: 100%;
  padding: 20px 0;
 }
`

const StyledFetch = styled.h3`
padding: 0 20px;
`