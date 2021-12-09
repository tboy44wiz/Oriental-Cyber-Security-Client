<template>
  <div class="WhoWeAre_Comp">
    <!--  Who we are image and description  -->
    <section class="container">
      <SectionTitle_Comp :title="title" :subTitle="subTitle" />

      <div class="who-we-are__wrapper">

        <!--  Left Aside  -->
        <div class="security-training__image-and-proceed__button">
          <img :src="whoWeAreImage" class="img-fluid information-security-training__image" alt="Information_security_training_image" />

          <router-link to="/register">
            <button class="proceed__button mt-2 mt-md-4">Proceed To Registration</button>
          </router-link>
        </div>

        <!--  Left Aside  -->
        <p class="who-we-are__text paragraph-one">
          Oriental CyberSecurity Training and Initiative Programme is a program established and organized by a team of
          Nigerian Cyber Security experts based in Nigeria, Canada and Europe to deliver a first-hand training and
          mentorship programme on Information/Cyber security to all interested Nigerians who are ready to make a
          career in Cyber Security.
        </p>

        <p class="who-we-are__text paragraph-two">
          The core benefit is for the participants to acquire skills and to build professional networks that would
          them grow and build career in the field. At the completion of this programme, participants will get a
          certificate for the programme and would also be able to sit for any Cyber Security examinations of their
          choice.
        </p>

        <p class="who-we-are__text paragraph-three mt-0 mt-md-2 mt-lg-4">
          Our target candidates includes <strong>Serving NYSC members</strong>,
          <strong>Recent graduates, as well as Third and Final year student of Nigeria Universities and Polytechnics.</strong>,
          Preference will be given to Computer / Physical Science and Engineering.
          The programme will consists of <strong>Physical</strong> and <strong>Remote Meetings.</strong>
          The physical venue is at ForeTrust Digital Center Enugu on the scheduled days while those that are for remote
          will join via Zoom.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  //  Import Assets.
  import whoWeAreImage from '@/assets/images/information_security_training.png';

  export default defineComponent({
    name: 'WhoWeAre_Comp',

    components: {
      SectionTitle_Comp
    },

    data() {
      return {
        title: "Who We Are",
        subTitle: "Learn to know whom we are and what we do.",
        whoWeAreImage,
      };
    },

  });
</script>

<style lang="scss" scoped>
  @import "WhoWeAre_Comp";
</style>
