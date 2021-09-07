import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #fff;
  border-left: 5px solid transparent;

  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: #222;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
`;

export const Address = styled.p`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: #222;
  font-size: 16px;
  line-height: 20px;
  margin-top: 5px;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
  margin-left: 1rem;
`;
