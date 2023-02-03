<template>
  <section class="Auth">
    <Login_Comp v-show="showLoginForm" />
    <SignUp_Comp v-show="showSignupForm" />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import store from "@/store";

  import Login_Comp from "@/components/pages/auth/Login_Comp/Login_Comp.vue";
  import SignUp_Comp from "@/components/pages/auth/SignUp_Comp/SignUp_Comp.vue";

  export default defineComponent({
    name: "Auth" as string,

    components: {
      Login_Comp,
      SignUp_Comp,
    },

    data() {
      return {};
    },

    computed: {
      showLoginForm() {
        return store.state.showLoginForm;
      },
      showSignupForm() {
        return store.state.showSignupForm;
      }
    },
  });
</script>


<style lang="scss" scoped>
  @import "src/assets/styles/GlobalStyle";

  .Auth {
    height: auto;
    width: $fullWidth;
    margin-top: 20px;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  };

  @media screen and (max-width: 680px) {
    .Auth {
      margin-top: 20px;
    };
  };
</style>