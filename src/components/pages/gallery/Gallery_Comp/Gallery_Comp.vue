<template>
  <section class="Gallery_Comp">
    <div class="container">
      <SectionTitle_Comp :title="title" :subTitle="subTitle" />

      <div class="row">
        <div class="col-12">
          <div class="gallery__wrapper">
            <div v-for="(image, index) in images" class="image__wrapper" :key="index">
              <img :src="image"
                   loading="lazy"
                   :data-src="lazyLoader"
                   @click="openImageModal(image)"
                   class="img-fluid" :alt="Image"
                   data-bs-toggle="modal"
                   data-bs-target="#exampleModal"
              />
            </div>
          </div>
        </div>
      </div>


      <!-- Modal -->
      <div class="modal fade modal__wrapper" id="exampleModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content modal-content__wrapper">
            <div class="modal-header border-bottom-0">
              <button type="button" class="btn-close close__button" data-bs-dismiss="modal" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body">
              <div class="modal-image__wrapper">
                <img :src="selectedImageUrl" class="modal__image" alt="Image" />
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

  //  Import Components.
  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  //  Import Image assets.
  import imageOne from "@/assets/images/image1.jpeg";
  import imageTwo from "@/assets/images/image2.jpeg";
  import imageThree from "@/assets/images/image3.jpeg";
  import imageFour from "@/assets/images/image4.jpeg";
  import LazyLoader from '@/assets/images/lazy_loader.gif';

  export default defineComponent({
    name: 'Gallery_comp' as string,

    components: {
      SectionTitle_Comp
    },

    data() {
      return {
        title: "Image Galleries",
        subTitle: "These are set of images taken during programme",
        lazyLoader: LazyLoader,
        images: [imageOne, imageTwo, imageThree, imageFour],
        selectedImageUrl: "",
      };
    },

    methods: {
      openImageModal(imageUrl: string) {
        this.selectedImageUrl = imageUrl;
        console.log(this.selectedImageUrl);
      },
    }
  });
</script>

<style lang="scss" scoped>
  @import "Gallery_Comp";
</style>
