export const fetchRecentOrders = () => {
    return Promise.resolve([
      { customer: "Wade Warren", orderNo: 15478256, amount: 124, status: "Delivered" },
      { customer: "Jane Cooper", orderNo: 48965786, amount: 305, status: "Delivered" },
      { customer: "Guy Hawkins", orderNo: 78895215, amount: 45.88, status: "Cancelled" },
      { customer: "Kristin Watson", orderNo: 20965732, amount: 65, status: "Pending" },
      { customer: "Cody Fisher", orderNo: 95715620, amount: 545, status: "Delivered" },
      { customer: "Savannah Nguyen", orderNo: 78514568, amount: 128.2, status: "Delivered" }
    ]);
  };