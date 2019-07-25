import React, { Component } from "react";
import Order from "../../Order/Order";
import axios from "../../../axios-orders";
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let order in res.data) {
          console.log("DDDD", { ...res.data[order] });
          fetchedOrders.push({ ...res.data[order], id: order });
        }
        console.log("fetchedOrders", fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            price={order.price}
            ingredients={order.ingredients}
            key={order.id}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
