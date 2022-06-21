import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ItemPage() {
  return (
    <Cointainer>
        <div className="cointainer">
        <ItemImg>
            
        <div className="smallimg">
                <img src="https://m.media-amazon.com/images/I/21psCtgM5BL._SS40_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/41KKgUZQILL._SS40_.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/31yCCxd9cYL._SS40_.jpg" alt="" />
        </div>
            <img src="https://m.media-amazon.com/images/I/71gEuyRXIDL._SX679_.jpg" alt="" />
        </ItemImg>
        <div className="itemData">
            <span className="heading">HP X200 Wireless Mouse with 2.4 GHz Wireless connectivity, Adjustable DPI up to 1600, ambidextrous Design, and 18-Month Long Battery Life. 3-Years Warranty (6VY95AA)</span> <br />
            <Link className="brand" to=''><span >Visit the HP Store</span></Link> <br />
            <div className="acl">
            <div className="ac">
                <span>Amazon's</span>
                <span style={{color:'#F69931'}}>/Choice</span>
                
            </div>
            <span>for {`"hp wireless mouse"`}</span>
            </div>
            <hr />
            <div className="price">
                <span style={{color:"#CC0C39"}}>-33% </span>
                <span style={{fontSize:"28px"}} >₹500</span>
            </div>
            <div className="prePrice">
            <span>M.R.P:₹</span>
            <span style={{textDecoration:'line-through'}} >999.00</span>
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
                <span className='is'><b style={{marginRight:"60px"}}>Connectivity<br/>Technology</b><p>Wireless</p></span><br />
                <span className='is'><b style={{marginRight:"35px"}}>Recommended <br /> Uses For Product	</b><p>Office</p></span><br />
                <span className='is'><b style={{marginRight:"110px"}}>Brand</b><p>HP</p></span><br />
                <span className='is'><b style={{marginRight:"70px"}}>Compatible <br /> Devices</b><p>Compatible with HP PCs with available USB-A port.</p></span><br />
                <span className='is'><b style={{marginRight:"40px"}}>Special Feature</b><p>Wireless, Optical</p></span><br />
            </div><hr />

            <div className="aboutItems">
                <h2 style={{fontSize:"15px",marginBottom:"5px"}}>About this item</h2>
                <ul className='u'>
                    <li>Stay unbound, stay in control - enjoy lag-free 2.4GHz wireless connectivity on this durable mouse by HP with an 18-month long battery life.</li>
                    <li>Work at your pace by speeding up or slowing down tracking with adjustable DPI settings up to 1600 (800/1200/1600).</li>
                    <li>Work on your terms with an ambidextrous, contoured design suitable for both left and right-hand use.</li>
                    <li>Enjoy great compatibility across devices and on different operating systems - Windows 10, Windows 8, Windows 7, and MacOS 10.1 or higher.</li>
                    <li>In it for the long run - enjoy 3-years manufacturer warranty on the device from the date of purchase.</li>
                </ul>
            </div><hr />


        </div>
        </div>
        <hr style={{width:"80vw", marginLeft:"200px"}} />
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

    .itemData{
        margin-top: 100px;
        margin-left: 25px;
        height:1280px;
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

`

const ItemImg = styled.div`

margin-top: 100px;
margin-left: 200px;
//background-color: green;
max-height: 680px;
width: 720px;
display: flex;
object-fit: contain;
    .smallimg{
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        margin-bottom: 10px;
        img{

            border: 1px solid black;
            margin-bottom: 10px;
        }
    }


`