import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchRecentOrders } from '../../data/ordersData';

const TableContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid #444;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
`;

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchRecentOrders().then(data => setOrders(data));
  }, []);

  return (
    <TableContainer>
      <h2>Recenet Orders</h2>
      <Table>
        <thead>
          <tr>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Order No.</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderNo}>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>${order.amount.toFixed(2)}</TableCell>
              <TableCell>{order.status}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrders;
