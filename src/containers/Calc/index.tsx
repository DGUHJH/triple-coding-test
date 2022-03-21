import CommonImage from 'components/Image/Common'
import CommonTypography from 'components/Typography/Common'
import { useEffect, useState } from 'react'
import * as Styled from './styled'

type Props = {
  scrollY: number
}

const label = ['날씨', '환율', '길찾기', '번역', '시차계산']
const imgSrc = [
  'https://triple.guide/intro/images/img-06-card-1@3x.png?20190802',
  'https://triple.guide/intro/images/img-06-card-2@3x.png?20190802',
  'https://triple.guide/intro/images/img-06-card-3@3x.png?20190802',
  'https://triple.guide/intro/images/img-06-card-4@3x.png?20190802',
  'https://triple.guide/intro/images/img-06-card-5@3x.png?20190802',
]

const MainCalcContainer: React.FC<Props> = ({ scrollY }) => {
  const [step, setStep] = useState<number>(0)
  const [prevStep, setPrevStep] = useState<number>(0)
  const [isChanging, setIsChanging] = useState<boolean>(false)
  const [arrowType, setArrowType] = useState<'left' | 'right'>('left')

  const onArrowButtonClick = (type: 'left' | 'right') => () => {
    if (type === 'left') {
      if (step !== 0) {
        setPrevStep(step)
        setStep((prev) => prev - 1)
        setArrowType('left')
      }
    } else {
      if (step !== 4) {
        setPrevStep(step)
        setStep((prev) => prev + 1)
        setArrowType('right')
      }
    }
  }

  useEffect(() => {
    setIsChanging(true)
    const timer = setTimeout(() => {
      setIsChanging(false)
    }, 400)
    return () => {
      clearTimeout(timer)
    }
  }, [step])

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
        <Styled.CarouselContainer>
          <Styled.CarouselHeaderContainer>
            <Styled.CarouselHeaderPointBox left={step * 110} />
            {label.map((value, index) => (
              <Styled.CarouselHeaderItemWrapper
                key={`carousel_header_item_${index}`}
              >
                <CommonTypography
                  fontFamily="sans-serif"
                  fontSize={17}
                  lineHeight="30px"
                  color={step === index ? 'rgb(54, 102, 255)' : '#fff'}
                  fontWeight={step === index ? 700 : 400}
                  onClick={() => setStep(index)}
                  transition="all 300ms ease-out 200ms"
                >
                  {value}
                </CommonTypography>
              </Styled.CarouselHeaderItemWrapper>
            ))}
          </Styled.CarouselHeaderContainer>
          <Styled.CarouselBodyContainer
            arrowType={arrowType}
            isChanging={isChanging}
          >
            <CommonImage
              src={isChanging ? imgSrc[prevStep] : imgSrc[step]}
              width={425}
              height={300}
              borderRadius={12}
            />
          </Styled.CarouselBodyContainer>
          <Styled.CarouselArrowImgWrapper
            top={230}
            right={565}
            isActive={step !== 0}
          >
            <CommonImage
              src="https://triple.guide/intro/images/btn-06-arrow-r-over@3x.png"
              width={50}
              height={90}
              rotate={180}
              onClick={onArrowButtonClick('left')}
            />
          </Styled.CarouselArrowImgWrapper>
          <Styled.CarouselArrowImgWrapper
            top={270}
            right={-80}
            isActive={step !== 4}
          >
            <CommonImage
              src="https://triple.guide/intro/images/btn-06-arrow-r-over@3x.png"
              width={50}
              height={90}
              onClick={onArrowButtonClick('right')}
            />
          </Styled.CarouselArrowImgWrapper>
        </Styled.CarouselContainer>
      </Styled.SectionContainer>
    </Styled.Root>
  )
}

export default MainCalcContainer
