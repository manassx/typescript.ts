var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["DELIVERED"] = 0] = "DELIVERED";
    OrderStatus[OrderStatus["PENDING"] = 1] = "PENDING";
    OrderStatus[OrderStatus["RETURNED"] = 2] = "RETURNED";
    OrderStatus[OrderStatus["CANCELLED"] = 3] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function checkOrder(status) {
    if (status === OrderStatus.DELIVERED) {
        console.log("order has been delivered");
    }
    else if (status === OrderStatus.PENDING) {
        console.log("order is pending");
    }
    else if (status === OrderStatus.RETURNED) {
        console.log("order has been returned");
    }
    else {
        console.log("order has been cancelled");
    }
}
checkOrder(OrderStatus.DELIVERED);
export {};
