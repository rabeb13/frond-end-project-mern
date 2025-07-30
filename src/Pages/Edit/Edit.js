import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editProduct, getOneProduct } from "../../JS/Actions/Product";

const Edit = () => {
	const dispatch = useDispatch();
	const [newProduct, setNewProduct] = useState({});
	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};
	const productToGet = useSelector(
		(state) => state.productReducer.productToGet
	);
	const match = useMatch("/edit/:id");
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getOneProduct(match.params.id));
	});
	const handleEdit = () => {
		dispatch(editProduct(match.params.id, newProduct));
		navigate(-1);
	};
	return (
		<div>
			<h2>Edit Product</h2>
			<div>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					placeholder={`${productToGet.name}`}
					name='name'
					value={newProduct.name}
					onChange={handleChange}
				/>
				<Form.Label>Description</Form.Label>
				<Form.Control
					type='text'
					placeholder={`${productToGet.description}`}
					name='description'
					value={newProduct.description}
					onChange={handleChange}
				/>
				<Form.Label>Price</Form.Label>
				<Form.Control
					type='text'
					placeholder={`${productToGet.price}`}
					name='price'
					value={newProduct.price}
					onChange={handleChange}
				/>
				<Link to='/products'>
					<Button variant='primary' type='submit' onClick={handleEdit}>
						Submit
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Edit;