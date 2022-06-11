import React from 'react'
import './App.css'
import download from '../src/Assets/download.jpg';
import "bootstrap/dist/css/bootstrap.css"
import { FontDownload } from '@material-ui/icons';


function Mall() {
  return (
      <div className='container-fluid' >
  
        

<div class="topnav">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>

  
  <a class="split" > Your Account</a>|||
          <a class="split" href="cart"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a>

</div>
<div class='Cart-Container'>
            
<div  class='Header'>
    
    <div class='image-box'>
       
        <div className='big'> 
       <img style={{backroundSize:'cover' }} src={download} alt='cover' ></img>
         </div>
         <div style={{display:'flex', justifyContent:'space-between' }} className='sml'> 
       <img  style={{width:'50px', height:'60px' }} src={download} alt='cover' ></img>
       <img style={{width:'50px', height:'60px' }} src={download} alt='cover' ></img>
       <img style={{width:'50px', height:'60px'}} src={download} alt='cover' ></img>
         </div>
         </div>        
    <div class='Cart-Items'>


        <div class='about'>
        {/* <h3> Lets go for a <FaBeer />? <ShoppingCart/>  </h3>  */}
            <h6 style={{color:'orange'}} >Sneaker company</h6>
        <h1 class='title'>Fall Limited Edition Sneakers</h1>
        <p class='subtitle'>These low-profile sneakers are your perfect casual wear
        <br></br> companion. Featuring a durable rubber outer sole, they'll
         <br></br> withstand everything the weather can offer.  </p>
       
        </div>   
            <div class='prices'>
                <div class='amount'>$125.00</div>
                <div style={{
                 width: '40px',
                 height:'30px' ,
                  backgroundColor: 'grey' }} >50%</div>
                
                </div>  
                <div class='save'>$250,00</div>

            <div class='checkout'>
            <div class='counter'>
            
            <div class='btn'>-</div>
            <div class='count'>0</div>
            <div class='btn'>+</div>
            </div>  

<button class='button'>Add to Cart</button>
<button >Add to cart</button>

</div>

</div>

</div>      
        </div>
        </div>
  )
}

export default Mall