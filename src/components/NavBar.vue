<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SneakPeak .</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">SneakPeak .</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" data-bs-dismiss="offcanvas">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-bs-dismiss="offcanvas">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-bs-dismiss="offcanvas"><i class="bi bi-bag-fill"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    background-color: transparent;

}
.navbar-brand,#offcanvasRightLabel{
    font-weight: bold;
}

.navbar-nav li{
    padding-left: 20px;

}
</style>