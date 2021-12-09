<template>
    <section class="ProgramPhases_Comp" @scroll.prevent="scrollHandle()">
      <!--<img :src="backgroundImage" class="background__image" alt="BackgroundImage">-->
      <div class="overlay"></div>
      <div class="container phase__wrapper">
        <SectionTitle_Comp :title="title" :subTitle="subTitle" />

        <!--  Phases One  -->
        <div class="row mb-5 d-flex align-items-center">
          <div class="col-md-5 text-center order-md-2">
            <img :src="phaseOneImage" class="img-fluid phase__image" alt="Information_security_training_image" />
          </div>

          <div class="col-md-7 order-md-1">
            <p class="phase__text">
              The first phase will be free of charge and everyone that satisfactorily participated will earn three
              certificates as follows:
            </p>
            <ol>
              <li>A certificate of participation issued by the organizers.</li>
              <li>A foreign certificates on <strong>Intro to Cyber Security</strong>.</li>
              <li>A foreign certificates on <strong>Cyber Security Essentials</strong> issued by a foreign organization.</li>
            </ol>

            <p>
              The first phase of the programme will run for 3 months, holding on Saturdays from <strong>12PM - 2PM</strong>.
            </p>
          </div>
        </div>

        <!--  Phases Two  -->
        <div class="row d-flex align-items-center">
          <div class="col-md-5 text-center">
            <img :src="phaseTwoImage" class="img-fluid phase__image" alt="Information_security_training_image" />
          </div>

          <div class="col-md-7">
            <p class="phase__text">
              For the second phase, those who did well in the first phase and are interested in pursuing a career in any
              of the skill areas available will be guided by our team of consultants to prepare for such professional
              certifications that are globally recognized, like <strong>CISSP, CISA, CISM, Security+</strong>. This second
              phase will be paid for by the candidates, but we will ensure the fees are affordable. In addition, those
              interested in studying by our team of consultants to pursue and achieve those those dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
   import { defineComponent } from "vue";
   import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

   //  Import Assets.
   import backgroundImage from "@/assets/images/bg_tablet.jpg";
   import phaseOneImage from "@/assets/images/phase_1.png";
   import phaseTwoImage from "@/assets/images/phase_2.png";

   export default defineComponent({
     name: 'ProgramPhases_Comp',

     components: {
       SectionTitle_Comp
     },

     data() {
       return {
         title: "Program Phases",
         subTitle: "This program is divided into two main phases and these phases are clearly explained as follows:",
         backgroundImage,
         phaseOneImage,
         phaseTwoImage
       };
     },

     created() {
       window.addEventListener("scroll", () => {
         this.scrollHandle();
       });
     },

     destroyed() {
       window.removeEventListener("scroll", () => {
         this.scrollHandle();
       });
     },

     methods: {
       scrollHandle() {
         let overlay = document.querySelector(".overlay") as HTMLImageElement;
         const scrollValue = window.scrollY;
         const screenInnerHeight = window.innerHeight;
         const screenInnerWidth = window.innerWidth;

         if(scrollValue >= 0 && screenInnerWidth >= 992) {
           overlay.style.transform = `translateY(${(scrollValue - 900) * 0.3}px)`;
         }
         else if(scrollValue >= 0 && screenInnerWidth >= 928) {
           overlay.style.top = `${(scrollValue - (screenInnerHeight * 1.3) + 600) * 0.3}px`;
         }
         else if(scrollValue >= 0 && screenInnerWidth >= 753) {
           overlay.style.top = `${(scrollValue - (screenInnerHeight * 1.9) + 600) * 0.3}px`;
         }
         else {
           overlay.style.top = `${(scrollValue - (screenInnerHeight * 2.8) + 600) * 0.3}px`;
         }
       },
     },
   });
</script>

<style lang="scss" scoped>
  @import "ProgramPhases_Comp";
</style>
