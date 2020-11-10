import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    return (
      <div className="entry">
        <h4>{name}</h4>
        <p>type: {type}</p>
        <p>weigth: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image}></img>
        <a href={moreInfo}>additional info</a>
      </div>
    )
  }
}

export default Pokemon;