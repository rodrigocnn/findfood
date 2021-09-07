import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  width: 360px;
  background-color: #00000014;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const MapContainer = styled.div`
  width: 100%;
  background-color: red;
  height: 100vh;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 25px;
  }
  .slick-next {
    right: 0px;
  }
  .slick-list {
    margin-right: -25px;
  }
`;
