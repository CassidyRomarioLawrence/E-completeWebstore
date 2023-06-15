<template>
  <div class="container-fluid">
    <div class="row">
      <section id="shop"></section>
      <section id="the-sneakers">
        <div class="row justify-content-center">
          <div class="col-sm-3">
            <h2>FILTER BY</h2>
            <div class="accordion mt-4" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header py-2">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Category
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Nike">
                      <label class="form-check-label">Nike</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Adidas">
                      <label class="form-check-label">Adidas</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="New Balance">
                      <label class="form-check-label">New Balance</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Puma">
                      <label class="form-check-label">Puma</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header py-2">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Price
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="form-range">
                      <input type="range" class="form-range" min="0" max="1000" step="10">
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header py-2">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Size
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="3">
                      <label class="form-check-label">3</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="4">
                      <label class="form-check-label">4</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="5">
                      <label class="form-check-label">5</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="6">
                      <label class="form-check-label">6</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="7">
                      <label class="form-check-label">7</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="8">
                      <label class="form-check-label">8</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="9">
                      <label class="form-check-label">9</label>
                    </div>
                  </div>
                </div>
              </div>
</div>
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
  