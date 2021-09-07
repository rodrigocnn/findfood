import styled from 'styled-components';

export const WrapCard = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin-right: 0px;
  padding: 10px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
`;
