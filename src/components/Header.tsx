import React, {useContext} from 'react';
import styled from "styled-components";
import {HomeContext} from "../context/HomeContext";
import CustomButton from "../core/components/CustomButton";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.black};
`

const RefreshButton = styled(CustomButton)<{ disabled: boolean }>`
  && {
    height: 40px;
    background: ${({theme}) => theme.colors.blue500};
    color: ${({theme}) => theme.colors.white};
    padding: 8px 16px;
    margin-left: 18px;

    &:hover {
      background: ${({theme}) => theme.colors.blue100};
    }

    &:disabled {
      opacity: .5;
      pointer-events: all;
      cursor: not-allowed;
      color: ${({theme}) => theme.colors.white};
      background: ${({theme}) => theme.colors.blue100};
    }
  }
`

const Header = () => {
    const {fetchStories, isLoading} = useContext(HomeContext)
    return (
        <HeaderContainer>
            <Title>Hacker News</Title>
            <RefreshButton
                onClick={fetchStories}
                disabled={isLoading}
                text='Refresh'/>
        </HeaderContainer>
    );
};

export default Header;