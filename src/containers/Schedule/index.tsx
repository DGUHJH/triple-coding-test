import Phone from 'components/Phone'
import CommonTypography from 'components/Typography/Common'
import * as Styled from './styled'

type Props = {
  scrollY: number
}

const MainScheduleContainer: React.FC<Props> = ({ scrollY }) => {
  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={52}
          lineHeight="68px"
          fontWeight={500}
          color="rgb(58, 58, 58)"
        >
          복잡한 여행 일정
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={52}
          lineHeight="68px"
          fontWeight={500}
          color="rgb(58, 58, 58)"
        >
          이렇게나 간편하게
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="30px"
          color="rgb(58, 58, 58)"
          marginTop={30}
        >
          동행인과 함께 짜는 지도 동선 일정.
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          lineHeight="30px"
          color="rgb(58, 58, 58)"
        >
          여행 가계부로 경비 정산까지 한 번에.
        </CommonTypography>
        <Styled.PhoneContainer>
          <Phone
            width={221}
            height={456}
            src="https://triple.guide/intro/images/img-04-screen-2@3x.png"
          />
          <Phone
            width={221}
            height={456}
            src="https://triple.guide/intro/images/img-04-screen-1@3x.png"
          />
          <Phone
            width={221}
            height={456}
            src="https://triple.guide/intro/images/img-04-screen-3@3x.png"
          />
        </Styled.PhoneContainer>
      </Styled.SectionContainer>
    </Styled.Root>
  )
}

export default MainScheduleContainer
