<template>
  <div class="card text-center mt-4" v-for="coshop in coshops" :key ="coshop.id">
  <div class="card-header">Detail Coshops</div>
  <div class="card-body">
    <h5 class="card-title">{{coshop.nama}}</h5>
    <p class="card-text">{{coshop.image}}</p>
    <p class="card-text">{{coshop.size}}</p>
     <p class="card-text">{{coshop.harga}}</p>
    <p class="card-text">{{coshop.groups.name}}</p>
  </div>
  <div class="card-footer">
   <router-link
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
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() { 
    
    let coshop =ref([]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      axios
        .get(` http://127.0.0.1:8000/api/coshops/${route.params.id}`)
        .then((Response) => {
          console.log(Response.data.data.nama);
          coshop.value = Response.data.data;
         
        })
        .catch((error) => {
          console.log(error.Response.data);
        });
    });
   function coshopDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/coshops/${id}`)
        .then(() => {
          router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    return {
      coshop,
      router,
      coshopDelete,
      route,
    };
  },
};
</script>

<style>
</style>