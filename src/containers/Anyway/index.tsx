import Phone from 'components/Phone'
import CommonTypography from 'components/Typography/Common'
import * as Styled from './styled'

type Props = {
  scrollY: number
}

const MainAnywayContainer: React.FC<Props> = ({ scrollY }) => {
  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <Styled.TypoContainer>
          <CommonTypography
            fontFamily="sans-serif"
            fontSize={52}
            lineHeight="1.31"
            fontWeight={500}
            color="rgb(58, 58, 58)"
          >
            어디로 향하든 <br /> 믿을만한 길잡이
          </CommonTypography>
          <CommonTypography
            fontFamily="sans-serif"
            fontSize={17}
            lineHeight="1.76"
            color="rgb(58, 58, 58)"
          >
            여행 중 내 위치에 꼭 맞게 <br />
            맛집, 관광지를 쉼 없이 알려주니까. <br />
            마음 편히 여행에 몰입하는 경험 시작.
          </CommonTypography>
        </Styled.TypoContainer>
        <Styled.PhoneContainer>
          <Styled.PhoneWrapper top={125} right={190}>
            <Phone
              width={290}
              height={598}
              src="https://triple.guide/intro/images/img-05-screen-01@3x.png"
            />
          </Styled.PhoneWrapper>
          <Styled.PhoneWrapper top={195} right={0}>
            <Phone
              width={290}
              height={598}
              src="https://triple.guide/intro/images/img-05-screen@2x.png"
            />
          </Styled.PhoneWrapper>
        </Styled.PhoneContainer>
      </Styled.SectionContainer>
    </Styled.Root>
  )
}

export default MainAnywayContainer
