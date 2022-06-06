import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function Header() {
    let Data; 
  return (
          <Nav>
          {/* Logo */}
                <Link to='/'>
                    <Logo src='/img/amazon-logo.png' />
                </Link>
        {/* Search Box */}
                <HeaderSearch>
                     <input type="text" className="Search-box" />
                     <SearchIcon className='search-icon' />

                </HeaderSearch>
        {/* Menu Items */}
                <Menuitem>

                <Link className='link' to="/orders" >
                    <img className='flagicon' src="/img/flag.png" alt="" />
                </Link>


                <Link className='link' to="/login" >
                    <span className='span1'>{`Hello,${Data?Data.name:'Sign in'}`}</span>
                    <span className='span2'>Account&Lists</span>
                </Link>


                <Link className='link' to="/orders" >
                    <span className='span1'>Returns</span>
                    <span className='span2'>&Orders</span>
                </Link>


                <Link className='linkc' to="/cart" >
                    <span >
                    <AddShoppingCartOutlinedIcon className='cicon'/>
                    </span>
                    <span className='span1' >0</span>
                </Link>
                
                
                </Menuitem>
           


          </Nav>
  )
}

export default Header;


const Logo = styled.img`
height: 28px;
margin: 5px 20px 0 20px;
cursor: pointer;



`
const Nav = styled.div`
background-color: #131921;
height: 60px;
width:100vw;
display: flex;
align-items: center;
position: sticky;
top: 0;
z-index: 100;

`
const HeaderSearch = styled.div`
display: flex;
flex: 1;
    .Search-box{
        height:12px;
        padding: 10px;
        border: none;
        border-radius: 3px 0 0 3px;
        width: 100%;


    }
    .search-icon{
        background-color: #cd9042;
        padding: 4px;
        border-radius: 0 3px 3px 0;
        cursor: pointer;
    }
` 

const Menuitem = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
    .link{
        line-height: 1em;
        color:white;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        margin: 0 10px 0 10px;

        .span1{
            font-size: 14px;
          //  margin-top: 10px;
        }
        .span2{
            font-size: 18px;
            font-weight: 800;
        }
        .flagicon{
            height: 20px;
        }
    }
    .linkc{
        text-decoration: none;
        display: flex;
        aligh-items: center;
        color: white;
        margin-right: 20px;
            .cicon{
                font-size: 35px;
                color: #cd9042
            }
            .span1{
                margin-top: 1px;
                font-size: 20px;
                color: #bf7d11;
            }

    }

`