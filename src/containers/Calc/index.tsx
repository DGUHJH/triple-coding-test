import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

const MainCalcContainer = () => {
  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={52}
          lineHeight="1.31"
          fontWeight={500}
          color="#fff"
          marginTop={150}
        >
          날씨. 환율. 길찾기
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={52}
          lineHeight="1.31"
          fontWeight={500}
          color="#fff"
        >
          번역. 시차계산
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="30px"
          color="#fff"
          marginTop={20}
        >
          필요할 때마다 찾아 헤매던 녀석들.
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="30px"
          color="#fff"
        >
          이제 주머니 하나에 쏙 담아 언제든 쓱 꺼내보면 끝.
        </CommonTypography>
      </Styled.SectionContainer>
    </Styled.Root>
  );
};

export default MainCalcContainer;
