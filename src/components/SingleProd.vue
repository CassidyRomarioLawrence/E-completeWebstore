<template>
    <div class="container d-flex single-prod" v-if="selectedProduct">
      <div class="row align-items-center w-100">
        <div class="col-md-6 text-center">
          <img :src="selectedProduct.productImage[selectedImageIndex]" alt="Product Image">
          <div class="image-gallery">
            <img
              v-for="(image, index) in selectedProduct.productImage"
              :key="index"
              :src="image"
              :class="{ active: index === selectedImageIndex }"
              @click="changeImage(index)"
              alt="Product Image"
            >
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="my-3">{{ selectedProduct.prodName }}</h2>
          <h3 class="my-3">Price: R {{ selectedProduct.prodPrice }}</h3>
          <div class="select-container my-3">
            <label for="size"><h5>Size:</h5></label>
            <select id="size" v-model="selectedSize">
              <option v-for="size in selectedProduct.sizes" :key="size">{{ size }}</option>
            </select>
          </div>
          <div class="quantity-container my-3">
            <label for="quantity"><h5>Quantity:</h5></label>
            <div class="quantity-control">
              <button class="decrement-button" @click="decrementQuantity">-</button>
              <input type="number" id="quantity" v-model.number="selectedQuantity" min="1">
              <button class="increment-button" @click="incrementQuantity">+</button>
            </div>
          </div>
          <a href="#" class="btn btn-success" @click="addToCart(selectedProduct)">Add to cart <i class="bi bi-bag"></i></a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { products } from "@/products";
  
  export default {
    data() {
      return {
        selectedProduct: null,
        selectedSize: '',
        selectedQuantity: 1,
        selectedImageIndex: 0
      };
    },
    created() {
      const id = parseInt(this.$route.params.id);
      this.selectedProduct = products[id];
    },
    methods: {
      incrementQuantity() {
        this.selectedQuantity++;
      },
      decrementQuantity() {
        if (this.selectedQuantity > 1) {
          this.selectedQuantity--;
        }
      },
      changeImage(index) {
        this.selectedImageIndex = index;
      },
      addToCart(product) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
        alert("Added to cart");
      }
    }
  };
  </script>
  
  <style scoped>
  .single-prod {
    min-height: 90vh;
  }
  
  h2,h3,h5,h6 {
    font-weight: bold;
  }
  
  img {
    width: 25rem;
  }
  
  .image-gallery {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .image-gallery img {
    width: 5rem;
    cursor: pointer;
    margin: 0 5px;
  }
  
  .image-gallery img.active {
    border: 2px solid #000;
  }
  
  #size {
    margin-left: 10px;
  }
  
  .quantity-container {
    display: flex;
    align-items: center;
  }
  
  input {
    width: 30px;
    text-align: center;
  }
  
  .decrement-button,
  .increment-button {
    border: none;
    background-color: #ccc;
    cursor: pointer;
    margin: 0 5px;
  }
  </style>
  