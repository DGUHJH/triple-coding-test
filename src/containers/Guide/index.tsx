import CommonImage from 'components/Image/Common';
import CommonTypography from 'components/Typography/Common';
import * as Styled from './styled';

const MainGuideContainer = () => {
  return (
    <Styled.Root>
      <Styled.SectionContainer>
        <Styled.TypoContainer>
          <CommonTypography
            fontFamily="sans-serif"
            fontSize={52}
            color="#3a3a3a"
            fontWeight={500}
          >
            국내도 해외도 <br />
            무료 가이드
          </CommonTypography>
          <CommonTypography
            fontFamily="sans-serif"
            fontSize={17}
            color="rgb(58, 58, 58)"
            lineHeight="1.76"
          >
            흩어져 있는 여행 정보를 한눈에. <br />
            깔끔하고 자세한 도시별 가이드로
            <br />
            검색 지옥에서 해방될 시간.
          </CommonTypography>
        </Styled.TypoContainer>
        <Styled.ImgWrapper top={343} right={438}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-newyork@3x.png"
            width={160}
            height={160}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={182} right={315}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-vladivostok@3x.png"
            width={140}
            height={140}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={151} right={51}>
          <CommonImage
            src="	https://triple.guide/intro/images/img-03-rome@3x.png"
            width={200}
            height={200}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={343} right={438}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-newyork@3x.png"
            width={160}
            height={160}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={173} right={-142}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-sydney@3x.png"
            width={150}
            height={150}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={346} right={204}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-kaohsiung@3x.png?20190802"
            width={200}
            height={200}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={368} right={-67}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-jeju@3x.png?20190802"
            width={220}
            height={220}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={323} right={-300}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-osaka@3x.png"
            width={200}
            height={200}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={523} right={554}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-laos@3x.png"
            width={130}
            height={130}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={561} right={339}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-paris@3x.png"
            width={170}
            height={170}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={577} right={90}>
          <CommonImage
            src="	https://triple.guide/intro/images/img-03-london@3x.png"
            width={200}
            height={200}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={568} right={-200}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-budapest@3x.png"
            width={170}
            height={170}
          />
        </Styled.ImgWrapper>
        <Styled.ImgWrapper top={717} right={-42}>
          <CommonImage
            src="https://triple.guide/intro/images/img-03-melbourne@3x.png"
            width={120}
            height={120}
          />
        </Styled.ImgWrapper>
      </Styled.SectionContainer>
    </Styled.Root>
  );
};

export default MainGuideContainer;
