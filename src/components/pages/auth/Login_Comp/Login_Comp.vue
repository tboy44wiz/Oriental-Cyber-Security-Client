<template>
    <section class="Login_Comp">
      <SectionTitle_Comp  :title="title" :subTitle="subTitle" />

      <form class="admin-login__form">
        <input type="text" name="email"
               onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
               class="input__box email__input" placeholder="Email" required
        >
        <input type="text" name="password"
               onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"
               class="input__box password__input" placeholder="Password" required
        >

        <p>Forgot password? <router-link to="#">Reset now</router-link></p>

        <button class="admin-login__button">Login</button>

        <p class="dont-have--account">Don't have an account? <span @click="handleShowSignupForm">Signup</span></p>
      </form>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import store from "@/store";

  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  export default defineComponent({
    name: 'Login_Comp' as string,

    components: {
      SectionTitle_Comp
    },

    data() {
      return {
        title: "Login" as string,
        subTitle: "All fields are required." as string,
        loginUrl: this.$route.path,
      };
    },

    methods: {
      handleShowSignupForm() {
        store.commit('handleShowSignupForm');
        this.$router.push('/admin/signup');
      },
    }
  });
</script>


<style lang="scss" scoped>
  @import "Login_Comp";
</style>