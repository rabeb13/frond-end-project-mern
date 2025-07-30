import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../JS/Actions/Product";
import { Link } from "react-router-dom";

const AddProduct = () => {
	const [newProduct, setNewProduct] = useState({});
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};
	const add = () => {
		dispatch(addProduct(newProduct));
	};
	return (
		<div>
			<h2>Add Product</h2>
			<div>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter name'
					name='name'
					value={newProduct.name}
					onChange={handleChange}
				/>
				<Form.Label>Description</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter description'
					name='description'
					value={newProduct.description}
					onChange={handleChange}
				/>
				<Form.Label>Price</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter price'
					name='price'
					value={newProduct.price}
					onChange={handleChange}
				/>
				<Link to='/products'>
					<Button variant='primary' type='submit' onClick={() => add()}>
						Submit
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default AddProduct;