import React from 'react';
import Stats from './Stats';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Stats />
      <ActivityChart />
      <RecentOrders />
      <Feedback />
    </DashboardContainer>
  );
};

export default Dashboard;
