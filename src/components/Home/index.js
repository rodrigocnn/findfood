import React, { useState, useContext } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map } from '..';
import logo from '../../assets/logo.png';
import restaurante from '../../assets/restaurante-fake.png';
import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './styles';
import { AppContext } from '../../App';

const Home = () => {
  const { restaurants } = useContext(AppContext);
  const [inputValue, setInputValue] = useState();
  const [modalOpened, setModalOpened] = useState(false);
  const [query , setQuery] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const listRestaurants = () => {
    return (
      <>
        {restaurants.map((item) => (
          <RestaurantCard key={item.name} title={item.name} address={item.vicinity} />
        ))}
      </>
    );
  };

  function handleKeyPress(e){
 
    if(e.key === "Enter"){
      setQuery(inputValue);
    }

  }


  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo alt="logo" src={logo} />
          <TextField
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            outlined
            label="Pesquisar Restaurante">
            <Input value={inputValue}  onKeyPress={ handleKeyPress } onChange={(event) => setInputValue(event.target.value)} />
          </TextField>

          <CarouselTitle>Na Sua Área</CarouselTitle>

          <Carousel {...settings}>
            <Card photo={restaurante} title="Nome do Restaurante1" />
            <Card photo={restaurante} title="Nome do Restaurante" />
            <Card photo={restaurante} title="Nome do Restaurante" />
            <Card photo={restaurante} title="Nome do Restaurante" />
            <Card photo={restaurante} title="Nome do Restaurante" />
            <Card photo={restaurante} title="Nome do Restaurante" />
          </Carousel>
        </Search>
          
          {listRestaurants()}

      </Container>

      <Map search={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
