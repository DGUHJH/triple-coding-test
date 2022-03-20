import CommonImage from 'components/Image/Common';
import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

type Props = {
  scrollY: number;
};

const Header: React.FC<Props> = ({ scrollY }) => {
  return (
    <Styled.Root scrollY={scrollY}>
      <Styled.LogoWrapper>
        <CommonImage
          src="https://assets.triple.guide/images/img_intro_logo_dark.svg"
          width={68}
          height={24}
        />
      </Styled.LogoWrapper>
      <a href="https://triple.guide/login?returnUrl=%2Fmy-bookings%2F&type=bookings">
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          color="rgba(58, 58, 58, 0.8)"
          marginRight={14}
        >
          내 예약
        </CommonTypography>
      </a>
    </Styled.Root>
  );
};

export default Header;
