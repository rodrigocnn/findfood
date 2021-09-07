import React from 'react';
import * as S from './styles';

function Card({ photo, title }) {
  return (
    <S.WrapCard role="img" photo={photo}>
      <S.Title>{title}</S.Title>
    </S.WrapCard>
  );
}

export default Card;
