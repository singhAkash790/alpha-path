"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import testData from "../Data/test_data.json";

const CartContext = createContext();

const initialState = {
  radioData: [],
  isCookiesAllowed: false,
  isInputNotEmpty: false,
  uploadFormVisible: false,
  cartVisible: false,
  products: [],
  removedProducts: [],
  userData: {
    designation: "",
    name: "",
    phoneNumber: "",
    email: "",
    dob: "",
    age: 0,
    gender: "",
  },
  userAddress: {
    Address: "",
    pincode: "",
    city: "",
    state: "",
    homeCollectionDateTime: "",
  },
};

const updateCookiesAllowed = (isCookiesAllowed) => {};

const updateCookies = (products) => {
  const cookiesProducts = products.map(({ id, quantity }) => ({
    id,
    quantity,
  }));

  Cookies.set("cart", JSON.stringify(cookiesProducts), {
    expires: 365,
  });
  // console.log("This is the cookies product", cookiesProducts);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "REMOVE":
      const removedProduct = state.products.find(
        (product) => product.id === action.productId
      );
      if (removedProduct) {
        const updatedState = {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.productId
          ),
          removedProducts: [...state.removedProducts, removedProduct],
        };

        updateCookies(updatedState.products); // Update cookies immediately

        return updatedState;
      }
      return state;
    case "UNDO_REMOVE":
      const restoredProduct = state.removedProducts.find(
        (product) => product.id === action.productId
      );
      if (restoredProduct) {
        return {
          ...state,
          products: [...state.products, restoredProduct],
          removedProducts: state.removedProducts.filter(
            (product) => product.id !== action.productId
          ),
        };
      }
      return state;
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "TOGGLE_CART":
      return {
        ...state,
        cartVisible: !state.cartVisible,
      };
    case "TOGGLE_UPLOD_FORM":
      return {
        ...state,
        uploadFormVisible: !state.uploadFormVisible,
      };
    case "COOKIES_ALLOWING":
      return {
        ...state,
        isCookiesAllowed: action.payload,
      };
    case "TOOGLE_INPUT_DATA":
      return {
        ...state,
        isInputNotEmpty: action.payload,
      };
    case "INIT":
      return {
        ...state,
        products: action.products,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.userData,
        },
      };
    case "UPDATE_RADIO_DATA":
      return {
        ...state,
        radioData: action.radioData,
      };  
    case "UPDATE_USER_ADDRESS":
      return {
        ...state,
        userAddress: {
          ...state.userAddress,
          ...action.userAddress,
        },
      };

    default:
      return state;
  }
};

const GlobalDataProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedProducts = Cookies.get("cart");
    const savedUserData = Cookies.get("userData");
    const savedUserAddress = Cookies.get("userData");
    const savedCookiesAllowed = Cookies.get("isCookiesAllowed");

    if (savedCookiesAllowed !== undefined) {
      cartDispatch({
        type: "COOKIES_ALLOWING",
        payload: JSON.parse(savedCookiesAllowed),
      });
    }

    const fetchDataFromApi = async (savedProducts) => {
      try {
        const foundProducts = testData.test_data.filter((product) => {
          return savedProducts.some(
            (savedProduct) => savedProduct.id === product.id
          );
        });

        // console.log("found products", foundProducts);

        const saveCartProducts = foundProducts.map((product) => {
          const savedProduct = savedProducts.find((sp) => sp.id === product.id);
          const quantity = savedProduct ? savedProduct.quantity : 1;

          return {
            id: product.id,
            name: product.Test_Name,
            price: product.Test_Amount,
            dis_price: product.Discount_Amount,
            quantity: quantity,
            discount: (
              ((product.Test_Amount - product.Discount_Amount) /
                product.Test_Amount) *
                100 || 0
            ).toFixed(),
          };
        });

        cartDispatch({ type: "INIT", products: saveCartProducts });

        // console.log("Real-time data fetched from API:", saveCartProducts);
      } catch (error) {
        console.error("Error fetching real-time data:", error);
      }
    };

    if (savedProducts) {
      fetchDataFromApi(JSON.parse(savedProducts));
    }
    if (savedUserData) {
      cartDispatch({
        type: "UPDATE_USER_DATA",
        userData: JSON.parse(savedUserData),
      });
    }
    if (savedUserAddress) {
      cartDispatch({
        type: "UPDATE_USER_DATA",
        userData: JSON.parse(savedUserAddress),
      });
    }
  }, []);
  useEffect(() => {
    Cookies.set(
      "isCookiesAllowed",
      JSON.stringify(cartState.isCookiesAllowed),
      {
        expires: 365,
      }
    );

    // console.log("this is the cart state", cartState.isCookiesAllowed);
    // updateCookiesAllowed(cartState.isCookiesAllowed);
  }, [cartState.isCookiesAllowed]);

  // rest of your component code

  useEffect(() => {
    // const { isCookiesAllowed } = cartState;
    updateCookies(cartState.products);
    // if (isCookiesAllowed) {
    // }
  }, [cartState.products]);

  useEffect(() => {
    const { isCookiesAllowed } = cartState;
    if (isCookiesAllowed) {
      // updateCookies(cartState.products);
      Cookies.set("userData", JSON.stringify(cartState.userData), {
        expires: 365,
      });
    }
  }, [cartState.userData]);



  // this is for the data generation

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useData = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useData must be used within a GlobalDataProvider");
  }
  return context;
};

export { GlobalDataProvider, useData, updateCookies };
