<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createcoshops"
      >Add Coshop</router-link
    >


<Cardcoshops :coshops="coshops"/>

  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardcoshops from "@/components/Cardcoshops.vue";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    Slider,
    Cardcoshops,
  },

  setup() {
    let coshops = ref([]);

    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/coshops')
        .then((Response) => {
          coshops.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })

    function coshopDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/coshops/${id}`)
        .then(() => {
          let z = this.coshops.map((coshops) => coshops.id).index(id);
          this.coshops.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      coshops,
      coshopDelete,
    };
  },
};
</script>
