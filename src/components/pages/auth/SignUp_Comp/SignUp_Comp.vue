<template>
    <section class="SignUp_Comp">
      <SectionTitle_Comp  :title="title" :subTitle="subTitle" />

      <form @submit.prevent="" class="admin-signup__form">
        <input type="text" name="fullName"
               onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'"
               class="input__box full-name__input" placeholder="Full Name" required
        >
        <input type="text" name="email"
               onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
               class="input__box email__input" placeholder="Email" required
        >
        <input type="text" name="password"
               onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"
               class="input__box password__input" placeholder="Password" required
        >

        <button class="admin-signup__button">Signup</button>

        <p class="have--account">Already have an account? <span @click="handleShowLoginForm">Login</span></p>
      </form>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import store from "@/store";

  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  export default defineComponent({
    name: 'Signup_comp' as string,

    components: {
      SectionTitle_Comp
    },

    data() {
      return {
        title: "SignUp" as string,
        subTitle: "All fields are required." as string,
        signupUrl: this.$route.path
      };
    },

    methods: {
      handleShowLoginForm() {
        store.commit('handleShowLoginForm');
        this.$router.push('/admin/login');
      }
    }
  });
</script>


<style lang="scss" scoped>
  @import "SignUp_Comp";
</style>