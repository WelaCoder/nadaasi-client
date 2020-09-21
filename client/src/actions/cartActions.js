import { ADD_TO_CART, DELETE_ITEM_FROM_CART, SET_TOAST, UPDATE_QUANTITY } from "./types";
import uuid from 'react-uuid'
// get admin
export const addtoStorage = (choosenProduct, product) => async (dispatch) => {
    try {
        if (choosenProduct.size == "Custom") {
            if (
                choosenProduct.neck == null ||
                choosenProduct.overBust == null ||
                choosenProduct.bust == null ||
                choosenProduct.neck == null ||
                choosenProduct.hip == null ||
                choosenProduct.waistToAboveKnee == null ||
                choosenProduct.shoulderToWaist == null ||
                choosenProduct.vNeckCut == null ||
                choosenProduct.wrist == null ||
                choosenProduct.foreArm == null ||
                choosenProduct.bicep == null ||
                choosenProduct.armHole == null ||
                choosenProduct.shoulderSeam == null ||
                choosenProduct.armLength == null ||
                choosenProduct.aboveKneeToAnkle == null ||
                choosenProduct.neckToAboveHeel == null ||
                choosenProduct.neckToHeel == null ||
                choosenProduct.hips == null ||
                choosenProduct.waist == null ||
                choosenProduct.underBust == null
            ) {
                return dispatch({
                    type: SET_TOAST,
                    payload: {
                        type: "error",
                        message: "Please enter remaining values for custom size",
                    },
                });
            }
        }



        let cart = localStorage.getItem('cart');
        cart = JSON.parse(cart);
        if (cart == null) {
            cart = []
        } else {
            cart = cart.cart;
        }
        cart.push({ _id: uuid(), ...choosenProduct, details: product, product, });
        localStorage.setItem('cart', JSON.stringify({ 'cart': cart }));
        dispatch({
            type: ADD_TO_CART,
            payload: cart[cart.length - 1],
        });
    } catch (error) {
        console.log(error);
        // toast.error(JSON.stringify(error));
    }
};



export const updateLocalCartCount = (cartId, count) => async (dispatch) => {
    try {
        console.log(cartId);
        let cart = localStorage.getItem('cart');
        cart = JSON.parse(cart);
        if (cart == null) {
            cart = []
        } else {
            cart = cart.cart;
        }
        let cartitem = null;
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            if (element._id == cartId) {
                cartitem = index;
                break;
            }
        }
        if (cartitem != null) {
            cart[cartitem].quantity = count;
            dispatch({
                type: UPDATE_QUANTITY,
                payload: cart[cartitem],
            });
        }
    } catch (error) {
        console.log(error);
    }
};



export const deleteItemfromLocalCart = (id) => async (dispatch) => {
    try {

        let cart = localStorage.getItem('cart');
        cart = JSON.parse(cart);
        if (cart == null) {
            cart = []
        } else {
            cart = cart.cart;
        }
        let cartitem = null;
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            if (element._id == id) {
                cartitem = index;
                break;
            }
        }
        if (cartitem != null) {

            dispatch({
                type: DELETE_ITEM_FROM_CART,
                payload: cart[cartitem],
            });

        }


    } catch (error) {
        console.log(error);
    }
};