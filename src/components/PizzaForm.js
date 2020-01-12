import React from "react"

const PizzaForm = ({pizza, editActivePizza}) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping" value={pizza.topping} onChange={editActivePizza.string}/>
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" name="size" onChange={editActivePizza.string}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" checked={pizza.vegetarian} onChange={(e) => editActivePizza.veg(e, true)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" checked={!pizza.vegetarian} onChange={(e) => editActivePizza.veg(e, false)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={editActivePizza.save}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
