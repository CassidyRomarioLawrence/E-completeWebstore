<template>
    <section id="banner-slider">
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src="https://i.postimg.cc/DyCTqm9b/grailify-APL5p-Anz-u-A-unsplash.jpg" alt="...">
                    <div class="carousel-caption">
                        <h3>Image 1</h3>
                        <p>This is the first image.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="https://i.postimg.cc/8zHNjjt3/joseph-barrientos-e-BW4-S-S9-Dt-Q-unsplash.jpg" alt="...">
                    <div class="carousel-caption">
                        <h3>Image 2</h3>
                        <p>This is the first image.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="https://i.postimg.cc/Xq5qB4zP/hipkicks-AYIe-SFWh-EB8-unsplash.jpg" alt="...">
                    <div class="carousel-caption">
                        <h3>Image 3</h3>
                        <p>This is the first image.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    <section id="home-content">
        <div class="container title">
            <div class="row">
                <h1>Welcome To SneakPeak .</h1>
                <h4>Home of Exclusive Kicks</h4>
            </div>
        </div>
        <div class="container brands py-4">
            <div class="row">
                <div class="col-sm-6 adidas">
                    <h4>Adidas Collection</h4>
                </div>
                <div class="col-sm-6 vans">
                    <h4>Vans Collection</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 nike">
                    <h4>Nike Collection</h4>
                </div>
                <div class="col-sm-4 jordans">
                    <h4>Jordan Collection</h4>
                </div>
                <div class="col-sm-4 new-balance">
                    <h4>New Balance Collection</h4>
                </div>
            </div>
        </div>
    </section>
    <section id="product-slider">
        <div class="container-fluid new-releases">
            <div class="row">
                <h2 class="my-3">New Releases</h2>

                <div id="carouselProducts" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
        <div v-for="(product, index) in products" :key="index" class="col-md-2">
          <div class="card" style="width: 18rem;">
            <img :src="product.prodImage[0]" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">{{ product.prodPrice }}</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


            </div>
        </div>
    </section>
</template>

<script>
import { products } from '@/products';

export default {
    data() {
        return {
            products: products
        }
    }
}
</script>

<style scoped>
h2 {
    font-weight: bold;
}

.carousel-item {
    width: 100vw;
    height: 60vh;
}

.carousel-item img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.title {
    padding: 30px;
    display: flex;
    justify-content: center;
}

.row h1 {
    font-weight: bold;
    font-size: 5rem;
}

.adidas,
.vans,
.nike,
.new-balance,
.jordans {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 40vh;
    border: 5px solid white;
    transition: transform ease 0.3s;
    cursor: pointer;
}

.adidas:hover,
.vans:hover,
.nike:hover,
.new-balance:hover,
.jordans:hover {
    transform: scale(1.1);
}

.adidas {
    background-image: url(https://i.postimg.cc/1zVmp33q/fachry-zella-devandra-b-NSd-Ik-CBJOs-unsplash.jpg);
}

.vans {
    background-image: url(https://i.postimg.cc/sxJBWggr/izz-danial-4-Ewm7-QQF-q4-unsplash.jpg);
}

.nike {
    background-image: url(https://i.postimg.cc/6pyNDWp8/sneakers123-6ha-Ngmw-VNMc-unsplash-1.jpg);
}

.jordans {
    background-image: url(https://i.postimg.cc/8PYmZZbr/albert-vincent-wu-F24c-C3-HK6-Rc-unsplash.jpg);
}

.new-balance {
    background-image: url(https://i.postimg.cc/K8r41z4v/maksim-larin-ezdrvz-A1h-Zw-unsplash.jpg);
}

.brands h4 {
    color: whitesmoke;
    padding-top: 5px;
}

.carousel-item .row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel-item .col-md-2 {
  flex: 0 0 calc(20% - 1rem);
  margin-right: 1rem;
  scroll-snap-align: start;
}

@media screen and (max-width: 768px) {
  .carousel-item .col-md-2 {
    flex: 0 0 calc(33.33% - 1rem);
  }
}

@media screen and (max-width: 576px) {
  .carousel-item .col-md-2 {
    flex: 0 0 calc(50% - 1rem);
  }
}


@media screen and (max-width: 530px) {
    .row h1 {
        font-size: 3rem;
    }
}</style>