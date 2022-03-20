import styled from 'styled-components';

type RootProps = {
  scrollY: number;
};

export const Root = styled.div<RootProps>`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 42px;
  border-bottom: 1px solid rgb(239, 239, 239);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 400ms ease-in-out 0s;
  transform: ${(props) =>
    props.scrollY > 100 ? `translateY(0)` : `translateY(-100%)`};
  opacity: ${(props) => (props.scrollY > 100 ? `1` : `0`)};
`;

export const LogoWrapper = styled.div`
  width: 84px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
