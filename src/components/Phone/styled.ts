import styled from 'styled-components';

type Props = {
  width: number;
  height: number;
};

export const PhoneImgContainer = styled.div<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
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

export const PhoneImgWrapper = styled.div<Props>`
  width: ${(props) => props.width - 30}px;
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
