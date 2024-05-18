import React, {useEffect} from 'react'
import  Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch,useSelector } from 'react-redux'
import {add} from '../store/CartSLice';
import { getProducts } from '../store/productSlice';

const Product = () => {
const dispatch = useDispatch()

const  products = useSelector( state => state.products.data);
const  status= useSelector( state => state.products.status);

useEffect(()=>{ 
    dispatch(getProducts())
},[])

if(status === 'loading')
  {
     return <p> Loading....</p>
  }

  if(status === 'error'){
    return <p>Something went wrong! try again later</p>
  }
 
  const addToCart = (product)=>{  
    dispatch(add(product))
}

  const cards = products.map((product) =>(
    <div className='col-md-3 col-sm-6 my-2'key={product.id}   >
      <Card style={{width:'18rem'}} key={product.id} className='h-100'>  
      <div className='text-center'>    
      <Card.Img variant="top" src={product.image} style={{width:"100px", height:'130px'}}/>
      </div> 
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR : {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="primary"  onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ))

  return (
   <>
   <h1>Product Dashboard</h1>
   
   <div className='row'>
     {cards} 
   </div>
   </>
  )
}

export default Product