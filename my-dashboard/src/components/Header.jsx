import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #292929;
`;

const SearchBar = styled.input`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar placeholder="Search" />
      <UserProfile>
        {/* Add user profile icon and other elements */}
      </UserProfile>
    </HeaderContainer>
  );
};

export default Header;
