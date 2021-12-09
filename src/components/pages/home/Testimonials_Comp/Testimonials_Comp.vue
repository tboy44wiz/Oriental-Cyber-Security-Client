<template>
    <section class="Testimonials_Comp">
      <div class="container">
        <SectionTitle_Comp :title="title" :subTitle="subTitle" />
      </div>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  export default defineComponent({
    name: 'Testimonials_Comp',

    components: {
      SectionTitle_Comp
    },

    data() {
      return {
        title: "Testimonials",
        subTitle: "Take a look at the testimonies of our successful students."
      };
    }
  });
</script>


<style lang="scss" scoped>
  @import "Testimonials_Comp";
</style>