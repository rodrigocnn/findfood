import React from 'react';
import ReactStars from 'react-rating-stars-component';
import * as S from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ title, address }) => {
  return (
    <S.Restaurant>
      <S.RestaurantInfo>
        <S.Title>{title}</S.Title>
        <ReactStars count={5} value={4} isHalf edit={false} size={24} activeColor="#ffd700" />
        <S.Address>{address}</S.Address>
      </S.RestaurantInfo>
      <S.RestaurantPhoto alt="restaurante" src={restaurante} />
    </S.Restaurant>
  );
};

export default RestaurantCard;
