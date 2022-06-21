import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Product({data}) {
  return (
    <Card>
        <h1 className='heading'>{data.heading}</h1>
        <div className="main">
           <div className="fild">
               <Link className='link' to="" >
               <img src={data.fild1.img} alt="img" />
               <span>{data.fild1.title}</span>
               </Link>
           </div>
           <div className="fild">
               <Link className='link' to="" >               
               <img src={data.fild2.img} alt="img" />
               <span>{data.fild2.title}</span>
               </Link>
           </div>
           <div className="fild">
               <Link className='link' to="" >
               <img src={data.fild3.img} alt="img" />
               <span>{data.fild3.title}</span>
               </Link>
           </div>
           <div className="fild">
               <Link className='link' to="" >
               <img src={data.fild4.img} alt="img" />
               <span>{data.fild4.title}</span>
               </Link>
               
           </div>
           
           <Link className='seemore' to='' >
                    <span className='seemore'>see more</span>
               </Link>
        </div>

    </Card>
  )
}

export default Product;

const Card = styled.div`
z-index: 1;
//overflow-x: hidden;
padding: 15px;
width: 320px;
//margin: 20px;
background-color: white;
display: flex;
flex-direction: column;
    .heading{
        font-size: 21px;
        color: #0F1111;
        margin: 8px 0;
    }

    .main{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-row: repeat(2, 1fr);
        gap:10px;

        .fild{
            display:flex;
            flex-direction: column;
            .link{
                text-decoration: none;
            }
            span{
                font-size: 12px;
                color: #0F1111;
            }
            img{
                cursor: pointer;
            }
            .seemore{
                color: #007185;
                cursore: pointer;
                font-size: 13px;
                
                
            }
        }

        .seemore{
            color: #007185;
            text-decoration: none;
            margin: 8px 0;
        }

        .seemore:hover {
            color: #C7511F;
            text-decoration: underline  #C7511F 1px;
        }
    }

`