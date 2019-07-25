import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../Order/CheckoutSummary/Checkoutsummary";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
  state = {
    ingredients: null,
    totalprice: 0
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    console.log("DSD", query.entries());
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
        // console.log("price12", param[1]);
      } else {
        // console.log("price", param[1]);
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      totalprice: price
    });
  }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalprice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
