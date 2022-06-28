import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import  queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { ADD } from './redux/actions/action';


function ItemPage() {


    const dispatch = useDispatch();
    const send = (e)=>{
        dispatch(ADD(e));
    }




    const location = useLocation();
   let queries = queryString.parse(location.search);
   console.log(queries.id);
    const url = `http://localhost:5000/get/product/data/id?key=tanmoy&id=${queries.id}`;
    
    const[imgs,setImgs] = useState([]);
    const[img,setImg] = useState('');
    const[data,setData] = useState({});
    const[brand,setBrand] = useState('');
    const[aboutdataK,setAboutdataK] = useState([]);
    const[aboutdataV,setAboutdataV] = useState([]);
    const[about,setAbout] = useState([]);

    useEffect(()=>{
        async function fetchData(){
          const request = await axios.get(url);
          setData(request.data[0]);
          const i = request.data[0].image;
          setImg(i.img1);
         const arr= Object.values(request.data[0].image);
         setImgs(arr);
        // console.log(request.data[0].aboutdata.Brand);
         setBrand(request.data[0].aboutdata.Brand)
         const arr2 = Object.keys(request.data[0].aboutdata);
         setAboutdataK(arr2);
         const arr3 = Object.values(request.data[0].aboutdata);
         setAboutdataV(arr3);
         setAbout(request.data[0].about);
        }
        fetchData();
      },[url]);
     
console.log(brand);
  return (
    <Cointainer>
        <div className="cointainer">
        <ItemImg>
            
        <div className="smallimg">
            {
               
                imgs.map((cl)=>{
                    return   <img onMouseEnter={()=>{setImg(cl)}} src={cl} alt="" />
                })
            }
              
             
        </div>
        
            <img src={img} alt="" />
            <span className='tag' style={{position:"absolute",top:"850px", left:"490px"}}>Roll over image to zoom in</span>
            
        </ItemImg>
        <div className="itemData">
            <span className="heading">{data.heading}</span> <br />
            <Link className="brand" to=''><span >Visit the {brand} Store</span></Link> <br />
            <div className="acl">
            <div className="ac">
                <span>Amazon's</span>
                <span style={{color:'#F69931'}}>/Choice</span>
                
            </div>
            <span>for {`"${brand}"`}</span>
            </div>
            <hr />
            <div className="price">
                <span style={{color:"#CC0C39"}}>-{parseInt((data.oldprice-data.newprice)*100/data.oldprice)}% </span>
                <span style={{fontSize:"28px"}} >₹{data.newprice}</span>
            </div>
            <div className="prePrice">
            <span>M.R.P:₹</span>
            <span style={{textDecoration:'line-through'}} >{data.oldprice}.00</span>
            </div>
            <span style={{fontSize:"14px"}}> Inclusive of all taxes</span>
            <div className="offers">
                <span style={{display:"flex", alignItems:"center", margin: '10px 0px 10px 20px ', fontSize:"15px"}} ><b style={{color:"#B12704"}} >Save Extra </b><p>-</p> with 3 offers</span><hr />
                <span style={{display:"flex", alignItems:"center", margin: '10px 0px 10px 10px ', fontSize:"15px"}} ><p><b style={{color:"#B12704"}} >Bank Offer (4):</b>10% Instant Discount up to INR 1500 on ICICI Bank Credit Card Non EMI trxns (excluding Amazon Pay…</p></span><hr />
                <span style={{display:"flex", alignItems:"center", margin: '10px 0px 10px 10px ', fontSize:"15px"}} ><p><b style={{color:"#B12704"}} >No Cost EMI: </b>Avail No Cost EMI on select cards for orders above ₹3000  | | Details</p></span><hr />
                <span style={{display:"flex", alignItems:"center", margin: '10px 0px 10px 10px ', fontSize:"15px"}} ><p style={{color:"#007185"}} >See 1 more</p></span>

            </div>
            <div className="icons">
                <span style={{display:"flex",flexDirection:"column",cursor:"pointer",justifyContent:"center", alignItems:"center"}} >
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" />
                <span>Pay on Delivery</span>
                </span>
                <span style={{display:"flex",flexDirection:"column",cursor:"pointer",justifyContent:"center", alignItems:"center"}}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
                <span>7 Days Replacement</span>
                </span>
                <span style={{display:"flex",flexDirection:"column",cursor:"pointer",justifyContent:"center", alignItems:"center"}}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" />
                <span>Pay on Delivery</span>
                </span>
                <span style={{display:"flex",flexDirection:"column",cursor:"pointer",justifyContent:"center", alignItems:"center"}}> 
                <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" />
                <span>Pay on Delivery</span>
                </span>
            </div><hr />

            <div className="itemD">

                {
                    aboutdataK.map((cl,n)=>{
                        return  <><span className='is'><b style={{marginRight:"60px"}}>{aboutdataK[n]}</b><p>{aboutdataV[n]}</p></span><br /></>;
                    })
                }
               


            </div><hr />

            <div className="aboutItems">
                <h2 style={{fontSize:"15px",marginBottom:"5px"}}>About this item</h2>
                <ul className='u'>
                    {
                        about.map((cl)=>{
                            return <><li>{cl}</li></>
                        })
                    }
                </ul>
            </div><hr />


        </div>
        <div className="buyDiv">
            <div  className="data">
                <div style={{marginBottom:"10px"}} className="">
                <span >₹</span><span style={{fontSize:"28px"}}>{data.newprice}</span><span>.00</span>
                </div>
                <div className="" style={{marginBottom:"10px"}}>
                <span ><span style={{color:"#007600"}}> FREE delivery</span> {new Date(new Date().setDate(new Date().getDate() + 3)).toDateString()} <span style={{color:"#007600"}}> Details</span></span>
                </div>
                <span>Or fastest delivery {new Date(new Date().setDate(new Date().getDate() + 1)).toDateString()}. Order within<span style={{color:"#007600"}}> 1 hr 21 mins. Details</span></span>
                <div className="" style={{margin:"15px 0 10px 0px"}}>
                <span style={{color:"#007600", fontSize:"18px"}}><b>In stock.</b></span>
                </div>
                <div className="" style={{margin:"0 0 10px 0px"}}>
                <span style={{ fontSize:"14px"}}>Sold by Appario Retail Private Ltd and<span style={{color:"#007600"}}>Fulfilled by Amazon.</span></span>
                </div>
                <button className='btn1' onClick={()=> send(data)}>Add to cart</button>
                <button className='btn2'>Buy now</button>
                <span style={{color:"#007600"}}> Secure transaction</span>
                <div className="" style={{margin:"10px 0 0 3px"}}>
                    <input type="checkbox" />
                    <span style={{margin:"0 0 0px 5px"}} >Add gift options</span>
                </div>
            </div>
            

        </div>

        </div>
        <hr style={{width:"80vw", marginLeft:"200px",marginBottom:"10px"}} />
        <hr style={{width:"80vw", marginLeft:"200px"}} />

        <div className="question">
            <span className='q'><b>Have a question?</b></span>
            <span className='f'>Find answers in product info, Q&As, reviews</span>
            <input className='i' type="text" placeholder='Type your question or keyword' />
        </div>

    </Cointainer>
  )
}

export default ItemPage;

const Cointainer= styled.div`
height: 200vh;
width: 100%;
background-color: white;
    .cointainer{
        display: flex;
    }

    .question{
        display: flex;
        flex-direction: column;
        margin: 100px 0 0 200px ;
        .q{
            margin: 0 0 10px 0;
            font-size: 24px;

        }
        .f{
            font-size: 12px;
            margin: 0 0 10px 0;
        }
        .i{
            height:30px;
            width:800px;
        }
    }

    .itemData{
        margin-top: 100px;
        margin-left: 25px;
        margin-right: 25px;
       // height:1280px;
        width: 500px;
        //background-color: #5880008c;
            .heading{
                font-size: 24px;
                color: #0F1111;
            }
            .brand{
                text-decoration: none;
                color: #007185;
                cursore: pointer;
                font-size: 14px;
                //margin: 10px 0 0 7px;
            }
            .brand:hover {
                color: #C7511F;
                text-decoration: underline  #C7511F 1px;
            }
            .ac{
                background-color: #232F3E;
                color: white;
                width: 100px;
                display: flex;
                font-size: 12px;
               // align-items: center;
                justify-content: center;
                margin-right: 10px;
                padding: 3px;
            }
            .acl{
                display: flex;
                font-size: 12px;
                margin-bottom: 10px;
            }
            .price{
                margin: 8px 0 0 0 ;
            }
            .prePrice{
                font-size: 12px;
                margin: 0px 0 5px 0 ;
            }
            .offers{
                //background-color: green;
               // height:200px;
                border-radius: 5px;
                border: 1px solid #8b8d8d57;
                margin: 30px 0 ;
            }
            .icons{
                display: flex;
                justify-content:center;
                margin: 5px 0 20px 0;
                span{
                    font-size: 12px;
                    margin: 0 5px;
                    color: #007185;
                }
                img{
                    height: 40px;
                    width: 40px;
                }
            }
            .itemD{
                margin: 20px 0;
                font-size: 14px;
                .is{
                    display: flex;
                    //align-items: center;
                }
            }
            .aboutItems{
                margin: 20px 0;
                ul{
                    list-style-type: square;
                }

            }
            

    }
    .buyDiv{
        margin-top: 100px;
        width: 250px;
        height:500px;
        border-radius: 5px;
        border: 1px solid #8b8d8d57;
            .data{
               // background-color: green;
                height: 470px;
                width: 220px;
                margin: 15px 15px;
                    .btn1{
                        background-color:#FFD814;
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        width:204px;
                        height: 29px;
                        border-radius: 20px;
                        border: none;
                        margin: 10px 0;
                        cursor: pointer;

                    }
                    .btn1:hover{
                        background-color: #f1c900;
                    }
                    .btn2{
                        background-color: #FFA41C ;
                        display:flex;
                        align-items: center;
                        justify-content: center;
                        width:204px;
                        height: 29px;
                        border-radius: 20px;
                        border: none;
                        margin: 10px 0;
                        cursor: pointer;
                    }
                    .btn2:hover{
                        background-color: #FF8F00;
                        
                    }
            }

    }

`

const ItemImg = styled.div`

margin-top: 100px;
margin-left: 200px;
//background-color: green;
max-height: 710px;
width: 720px;
display: flex;
object-fit: contain;
    .smallimg{
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        margin-bottom: 10px;
        img{
            max-width: 40px;
            border: 1px solid black;
            margin-bottom: 10px;
        }
    }
    


`