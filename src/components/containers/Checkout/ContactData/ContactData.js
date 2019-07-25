import React, { Component } from "react";
import "./ContactData.css";
import Spinner from "../../../UI/Spinner/Spinner";
import axios from "../../../../axios-orders";
import Input from "../../../UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: ""
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };
  orderHandler = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    console.log(this.props.price, "DDD");
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push("/orders");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };
  inputChangeHandler = e => {
    console.log(e.target.value);
  };
  render() {
    const formArray = [];
    for (let key in this.state.orderForm) {
      formArray.push({ id: key, config: this.state.orderForm[key] });
    }
    let form = (
      <form>
        {formArray.map(form => (
          <Input
            key={form.id}
            elementType={form.config.elementType}
            elementConfig={form.config.elementConfig}
            value={form.config.value}
            changed={this.inputChangeHandler}
          />
        ))}
        <button className="btn btn-primary" onClick={this.orderHandler}>
          Order Now
        </button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
