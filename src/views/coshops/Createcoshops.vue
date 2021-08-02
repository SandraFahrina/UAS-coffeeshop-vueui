<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Coshops</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="coshop.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-6">
          <label for="inputAddress" class="form-label">image</label>
          <input
            type="file"
            class="form-control"
            id="inputAddress"
           v-on="coshop.image"
          />
          <div class="alert alert-danger" v-if="validation.image">
            {{ validation.image[0] }}
          </div>
        </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Size</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="coshop.size"/>
    <div class="alert alert-danger" v-if="validation.size">
        {{ validation.size[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Harga</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="coshop.harga" />
    <div class="alert alert-danger" v-if="validation.harga">
        {{ validation.harga[0] }}
      </div>
  </div>
  <div class="col-6">
     <label for="inputAddress" class="form-label">Coshops category</label>
  <select class="form-select" aria-label="Default select example" v-model="coshop.data_id">
 
  <option v-for="d in data" :key="d.id" :value="d.id">{{ d.name }}</option>

</select>
 </div> 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { reactive, ref, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
  setup() {
    const coshop = reactive({
      nama: '',
      image: '',
      size: '',
      harga: '',
      data_id: '',
    });

    let data = ref([]);
    const validation = ref([]);
    const router = useRouter();

    onMounted(()=>{
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

    function store(){
      let nama = coshop.nama;
      let image = coshop.image;
      let size = coshop.size;
      let harga = coshop.harga;
      let data_id = coshop.data_id;

      axios.post("http://127.0.0.1:8000/api/coshops", {
        nama: nama,
        image: image,
        size: size,
        harga: harga,
        data_id : data_id,
      })
      .then(() => {
        router.push({
          name:'Home',
        });
      })
      .catch(error => {
        validation.value = error.response.data;
      });
    }
    return {
      coshop,
      validation,
      router, 
      store,
      data,
    }
  },
}
</script>