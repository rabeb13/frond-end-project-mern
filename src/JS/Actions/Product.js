import axios from "axios";
import {
    GET_PRODUCT,
    FAIL_PRODUCT,
    LOAD_PRODUCT,
    SUCC_PRODUCT,
} from "../ActionsType/Product";


// get all products
export const getProducts = () => async (dispatch) => {
    dispatch({ type : LOAD_PRODUCT });
    try {
        let result = await axios.get("/api/product/getProducts");
        dispatch({ type: SUCC_PRODUCT, payload: result.data });
    } catch (error) {
        dispatch({
            type: FAIL_PRODUCT, payload: error.response });
        };
    }

    // add product
export const addProduct = (newProduct) => async (dispatch) => {
	try {
		const config = {
			headers: {
				authorization: localStorage.getItem("token"),
			},
		};
		await axios.post("/api/product/addproduct", newProduct, config);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.response });
	}
};

  // delete product
export const deleteProduct = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/product/${id}`);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.response });
	}
}
// edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
	try {
		await axios.put(`/api/product/${id}`, newProduct);
		dispatch(getProducts());
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.response });
	}
};

// get one product
export const getOneProduct = (id) => async (dispatch) => {
	dispatch({ type: LOAD_PRODUCT });
	try {
		let result = await axios.get(`/api/product/${id}`);
		dispatch({ type: GET_PRODUCT, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_PRODUCT, payload: error.response });
	}
};