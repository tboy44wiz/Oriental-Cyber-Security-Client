<template>
  <div class="Register">
    <RegistrationForm_Comp />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import RegistrationForm_Comp from "@/components/pages/register/RegistrationForm_Comp/RegistrationForm_Comp.vue";

  export default defineComponent({
    name: 'Register',

    components: {
      RegistrationForm_Comp,
    },
  });
</script>


<style lang="scss" scoped>
  @import "src/assets/styles/GlobalStyle";

  .Register {
    height: auto;
    width: $fullWidth;
    margin-top: 70px;
    padding: 30px 0 60px 0;
  };
</style>