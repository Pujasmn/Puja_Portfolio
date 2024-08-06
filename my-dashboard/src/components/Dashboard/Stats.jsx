import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchStats } from '../../data/statsData';
import { FaLock, FaCheckCircle } from 'react-icons/fa';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StatBox = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  margin: 0 10px;
  text-align: center;
`;

const Stats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats().then(data => setStats(data));
  }, []);

  return (
    
    <StatsContainer>
      <StatBox>
      <FaLock style={{ color: '#0095ff' ,padding: '0px 100' }} size={24} />
        Total Orders: {stats.totalOrders}</StatBox>
      <StatBox>
      <FaLock style={{ color: 'green', padding: '0px 100'}} size={24} />
        Total Delivered: {stats.totalDelivered}</StatBox>
      <StatBox>
      <FaLock style={{ color: 'red', padding: '0px 100'}} size={24} />
        Total Cancelled: {stats.totalCancelled}</StatBox>
      <StatBox>
      <FaLock style={{ color: 'pink', padding: '0px 100'}} size={24} />
        Total Revenue: ${stats.totalRevenue}</StatBox>
        <StatBox>
        net profit: ${stats.netProfit}
        <FaCheckCircle style={{ color: 'blue', padding: '0px 0'}} size={24} />
        </StatBox>
      
    </StatsContainer>
  );
};

export default Stats;
