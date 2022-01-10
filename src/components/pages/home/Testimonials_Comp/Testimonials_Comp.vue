<template>
    <section class="Testimonials_Comp">
      <div class="container">
        <SectionTitle_Comp :title="title" :subTitle="subTitle" />

        <div class="row">
          <div class="col-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div class="carousel-inner">
                <!--<div class="carousel-inner">-->
                <div v-for="carouselItem in carouselItems" :key="carouselItem.id" class="carousel-item" :class="carouselItem.class">
                  <div class="customer-testimonial__wrapper">
                    <div class="customer-details__wrapper">
                      <div class="image-name__wrapper">
                        <img :src="carouselItem.image" class="customer__image" :alt="carouselItem.alt">
                        <h5 class="customer__name">{{ carouselItem.name }}</h5>
                      </div>
                      <p class="customer__comment">{{ carouselItem.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Icon } from "@iconify/vue";

  //  Import Components.
  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  //  Import Image assets.
  import userOne from "@/assets/images/user1.png";
  import userTwo from "@/assets/images/user2.png";
  import userThree from "@/assets/images/user3.png";
  import userFour from "@/assets/images/user4.png";

  export default defineComponent({
    name: 'Testimonials_Comp',

    components: {
      Icon,
      SectionTitle_Comp
    },

    data() {
      return {
        title: "Testimonials",
        subTitle: "Take a look at the testimonies of our successful students.",
        carouselItems: [
          {
            id: 1,
            class: "active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: userOne,
            alt: "Customer Image",
          },
          {
            id: 2,
            class: "non-active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: userTwo,
            alt: "Customer Image",
          },
          {
            id: 3,
            class: "non-active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: userThree,
            alt: "Customer Image",
          },
          {
            id: 4,
            class: "non-active",
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto cupiditate dolorum?\n" +
                "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
                "explicabo id maiores officiis, omnis sunt.",
            image: userFour,
            alt: "Customer Image",
          },
        ],
      };
    }
  });
</script>


<style lang="scss" scoped>
  @import "Testimonials_Comp";
</style>