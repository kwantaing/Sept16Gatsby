import React from "react"
import Layout from "../components/Layout/layout"
// import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"
import CoffeeType from "../components/Coffees/CoffeeType"
import CoffeeDetail from "../components/Coffees/Coffee/CoffeeDetail"

const DetailPage = props => {
//   console.log(props.pageContext.coffeeType);
  const coffeetype = props.pageContext.coffeeType;
//   console.log(props.pageContext.coffee);
  const coffee = props.pageContext.coffee;
//   const style = {textAlign : `center`};
  //if category
  if (coffeetype) {
    return (
      <Layout>
          <CoffeeType coffeetype={coffeetype}></CoffeeType>
        {/* <div key={coffeetype.id} style={style}>
          <h2>{coffeetype.coffeeType}</h2>
          <img src={coffeetype.coffeeTypeImg.fluid.src} alt=""></img>
          <br />
          {coffeetype.coffeeTypeOfferings.map(coffee => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffeeType={coffeetype.slug}
                coffee={coffee}
              ></CoffeeCard>
            )
          })}
        </div> */}
      </Layout>
    )
  }else{
      return (
        <Layout>
            {/* <CoffeeCard coffee={coffee}></CoffeeCard> */}
            <CoffeeDetail coffee={coffee}></CoffeeDetail>
        </Layout>
      )
  }
}

export default DetailPage
