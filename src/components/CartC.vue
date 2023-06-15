<template>
  <div class="container-fluid">
    <div class="row">
      <section id="cart"></section>
      <section id="cart-details">
        <div class="container">
          <div class="row my-3">
            <div class="col-sm-8">
              <div class="d-flex justify-content-between align-items-center">
                <h2>My Cart</h2>
                <a href="/products">Continue Shopping <i class="bi bi-arrow-right"></i></a>
              </div>
              <div v-if="cartItems.length === 0">
                <div class="container empty">
                  <div class="row">
                    <h2>No cart items</h2>
                  </div>
                </div>
              </div>
              <div v-else>
                <table class="table table-group-divider my-4">
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index">
              <td><img :src="item.productImage[0]" alt=""></td>
              <td>{{ item.prodName }}</td>
              <td>R {{ item.prodPrice }}</td>
              <td><button class="btn btn-danger" @click="removeFromCart(index)"><i class="bi bi-trash3"></i></button></td>
            </tr>
          </tbody>
        </table>
              </div>
            </div>
            <div class="col-sm-4">
              <h2>Order Summary</h2>
              <table class="table table-group-divider my-4">
                <tbody>
                  <tr>
                    <td>Subtotal:</td>
                    <td>R {{ subtotal }}</td>
                  </tr>
                  <tr>
                    <td>Shipping:</td>
                    <td>R 60</td>
                  </tr>
                  <tr class="total">
                    <td>Total:</td>
                    <td>R {{ total }}</td>
                  </tr>
                </tbody>
              </table>
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

      alert("Removed from cart")
    }
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
.total{
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

#cart {
  min-height: 30vh;
  background-image: url(https://i.postimg.cc/Yqqj1Bvx/joel-muniz-bd7ut7-YLEk-unsplash.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  width: 5rem;
}

#cart-details {
  min-height: 70vh;
}

.empty {
  min-height: 35vh;
  display: flex;
  align-items: center;
}
</style>
