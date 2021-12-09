<template>
    <section class="RegistrationSteps_Comp">
        <div class="container">
          <SectionTitle_Comp :title="title" :subTitle="subTitle" />

          <div class="row">
            <div class="col-md-6 phase-one-reg__wrapper">
              <h2 class="phase-one__title">Phase One</h2>
              <p>To register, send the following:</p>
              <ul>
                <li>Your full names, Phone number, Email address.</li>
                <li>Institution, Course of study, Current level of education.</li>
              </ul>
              by Email to <strong>info@foretrustgroup.com</strong> or WhatsApp / Text to <strong>08033034250</strong>.
            </div>

            <div class="col-md-6 ps-md-4 phase-two-reg__wrapper">
              <h2 class="phase-two__title">Phase Two</h2>
              <p>To register, use the button below:</p>

              <router-link to="/register">
                <button class="proceed__button">Proceed To Registration</button>
              </router-link>
            </div>
          </div>
        </div>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  export default defineComponent({
    name: 'RegistrationSteps_Comp',

    components: {
      SectionTitle_Comp
    },

    data() {
      return {
        title: "Registration Steps",
        subTitle: "Listed below are steps for registering for any of the two phases."
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "RegistrationSteps_Comp";
</style>
