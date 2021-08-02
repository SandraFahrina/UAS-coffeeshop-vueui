<template>
<div class="row">
  <div class="col-lg-4 mt-3" 
  v-for="(coshop, index) in coshops" :key="index">
  <div class="card-header"> {{coshop.nama}}
  </div>
  <div class="card">
  <div class="card-body">
    <p class="card-text">{{coshop.image}}</p>
    <h5 class="card-title">{{coshop.size}}</h5>
    <p class="card-text">{{coshop.harga}}</p>
    <p class="card-text">{{coshop.data.name}}</p>
    
  </div>
  <div class="card-footer text-muted">
           <center> <router-link
              class="btn btn-success"
              :to="{ name: 'Editcoshops', params: { id: coshop.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="coshopDelete(coshop.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
            </center>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["coshops"],
}
</script>

<style>

</style>