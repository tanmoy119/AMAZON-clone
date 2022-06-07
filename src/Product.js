import React from 'react';
import styled from 'styled-components';

function Product({data}) {
  return (
    <Card>
        <h1>{data.heading}</h1>
        <div className="main">
           <div className="fild">
               <img src={data.fild1.img} alt="img" />
               <span>{data.fild1.title}</span>
           </div>
           <div className="fild">               
               <img src={data.fild2.img} alt="img" />
               <span>{data.fild2.title}</span>
           </div>
           <div className="fild">
               <img src={data.fild3.img} alt="img" />
               <span>{data.fild3.title}</span>
           </div>
           <div className="fild">
               <img src={data.fild4.img} alt="img" />
               <span>{data.fild4.title}</span>
           </div>
        </div>

    </Card>
  )
}

export default Product;

const Card = styled.div`
width: 350px;
background-color: white;
display: flex;
flex-direction: column;
    .main{
        display:grid;
        grid-template-columns: auto auto;
        grid-template-row: auto auto;
        gap:10px;

        .fild{
            display:flex;
            flex-direction: column;
        }
    }

`