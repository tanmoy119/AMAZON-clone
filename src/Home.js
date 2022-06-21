import React, { useEffect, useState  } from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import axios from "axios";
import Row from './Row';

//const url ='http://localhost:5000/get/cart/data?key=tanmoy';


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
  const url ='http://localhost:5000/get/cart/data?key=tanmoy';
  const [data,setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(url);
      setData(request.data);
      //console.log(request);
    }
    fetchData();
  },[url]);
  console.log(data);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Cointainer >
      <div className="head">
      {/* Image Slider */}
        <Carousel {...settings}>
            <Wrap>
                <Homeimg src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2file/Alllanguages/3000x1200_Hero-Tall_NP._CB635770012_.jpg"/>
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
          <div className="carts">
          {
            data.map((ele)=>{
              return <Product data={ele} />
            })
          }
          </div>

          </div>
          <Row/>
          <Row/>

    </Cointainer>
  )
}

export default Home;

const Carousel = styled(Slider)`


//z-index: -1;
margin-bottom: -150px;

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
max-width: 1500px;
margin-right: auto;
margin-left: auto;
    .carts{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr );
      gap: 20px;
      margin:15px;
    }
`

const Homeimg= styled.img`
//object-fit: contain;
cursor: pointer;
width:100%;
mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

`

