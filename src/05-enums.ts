enum OrderStatus {
  DELIVERED,
  PENDING,
  RETURNED,
  CANCELLED,
}

function checkOrder(status: OrderStatus): void {
  if (status === OrderStatus.DELIVERED) {
    console.log("order has been delivered");
  } else if (status === OrderStatus.PENDING) {
    console.log("order is pending");
  } else if (status === OrderStatus.RETURNED) {
    console.log("order has been returned");
  } else {
    console.log("order has been cancelled");
  }
}

checkOrder(OrderStatus.DELIVERED);
