import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Row() {

    const data = [
      {
        link:'https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/518ti3ya2YL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/518ti3ya2YL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/61+3f5q7T6S._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/514NPRZ1AQL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/514NPRZ1AQL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/514NPRZ1AQL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/514NPRZ1AQL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/514NPRZ1AQL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/514NPRZ1AQL._AC_SY200_.jpg'
      },
      {
        link:'https://m.media-amazon.com/images/I/518ti3ya2YL._AC_SY200_.jpg'
      }

    ];

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3
    };
    
  return (
    <Cointainer>
        <div className="header">
        <h2>Inspired by your browsing history</h2>
        <Link className='seemore' to='' >
                    <span className='seemore'>see more</span>
        </Link>
        </div>
        <Carousel {...settings}>
        
        
            {
               data.map((cl)=>{
                return(
                  <Wrap>
                    <Link to=''>
                    <img className='img' src={cl.link} alt="https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_SY200_.jpg" />
                    </Link>
                    </Wrap>
                )
               })
            }
        

        </Carousel>

    </Cointainer>
  )
}

export default Row;

const Cointainer = styled.div`
height: 280px;
background-color: #fff;
margin-right:15px;
margin-left:15px;
margin-top: 20px;
margin-down: 20px;
padding: 10px 20px;
    .header{
      display:flex;
    }
    .seemore{
      text-decoration: none;
      color: #007185;
      cursore: pointer;
      font-size: 15px;
      margin: 10px 0 0 7px;
    }

    .seemore:hover {
      color: #C7511F;
      text-decoration: underline  #C7511F 1px;
  }





`

const Carousel = styled(Slider)`
//overflow-y: hidden;
overflow-x: hidden;

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

.img{
  object-fit: contain;
  height:200px;
  width:100%;
  display: flex;
  padding: 10px 0;
  //margin-right: 20px;
  cursor: pointer;
}

`

