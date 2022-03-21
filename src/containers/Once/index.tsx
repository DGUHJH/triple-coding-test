import Phone from 'components/Phone'
import CommonTypography from 'components/Typography/Common'
import * as Styled from './styled'

type Props = {
  scrollY: number
}

const MainOnceContainer: React.FC<Props> = ({ scrollY }) => {
  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={52}
          color="#3a3a3a"
          lineHeight="68px"
          fontWeight={500}
        >
          모든 예약을
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={52}
          color="#3a3a3a"
          lineHeight="68px"
          fontWeight={500}
        >
          최저가로 한 번에!
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          color="#3a3a3a"
          lineHeight="30px"
          marginTop={25}
        >
          항공권부터 숙소, 투어·티켓까지 최저가로 예약.
        </CommonTypography>
        <CommonTypography
          fontFamily="sans-serif"
          fontSize={17}
          color="#3a3a3a"
          lineHeight="30px"
        >
          트리플 전용 특가는 보너스.
        </CommonTypography>
        <Styled.PhoneContainer>
          <Phone
            src="https://triple.guide/intro/images/img-07-screen-3@3x.png"
            width={262}
            height={570}
          />
          <Phone
            src="https://triple.guide/intro/images/img_07_screen_1@3x.png"
            width={262}
            height={570}
          />
          <Phone
            src="https://triple.guide/intro/images/img_07_screen_2@3x.png"
            width={262}
            height={570}
          />
        </Styled.PhoneContainer>
      </Styled.SectionContainer>
    </Styled.Root>
  )
}

export default MainOnceContainer
