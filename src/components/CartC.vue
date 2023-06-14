<template>
    <div class="container-fluid">
      <div class="row">
        <section id="cart"></section>
        <section id="cart-details">
          <div class="container">
            <div class="row my-3">
              <div class="col-sm-8">
                <h2>My Cart</h2>
                <div v-if="cartItems.length === 0">
                    <div class="container empty">
                        <div class="row">
                            <h2>No cart items</h2>
                        </div>
                    </div>
                </div>
                <div v-else>
                  <div v-for="(item, index) in cartItems" :key="index">
                    <img :src="item.prodImage[0]" alt="">
                    <p>{{ item.prodName }}</p>
                    <p>R {{ item.prodPrice }}</p>
                    <button @click="removeFromCart(index)">Remove</button>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <h4>Order Summary</h4>
                <h6 v-if="cartItems.length > 0">Subtotal: R {{ subtotal }}</h6>
                <h6>Shipping: R 60</h6>
                <h6 v-if="cartItems.length > 0">Total: R {{ total }}</h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: []
      };
    },
    mounted() {
      this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce((total, item) => total + item.prodPrice, 0);
      },
      total() {
        return this.subtotal + 60;
      }
    },
    methods: {
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      }
    }
  };
  </script>
  
  <style scoped>
  #cart {
    min-height: 50vh;
    background-image: url(https://i.postimg.cc/Yqqj1Bvx/joel-muniz-bd7ut7-YLEk-unsplash.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  img {
    width: 5rem;
  }
  
  #cart-details {
    min-height: 50vh;
  }

  .empty{
    min-height: 35vh;
    display: flex;
    align-items: center;
  }
  </style>
  