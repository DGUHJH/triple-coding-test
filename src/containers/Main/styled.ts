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

export const PhoneImgContainer = styled.div`
  width: 330px;
  height: 680px;
  background-color: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 18%) 0px 13px 24px 0px,
    rgb(0 0 0 / 8%) 0px -6px 9px 0px inset;
  border-radius: 48px;
  position: absolute;
  top: 220px;
  left: calc(50% + 170px);
`;

export const PhoneImgWrapper = styled.div`
  width: 300px;
  border-radius: 33px 33px 0 0;
  overflow: hidden;
`;

export const PhoneImgDesignWrapper = styled.div`
  width: 162px;
  height: 38px;
  left: 84px;
  border-radius: 18px;
  position: absolute;
  top: 0px;
  background-color: rgb(250, 250, 250);
`;
