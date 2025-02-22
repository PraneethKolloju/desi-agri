import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// const API = axios.create({ baseURL: process.env.REACT_APP_API });


API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// export const fetchOrders = () => API.get("/order");
// export const placeOrder = (newOrder) => API.post("/order", newOrder);

// export const updateOrder = (id, updatedOrder) =>
//   API.patch(`/order/${id}`, updatedOrder);

// export const deleteOrder = (id) => API.delete(`/order/${id}`);

export const signIn = (formData) => API.post("/admin/signin", formData);

export const signUp = (formData) => API.post("/admin/signup", formData);

export const resetPassword = (formData) =>
  API.post("/users/resetpassword", formData);

export const addProduct = (details) => API.post("/admin/addproduct", details);

