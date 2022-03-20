import ReviewImage from 'components/Image/Review';
import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

const MainReviewContainer = () => {
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
            직접 맛보고 즐긴 <br />
            장소별 여행 리뷰
          </CommonTypography>
          <CommonTypography
            fontFamily="sans-serif"
            fontSize={17}
            lineHeight="1.76"
            color="rgb(58, 58, 58)"
          >
            먼저 다녀온 여행자가 남긴
            <br />
            영양 만점 리뷰와 공유 일정.
            <br />
            이제 우리 선택에 실패는 없기로 해요.
          </CommonTypography>
        </Styled.TypoContainer>
        <Styled.ReviewContainer top={338} right={310}>
          <ReviewImage
            width={290}
            height={155}
            src="https://triple.guide/intro/images/img-08-review-1@3x.png"
          />
          <ReviewImage
            width={290}
            height={289}
            src="https://triple.guide/intro/images/img-08-review-2@3x.png"
          />
          <ReviewImage
            width={290}
            height={258}
            src="https://triple.guide/intro/images/img-08-review-3@3x.png"
          />
        </Styled.ReviewContainer>
        <Styled.ReviewContainer top={200} right={0}>
          <ReviewImage
            width={290}
            height={341}
            src="https://triple.guide/intro/images/img-99-rounge-a-01-detail@3x.png"
          />
          <ReviewImage
            width={290}
            height={664}
            src="https://triple.guide/intro/images/img-99-rounge-b-01-detail@3x.png"
          />
        </Styled.ReviewContainer>
      </Styled.SectionContainer>
    </Styled.Root>
  );
};

export default MainReviewContainer;
