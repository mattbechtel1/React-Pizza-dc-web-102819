import React from "react"

const Pizza = ({topping, size, vegetarian, changePizza}) => {
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Non-vegetarian"}</td>
      <td><button type="button" className="btn btn-primary" onClick={changePizza}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
