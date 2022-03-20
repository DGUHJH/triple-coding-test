import CommonImage from 'components/Image/Common';
import Phone from 'components/Phone';
import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

type Props = {
  scrollY: number;
};

const MainBannerContainer: React.FC<Props> = ({ scrollY }) => {
  return (
    <Styled.Root>
      <CommonImage
        src="https://triple.guide/intro/images/img-01-bg.png"
        height={860}
      />
      <Styled.HeaderContainer>
        <CommonImage
          src="https://triple.guide/intro/images/img-main-logo-white@3x.png"
          width={77}
          height={25}
        />
        <a
          rel="noopener"
          href="https://triple.guide/login?returnUrl=%2Fmy-bookings%2F&type=bookings"
          target="_blank"
        >
          <CommonTypography fontFamily="sans-serif" fontSize={17} color="#fff">
            내 예약
          </CommonTypography>
        </a>
      </Styled.HeaderContainer>
      <Styled.TypoContainer>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={80}
          color="#fff"
          fontWeight={700}
        >
          여행의 모든 것 <br />
          트리플로 한번에
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          color="#fff"
          marginTop={18}
        >
          예약부터 일정까지 앱 하나로 간편하게 준비하세요.
        </CommonTypography>
        <Styled.TypoButton>
          <CommonTypography fontFamily="sans-serif" fontSize={17} color="#fff">
            앱 설치하기
          </CommonTypography>
        </Styled.TypoButton>
      </Styled.TypoContainer>
      <Styled.PhoneWrapper>
        <Phone
          src="https://triple.guide/intro/images/img_01_screen_3_520@3x.png"
          width={330}
          height={680}
        />
      </Styled.PhoneWrapper>
    </Styled.Root>
  );
};

export default MainBannerContainer;
