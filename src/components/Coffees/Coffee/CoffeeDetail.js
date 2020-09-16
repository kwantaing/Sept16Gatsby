import React from 'react';

const CoffeeDetail = props => {
    const Coffee = props.coffee;
    console.log(Coffee);
    const style={textAlign:`center`}
    return(
        <div style={style}>
            <h3>{Coffee.coffeeName}</h3>
            <img src={Coffee.coffeeImage.fluid.src} alt=""></img>
            <p>Type of Coffee: {Coffee.coffeeType.coffeeType}</p>
            <p>{Coffee.coffeeDescription}</p>
            <p>Rating: {Coffee.coffeeRating}</p>
        </div>
    )
}


export default CoffeeDetail;