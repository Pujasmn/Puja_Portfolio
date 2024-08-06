export const fetchStats = () => {
    return Promise.resolve({
      totalOrders: 75,
      totalDelivered: 70,
      totalCancelled: 5,
      totalRevenue: 12000,
      netProfit:6759.25,
      completionRate: 70
    });
  };