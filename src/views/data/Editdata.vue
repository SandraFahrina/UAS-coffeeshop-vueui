<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit Category</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="coshop.name"
          />
          <div class="alert alert-danger" v-if="validation.name">
            {{ validation.name[0] }}
          </div>
        </div>
        
         <div class="col-6">
     <label for="inputAddress" class="form-label">Coshop category</label>
  <select class="form-select" aria-label="Default select example" v-model="coshop.data_id">
 
  <option v-for="d in data" :key="d.id" :value="d.id">{{ d.name }}</option>

</select>
 </div> 

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const coshop = reactive({
      nama: "",
      size: "",
      image: "",
      data_id: "",
    });

    let data = ref([]);
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
        .get(` http://127.0.0.1:8000/api/coshops/${route.params.id}/edit`)
        .then((Response) => {
          console.log(Response.data.data.nama);

          coshop.nama = Response.data.data.nama;
          coshop.size = Response.data.data.size;
          coshop.image = Response.data.data.image;
          coshop.data_id = Response.data.data.data_id;
        })
        .catch((error) => {
          console.log(error.Response.data);
        });

        axios
      .get("http://127.0.0.1:8000/api/data")
      .then((response) => {
       data.value = response.data.data;
       console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    });

    function update() {
      let nama = coshop.nama;
      let size = coshop.size;
      let image = coshop.image;
      let data_id = coshop.data_id;

      axios
        .put(` http://127.0.0.1:8000/api/coshops/${route.params.id}`, {
          nama: nama,
          size: size,
          image: image,
          data_id:data_id,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      coshop,
      validation,
      router,
      update,
      route,
      data,
    };
  },
};
</script>