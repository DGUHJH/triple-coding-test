import CommonImage from 'components/Image/Common'
import CommonTypography from 'components/Typography/Common'
import * as Styled from './styled'

type Props = {
  scrollY: number
}

const MainClubContainer: React.FC<Props> = ({ scrollY }) => {
  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={28}
          lineHeight="1.31"
          fontWeight={500}
          color="#fff"
          marginTop={182}
        >
          Recruiting Now!
        </CommonTypography>
        <CommonImage
          width={310}
          height={333}
          src="https://triple.guide/intro/images/img-09-logo-program.png"
          marginTop={30}
        />
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="1.76"
          fontWeight={500}
          color="#fff"
          marginTop={30}
        >
          여행만 했는데, 손가락 몇 번 놀렸는데
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="1.76"
          fontWeight={500}
          color="#fff"
        >
          포인트가 쌓이는 조금 수상한 클럽.
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="1.76"
          fontWeight={500}
          color="#fff"
          marginBottom={60}
        >
          지금 클럽 멤버를 급구합니다.
        </CommonTypography>
        <a href="https://play.google.com/store/apps/details?id=com.titicacacorp.triple&pid=intro_web">
          <Styled.JoinButtonWrapper>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={17}
              fontWeight={500}
              color="rgb(54, 102, 255)"
            >
              자세히 보기
            </CommonTypography>
          </Styled.JoinButtonWrapper>
        </a>
      </Styled.SectionContainer>
    </Styled.Root>
  )
}

export default MainClubContainer
