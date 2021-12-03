<template>
  <div class="Home">
    <WhoWeAre_Comp />
    <ProgramPhases_Comp />
    <Registration_Comp />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import WhoWeAre_Comp from "@/components/pages/home/WhoWeAre_Comp/WhoWeAre_Comp.vue";
  import ProgramPhases_Comp from "@/components/pages/home/ProgramPhases_Comp/ProgramPhases_Comp.vue";
  import Registration_Comp from "@/components/pages/home/RegistrationSteps_Comp/RegistrationSteps_Comp.vue";

  export default defineComponent({
    name: 'Home',

    components: {
      WhoWeAre_Comp,
      ProgramPhases_Comp,
      Registration_Comp,
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/GlobalStyle";

  .Home {
    height: auto;
    width: $fullWidth;
    margin-top: 70px;
    padding: 30px 0 60px 0;
  };
</style>
