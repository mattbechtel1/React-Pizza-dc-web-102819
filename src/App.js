import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzasUrl = 'http://localhost:3000/pizzas'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {activePizza: {
        topping: "",
        vegetarian: true,
        size: 'Small'  
      },
      pizzas: []
    }
  }

  defaultValues = {topping: "", vegetarian: true, size: 'Small'}

  componentDidMount() {
    this.fetchAllPizzas()
  }

  fetchAllPizzas = () => {
    fetch(pizzasUrl)
    .then(res => res.json())
    .then(data => this.setState({pizzas: data, activePizza: this.defaultValues}))
  }

  changeActivePizza = (pizza) => {
    this.setState({activePizza: pizza})
  }

  adjustTempPizzaState = (e) => {
    this.setState({
      activePizza: {
        ...this.state.activePizza,
        [e.target.name]: e.target.value
      }
    })
  }

  adjustTempPizzaBooleanState = (e, boolean) => {
    this.setState({
      activePizza: {
        ...this.state.activePizza,
      [e.target.name]: boolean      }
    })
  }

  savePizza = (e) => {
    e.preventDefault()
    let newPizza = this.state.activePizza
    
    const url = !!newPizza.id ? pizzasUrl + '/' + newPizza.id : pizzasUrl
    const configObj = {
      method: !!newPizza.id ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPizza)
    }

    fetch(url, configObj)
    .then(res => res.json())
    .then(this.fetchAllPizzas)
  }

  pizzaEditing = {save: this.savePizza, string: this.adjustTempPizzaState, veg: this.adjustTempPizzaBooleanState}
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.activePizza} editActivePizza={this.pizzaEditing} />
        <PizzaList changePizza={this.changeActivePizza} pizzas={this.state.pizzas} />
      </Fragment>
    );
  }
}

export default App;
