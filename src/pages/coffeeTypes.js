import React from "react"
import Layout from "../components/Layout/layout"
// import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"
import CoffeeType from "../components/Coffees/CoffeeType";

const CoffeeTypes = (props) => {
  const allCoffeeTypes = props.pageContext.allCoffeeTypes;
  return (
    <Layout>
      {allCoffeeTypes.map(coffeetype => {
        return (
          <CoffeeType key={coffeetype.id} coffeetype={coffeetype}></CoffeeType>
          // <div key={coffeetype.id} style={style}>
          //   <h2>{coffeetype.coffeeType}</h2>
          //   <img src={coffeetype.coffeeTypeImg.fluid.src} alt=""></img><br />
          //   {coffeetype.coffeeTypeOfferings.map(coffee=>{
          //     return (
          //       <CoffeeCard key={coffee.id} coffeeType = {coffeetype.slug} coffee={coffee}></CoffeeCard>
          //     )
          //   })}
          // </div>
        )
      })}
    </Layout>
  )
}

export default CoffeeTypes
