import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DLT } from './redux/actions/action';

function Cart() {
    let subtotal=0;
    const dispatch = useDispatch();
    const getdata = useSelector((state)=> state.cartreducer.carts);

    const remove = (e)=>{
        dispatch(DLT(e));
    }



  return (
    <Container>
        <div className="product">
            <div className="in">
                <div className="" style={{fontSize:"28px", marginBottom:"15px"}}>
                    <div className="" style={{display:"flex", justifyContent:"space-between"}}>
                <span className='span' >Shopping Cart</span>
                <span style={{fontSize:"14px", margin:"20px 35px 0 0"}}>Price</span>
                </div>
                </div>
                <hr style={{width:"100%"}} />

                {
                    getdata.map((cl,n)=>{
                        subtotal = (subtotal+cl.newprice);
                        console.log(cl.newprice);
                        return (<>
                          <div className="item">
                   <img className='img' src={cl.image.img1} alt="" />
                    <div className="data">
                        <div className="" style={{display:"flex"}}>
                        <Link style={{cursor:'pointer',textDecoration:"none",color:"#0f1111"}} to={`/item?id=${cl._id}`}><span>
                            {cl.heading}
                        </span>
                        </Link>
                        <span style={{minWidth:"80px" , marginLeft:"40px"}}>₹{cl.newprice}.00</span>
                        </div>
                        <span style={{color:"#007600", fontSize:"12px",margin:"7px 0"}}>In stock</span>
                        <span style={{color:"#565959", fontSize:"12px"}}>Eligible for FREE Shipping</span>
                        <span style={{width:"66px", margin:"3px 0"}}><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></span>
                        <div className="">
                            <input type="checkbox" style={{ marginRight:"5px"}} />
                            <span style={{ fontSize:"12px"}}>This will be a giftThis is a gift <a className='link' href="">Learn more</a></span>
                        </div>
                        <div style={{ fontSize:"12px"}} className="">
                        <span style={{color:"#0f1111"}}><b>Colour: </b></span>
                        <span style={{ marginLeft:"px"}}>{cl.aboutdata.Colour}</span>
                        </div>
                        <div style={{ fontSize:"12px"}} className="">
                        <span style={{color:"#0f1111"}}><b>Pattern name: </b></span>
                        <span style={{ marginLeft:"px"}}>Wireless Mouse</span>
                        </div>
                        <div className="">
                        <select name="cars" id="cars" style={{ marginRight:"10px"}}>
                            <option value="1" placeholder='Qty'>1</option>      
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                        </select>|

                        <span className='link' style={{margin:"0 8px"}}><button className='link' style={{border:"none", backgroundColor:"transparent"}} onClick={()=> remove(cl._id)}>Delete</button></span>|
                        <span className='link' style={{margin:"0 8px"}}>Save for later</span>|
                        <span className='link' style={{margin:"0 8px"}}>See more like this</span>
                       

                      
                        </div>
                </div>
                </div>
                <hr style={{width:"100%"}} />
                        
                        </>)
                    })
                }
              
                <div className="" style={{fontSize:"18px", margin:"5px 0 20px 1250px"}}>
                <span>
                Subtotal ({getdata.length} item):   {subtotal}.00
                </span>
                </div>
            </div>

        </div>    

        <div className="price">
        <div className="in" style={{display:"flex", flexDirection:"column"}}>
            <span style={{fontSize:"12px"}}>Your order is eligible for FREE Delivery. Select this option at checkout. Details</span>
            <div className="" style={{margin:"15px 0 8px 0"}}>
            <span style={{fontSize:"18px"}}>Subtotal ({getdata.length} items):</span>
            <span> ₹{subtotal}.00</span>
            </div>
            <div className="">
                            <input type="checkbox" style={{ marginRight:"5px"}} />
                            <span style={{ fontSize:"12px"}}>This will be a giftThis is a gift <a className='link' href="">Learn more</a></span>
            </div>
            <button className='btn2'>Buy now</button>

        </div>
        </div>
    </Container>
  )
}

export default Cart;


const Container = styled.div`
display: flex;

    .product{
        width: 1550px;
        //height: 350px;
        background-color: white;
        margin: 30px 20px 70px 20px;
            .in{
                margin: 25px 20px;
                .item{
                    display: flex;
                    .img{
                        min-width:180px;
                        max-width:181px;
                        max-height:180px;
                    }
                    .data{
                        margin: 10px 0;
                        display: flex;
                        flex-direction: column;

                        .link{
                            text-decoration: none;
                            color: #007185;
                            cursore: pointer;
                            font-size: 12px;
                            //margin: 10px 0 0 7px;
                            cursor: pointer;
                        }
                        .link:hover {
                            color: #C7511F;
                            text-decoration: underline  #C7511F 1px;
                        }
                    }
                }
            }
    }
    .price{
        width: 320px;
        height: 250px;
        background-color: white;
        margin: 30px 25px 30px 5px;
        .in{
            padding: 15px 30px 45px 30px;

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