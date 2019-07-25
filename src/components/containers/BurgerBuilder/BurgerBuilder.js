import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modals/Modal";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";
import axios from "../../../axios-orders";
import Spinner from "../../UI/Spinner/Spinner";

const INGREDIENT_PRICE = {
  salad: 10,
  cheese: 12,
  meat: 20,
  bacon: 17
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: null,
      totalPrice: 40,
      purchaseable: false,
      purchasing: false,
      loading: false
    };
    this.purchasecontinueHandler = this.purchasecontinueHandler.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://react-burger-35b4f.firebaseio.com/ingredients.json")
      .then(res => {
        this.setState({ ingredients: res.data });
      });
  }
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igkey => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchaseable: sum > 0
    });
  }
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    let updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const PriceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + PriceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };
  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };
  reduceIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    let updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const PriceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - PriceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };
  purchasecancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };
  purchasecontinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    // console.log("AAA", ingredients);
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let ordersummary = null;

    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientReduced={this.reduceIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      ordersummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchasecanceled={this.purchasecancelHandler}
          purchasecontinue={this.purchasecontinueHandler}
          orderprice={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      ordersummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modelClosed={this.purchasecancelHandler}
        >
          {ordersummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default BurgerBuilder;
