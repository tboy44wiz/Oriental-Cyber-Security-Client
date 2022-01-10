<template>
  <div class="Gallery">
    <Gallery_Comp />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Gallery_Comp from "@/components/pages/gallery/Gallery_Comp/Gallery_Comp.vue";

  export default defineComponent({
    name: "Gallery" as string,

    components: {
      Gallery_Comp
    },

  });
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/GlobalStyle";
  .Gallery {
    height: auto;
    width: $fullWidth;
    margin-top: 50px;
    padding: 30px 0 60px 0;
  };

  @media screen and (max-width: 680px) {
    .Gallery {
      margin-top: 20px;
    };
  }
</style>