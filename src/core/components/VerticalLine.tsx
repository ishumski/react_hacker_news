import React from 'react';
import styled from "styled-components";

const CustomVerticalLine = styled.div`
  height: 100%;
  min-height: 15px;
  width: 2px;
  margin: 0 10px;
  background: ${({theme}) => theme.colors.grey};
`

const VerticalLine = () => <CustomVerticalLine/>;

export default VerticalLine;