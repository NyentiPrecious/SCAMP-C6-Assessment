import React from 'react'
import './App.css'



function Mall() {
  return (
  
        <div class='Cart-Container'>

<div class="topnav">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about" class="split">Help</a>
</div>


             <div  class='Header'>

    {/* <h1 class='Heading'>Shopping Cart</h1>
    <h5 class='Action'>Remove all</h5> */}


</div>
    
    <div class='image-box'>
hhhhhhhhhhhhhhhhhhhhhhh           
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
                  backgroundColor: 'blue' }} >50%</div>
                
                </div>  
                <div class='save'>$250,00</div>

            <div class='checkout'>
            <div class='counter'>
            
            <div class='btn'>+</div>
            <div class='count'>2</div>
            <div class='btn'>-</div>
            </div>  

<button class='button'>Checkout</button>

</div>
</div>   
       


        </div>
  )
}

export default Mall