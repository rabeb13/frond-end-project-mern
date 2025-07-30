import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../JS/Actions/Product';



const ProductCard = ({ product }) => {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
				<Card.Body>
	<Card.Title>{product.name}</Card.Title>
	<Card.Text>{product.description}</Card.Text>
	<Card.Text>{product.price}</Card.Text>

	{ user && user._id === product.id_user ? (

	<Button variant='primary'
	onClick={() => dispatch(deleteProduct(product._id))}> Delete </Button> 
) : null } 



{ user && user._id === product.id_user ? (
	<Button variant='primary'
    onClick={() => navigate(`/edit/${product._id}`)}> Edit </Button>
) : null} 
				</Card.Body>
			</Card>

    </div>
  )
}

export default ProductCard;
