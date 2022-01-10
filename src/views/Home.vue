<template>
  <div class="Home">
    <WhoWeAre_Comp />
    <ProgramPhases_Comp />
    <RegistrationSteps_Comp />
    <Testimonials_Comp />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import WhoWeAre_Comp from "@/components/pages/home/WhoWeAre_Comp/WhoWeAre_Comp.vue";
  import ProgramPhases_Comp from "@/components/pages/home/ProgramPhases_Comp/ProgramPhases_Comp.vue";
  import RegistrationSteps_Comp from "@/components/pages/home/RegistrationSteps_Comp/RegistrationSteps_Comp.vue";
  import Testimonials_Comp from "@/components/pages/home/Testimonials_Comp/Testimonials_Comp.vue";

  export default defineComponent({
    name: 'Home',

    components: {
      WhoWeAre_Comp,
      ProgramPhases_Comp,
      RegistrationSteps_Comp,
      Testimonials_Comp,
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/GlobalStyle";

  .Home {
    height: auto;
    width: $fullWidth;
    margin-top: 50px;
    padding-top: 30px;
  };

  @media screen and (max-width: 680px) {
    .Home {
      margin-top: 20px;
    };
  };
</style>
