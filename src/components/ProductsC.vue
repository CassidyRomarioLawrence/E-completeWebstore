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
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Category
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Nike" v-model="selectedBrands">
                      <label class="form-check-label">Nike</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Adidas" v-model="selectedBrands">
                      <label class="form-check-label">Adidas</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="New Balance" v-model="selectedBrands">
                      <label class="form-check-label">New Balance</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="Puma" v-model="selectedBrands">
                      <label class="form-check-label">Puma</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header py-2">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Price
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <label for="priceRange" class="form-label">Price Range</label>
                    <div class="d-flex justify-content-between">
                      <span>R {{ minPrice }}</span>
                      <span>R {{ maxPrice }}</span>
                    </div>
                    <input type="range" class="form-range" min="0" max="5000" id="priceRange" v-model="selectedPriceRange">
                  </div>
                </div>
              </div>
              <div class="accordion-item">
  <h2 class="accordion-header py-2">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Size
    </button>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div v-for="size in sizes" :key="size" class="form-check">
        <input class="form-check-input" type="checkbox" :value="size" v-model="selectedSizes">
        <label class="form-check-label">{{ size }}</label>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="row">
              <select class="form-select form-select-lg mb-3" v-model="sortOption" aria-label=".form-select-lg example">
                <option selected disabled value="">
                  <h2>SORT BY</h2>
                </option>
                <option value="priceLowToHigh">Price (Low to High)</option>
                <option value="priceHighToLow">Price (High to Low)</option>
                <option value="nameAZ">Name (A-Z)</option>
                <option value="nameZA">Name (Z-A)</option>
              </select>
              <div v-for="(product, index) in filteredProducts" :key="index" class="col-md-3 mb-4">
                <div class="card" style="width: 14rem;">
                  <img :src="product.productImage[0]" class="card-img-top" alt="Product Image">
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
    products: products,
    sortOption: "",
    selectedBrands: [],
    selectedPriceRange: 0,
    minPrice: 0,
    maxPrice: 5000,
    sizes: [3, 4, 5, 6, 7, 8, 9],
    selectedSizes: []
  };
},
computed: {
  filteredProducts() {
    let filtered = this.products;

    if (this.selectedBrands.length > 0) {
      filtered = filtered.filter(product => this.selectedBrands.includes(product.brand));
    }

    if (this.selectedPriceRange > 0) {
      filtered = filtered.filter(product => product.prodPrice >= this.selectedPriceRange);
    }

    if (this.selectedSizes.length > 0) {
      filtered = filtered.filter(product => this.selectedSizes.some(size => product.sizes.includes(size)));
    }

    if (this.sortOption === "priceLowToHigh") {
      filtered.sort((a, b) => a.prodPrice - b.prodPrice);
    } else if (this.sortOption === "priceHighToLow") {
      filtered.sort((a, b) => b.prodPrice - a.prodPrice);
    } else if (this.sortOption === "nameAZ") {
      filtered.sort((a, b) => a.prodName.localeCompare(b.prodName));
    } else if (this.sortOption === "nameZA") {
      filtered.sort((a, b) => b.prodName.localeCompare(a.prodName));
    }

    return filtered;
  },
},
  watch: {
    selectedPriceRange(value) {
      this.minPrice = 0;
      this.maxPrice = value;
    },
  },
  methods: {
    addToCart(product) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      alert("Add to cart");
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
}</style>
  