<template>
    <div class="AppFooter_Comp">

      <!--    Top Footer    -->
      <div class="top-footer__wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3 class="brand__name">{{ title }}</h3>
              <p>
                Oriental CyberSecurity Training and Initiative Programme is a program established and organized by a team
                of Nigerian Cyber Security experts based in Nigeria, Canada and Europe to deliver a first-hand training
                and mentorship programme on Information/Cyber security to all interested Nigerians who are ready to make
                a career in Cyber Security.
              </p>
            </div>

            <div class="col-md-4 mt-sm-4 mt-md-0">
              <h3 class="footer__subHeader">Contacts</h3>
              <p>No 6B Joseph Shyngle Street, off James Robertson Street, Surulere, Lagos State</p>
              <p>Phone: +234 803 3034 250</p>
              <p>WhatsApp: +234 803 3034 250</p>
              <p> Email: <router-link to="#">info@foretrustgroup.com</router-link></p>
              <p>Website: <a :href="foreTrustLink" target="_blank">www.foretrustgroup.com</a></p>
            </div>

            <div class="col-md-4 mt-sm-4 mt-md-0">
              <h3 class="footer__subHeader">Links</h3>
              <div class="row">
                <div class="col">
                  <p><router-link to="/">Home</router-link></p>
                  <p><router-link to="/gallery">Gallery</router-link></p>
                  <p><router-link to="/blogs">Blogs</router-link></p>
                  <p><router-link to="/register">Register</router-link></p>
                </div>

                <div class="col">
                  <p><a :href="foreTrustLink" target="_blank">Visit ForeTrust Today</a></p>
                  <p><router-link to="#">News</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--    Bottom Footer    -->
      <div class="bottom-footer__wrapper">
        <div class="container">
          <div class="row">

            <div class="col-7">
              <div class="footer-copyright">
                &copy; Copyright
                <a :href="foreTrustLink" target="_blank">ForeTrust Digital</a> {{ year }}
              </div>
            </div>

            <div class="col-5 text-end">
              <div class="social-icon__wrapper">
                <router-link to="#">
                  <Icon icon="ei:sc-facebook" class="social-media__icons" />
                </router-link>
                <router-link to="#">
                  <Icon icon="ci:twitter" class="social-media__icons" />
                </router-link>
                <router-link to="#">
                  <Icon icon="ci:linkedin" class="social-media__icons" />
                </router-link>
                <router-link to="#">
                  <Icon icon="jam:whatsapp" class="social-media__icons" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

  export default defineComponent({
    name: 'AppFooter_comp',

    props: {
      title: {
        type: String,
        required: true,
      },
    },

    components: {
        Icon
    },

    data() {
      return {
        year: new Date().getFullYear(),
        foreTrustLink: "http://foretrustgroup.com",
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "AppFooter_Comp";
</style>
