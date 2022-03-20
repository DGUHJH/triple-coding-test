import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 83px 50px 17px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

export const TypoContainer = styled(Container)`
  width: 1040px;
  &&& {
    padding: 0;
    margin: 0;
  }
  position: absolute;
  top: 220px;
  left: calc(50% - 520px);
`;

export const TypoButton = styled.div`
  width: 180px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px #fff solid;
  margin-top: 76px;
`;

export const PhoneWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: calc(50% + 170px);
`;
