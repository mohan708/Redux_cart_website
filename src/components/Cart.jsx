import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Card,Button } from 'react-bootstrap'
import {remove} from '../store/CartSLice'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const RemoveShoppingCart = (id)=>{
    dispatch(remove(id))
  }

  const cards = products.map(product =>(
    <div className='col-md-3 col-sm-6 my-2' key={product.id} >
      <Card style={{width:'18rem'}} className='h-100'>  
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
      <Button variant="primary" onClick={()=> RemoveShoppingCart(product.id)}>Remove Item</Button>
      </Card.Footer>
    </Card>
    </div>
  ))

  return (
    <>
    <div className='row'>
      
        {cards}
      
    </div>
    </>
  )
}

export default Cart