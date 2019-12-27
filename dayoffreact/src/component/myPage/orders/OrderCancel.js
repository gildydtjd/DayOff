import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class OrderCancel extends Component {

    orderCount = async () => {
        console.log("orderCount중");
        const params = new URLSearchParams();
        params.append("groupId", this.props.order.groupId)
        await Axios({
            method: "post",
            data: params,
            url: "/orderCount"
        }).then(async (res) => {
            this.calculateRefundAmount(res.data);

        });
    }

    calculateRefundAmount = (orderCount) => {
        const { order } = this.props;
        const { gradeDiscount, couponDiscount, pointUse, orderPrice, totalPay } = order;
        const ratio = orderPrice / (totalPay + gradeDiscount + couponDiscount + pointUse);
        const refundAmount = orderPrice - Math.round(ratio * gradeDiscount) - Math.round(ratio * couponDiscount) - Math.round(pointUse / orderCount);
        this.setState({
            refunds:{
                orders: {id:order.orderId},
                refundAmount: refundAmount
            }
        })
    }

    cancel = async () => {
        
        // const params = new URLSearchParams();
        // params.append("orderId", orderId)
        await Axios({
            method: "post",
            data: this.state.refunds,
            url: "/cancelOrder"
        }).then((res) => {
            window.location.reload(false)
        })
    }

    componentDidMount() {
        if (!this.props.orderCount) this.orderCount();
        else this.calculateRefundAmount(this.props.orderCount);
    }

    f3 = () => {
        window.confirm(`상품 주문을 취소하시겠습니까?`) //리액트에서는 window. 붙여야함
        return this.cancel();
    }

    render() {
        return (
            <div>
                <button onClick={this.f3.bind(this)}>주문취소</button>
            </div>
        );
    }
}

export default withRouter(OrderCancel);