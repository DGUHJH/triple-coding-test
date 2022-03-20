import CommonImage from 'components/Image/Common';
import CommonTypography from 'components/Typography/Common';
import useCountHook from 'hooks/useCountHook';
import * as Styled from './styled';

type Props = {
  scrollY: number;
};

const MainResultContainer: React.FC<Props> = ({ scrollY }) => {
  const passengerNumber = useCountHook(596, 700, 7);
  const reviewNumber = useCountHook(80, 100, 15);
  const scheduleNumber = useCountHook(394, 470, 10);

  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <Styled.IconImgContainer>
          <CommonImage
            src="https://triple.guide/intro/images/img-02-triple@3x.png"
            width={400}
            height={338}
          />
          <Styled.IconImgTypoWrapper>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={15}
              color="rgba(58, 58, 58, 0.7)"
            >
              2021년 12월 기준
            </CommonTypography>
          </Styled.IconImgTypoWrapper>
        </Styled.IconImgContainer>
        <Styled.InfoContainer>
          <Styled.InfoTypoLineContainer>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={36}
              color="#3A3A3A"
              fontWeight={700}
            >
              {passengerNumber}만 명
            </CommonTypography>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={36}
              color="#3A3A3A"
            >
              의 여행자
            </CommonTypography>
          </Styled.InfoTypoLineContainer>
          <Styled.InfoTypoLineContainer>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={36}
              color="#3A3A3A"
              fontWeight={700}
            >
              {reviewNumber}만 개
            </CommonTypography>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={36}
              color="#3A3A3A"
            >
              의 여행 리뷰
            </CommonTypography>
          </Styled.InfoTypoLineContainer>
          <Styled.InfoTypoLineContainer>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={36}
              color="#3A3A3A"
              fontWeight={700}
            >
              {scheduleNumber}만 개
            </CommonTypography>
            <CommonTypography
              fontFamily="sans-serif"
              fontSize={36}
              color="#3A3A3A"
            >
              의 여행 일정
            </CommonTypography>
          </Styled.InfoTypoLineContainer>
          <Styled.InfoAwardContainer>
            <Styled.InfoItemContainer>
              <CommonImage
                width={54}
                src="https://triple.guide/intro/images/img-02-badge-google@3x.png"
              />
              <CommonTypography
                fontFamily="sans-serif"
                fontSize={14}
                color="#3A3A3ACC"
                lineHeight="22px"
                marginLeft={6}
              >
                2018 구글 플레이스토어 <br />
                올해의 앱 최우수상 수상
              </CommonTypography>
            </Styled.InfoItemContainer>
            <Styled.InfoItemContainer>
              <CommonImage
                width={54}
                src="https://triple.guide/intro/images/img-02-badge-apple@4x.png"
              />
              <CommonTypography
                fontFamily="sans-serif"
                fontSize={14}
                color="#3A3A3ACC"
                lineHeight="22px"
                marginLeft={6}
              >
                2018 애플 앱스토어 <br />
                오늘의 여행앱 선정
              </CommonTypography>
            </Styled.InfoItemContainer>
          </Styled.InfoAwardContainer>
        </Styled.InfoContainer>
      </Styled.SectionContainer>
    </Styled.Root>
  );
};

export default MainResultContainer;
