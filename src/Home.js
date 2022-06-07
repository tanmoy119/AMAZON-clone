import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", zIndex:"100" ,position:'absolute', right:"10px", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'none', zIndex:"1",position:"absolute", left:"10px" }}
      onClick={onClick}
    />
  );
}

function Home() {
  const data= {
    heading:'Shop & Pay | Earn rewards daily',
    fild1:{
      title:'Claim your scratch cards',
      img:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg'
    },
    fild2:{
      title:'Redeem your collected rewards',
      img:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg'
    },
    fild3:{
      title:'Unlock more rewards when you pay or shop',
      img:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg'
    },
    fild4:{
      title:'Explore all offers in one place',
      img:'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_PayAndShop._SY116_CB627364845_.jpg'
    }
    
  }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Cointainer >
      {/* Image Slider */}
        <Carousel {...settings}>
            <Wrap>
                <Homeimg src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"/>
            </Wrap>
            <Wrap>
                <Homeimg src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"/>
            </Wrap>
            <Wrap>
                <Homeimg src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"/>
            </Wrap>
            <Wrap>
                <Homeimg src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/PC_Hero_3000x1200._CB643589305_.jpg"/>
            </Wrap>
            <Wrap>
                <Homeimg src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"/>
            </Wrap>
            <Wrap>
                <Homeimg src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"/>
            </Wrap>
            <Wrap>
                <Homeimg src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            </Wrap>
          </Carousel>

          {/* Products */}
          <Product data={data} />

    </Cointainer>
  )
}

export default Home;

const Carousel = styled(Slider)`
overflow-y: hidden;
    .slick-list{
        overflow: visible;
    }

    button{
        z-index:1;
    }
`;

const Wrap = styled.div`
object-fit: contain;
border: hidden;

`;

const Cointainer = styled.div`
height: 200vh;
max-width: 1500px;
margin-right: auto;
margin-left: auto;
`

const Homeimg= styled.img`
//object-fit: contain;
border: hidden;
border-color: transparent;
cursor: pointer;
width:100%;
mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

`

