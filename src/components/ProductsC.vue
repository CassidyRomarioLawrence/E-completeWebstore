<template>
    <div class="container-fluid">
      <div class="row">
        <section id="shop"></section>
        <section id="the-sneakers">
          <div class="row">
            <div class="col-sm-3">
              <h2>FILTER BY</h2>
            </div>
            <div class="col-sm-9">
              <div class="row">
                <h5 class="mb-5">SORT BY</h5>
                <div v-for="(product, index) in products" :key="index" class="col-md-3 mb-4">
                  <div class="card" style="width: 14rem;">
                    <img :src="product.prodImage[0]" class="card-img-top" alt="Product Image">
                    <div class="card-body d-flex flex-column">
                      <h6 class="card-title">{{ product.prodName }}</h6>
                      <p class="card-text">R {{ product.prodPrice }}</p>
                      <div class="mt-auto">
                        <router-link :to="{ name: 'single', params: { id: index } }" class="btn">View</router-link>
                        <a href="#" class="btn" @click="addToCart(product)"><i class="bi bi-bag"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { products } from "@/products";
  
  export default {
    data() {
      return {
        products: products
      };
    },
    methods: {
      addToCart(product) {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    }
  };
  </script>
  
  <style scoped>
  #shop {
    background-image: url(https://i.postimg.cc/8PfBwGLZ/glodi-miessi-ushz-Bu-B-OYY-unsplash.jpg);
    min-height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: local;
  }
  
  h2 {
    font-weight: bold;
  }
  
  #the-sneakers {
    margin-top: 40px;
  }
  </style>
  