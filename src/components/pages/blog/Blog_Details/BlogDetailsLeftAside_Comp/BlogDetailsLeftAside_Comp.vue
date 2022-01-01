<template>
    <div class="BlogDetailsLeftAside_Comp">
        <h3>Versions of the Lorem ipsum have been used in 1960s</h3>

        <ul class="blog-info__items">
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="system-uicons:user-male" width="22" class="blog-info__icons" />
                <p>Gibson Mbah</p>
              </router-link>
            </li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="system-uicons:calendar-date" width="20" class="blog-info__icons" />
                <p>Jan 1, 2022</p>
              </router-link>
            </li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="fluent:thumb-like-20-regular" width="23" class="blog-info__icons" />
                <p>108</p>
              </router-link>
            </li>
            <li class="blog-info__item">
              <router-link to="#">
                <Icon icon="akar-icons:comment" width="20" class="blog-info__icons" />
                <p>13</p>
              </router-link>
            </li>
        </ul> 

        <img :src="SingleBlogImage" class="image-fluid" alt="Single Blog Image" />
        <p>
            Several major websites briefly went down Thursday in a widespread outage 
            linked to content distribution network Akamai. By about 12:50 p.m. ET, 
            Akamai said it fixed the issue and the service seemed to be back to normal. 
            The company later said on Twitter that the issue was caused by a software 
            update that triggered a bug. It confirmed the incident was not a result of 
            a cyber attack on its platform. Akamai said the disruption lasted for “up 
            to an hour” and apologized for the inconvenience.Akamai, whose operation 
            helps data move around the internet, said on its website earlier Thursday 
            that it was investigating “an emerging issue with the Edge DNS service.”Oracle 
            had also pointed to Akamai as the source of the issue, which impacted some 
            Oracle cloud properties, but it said resources within its own cloud service 
            were not affected.The Domain Name System is like a phone book for websites. 
            The technology figures out the right IP addresses to use when people try to 
            go to individual websites. The Edge DNS service from Akamai takes care of 
            this work for apps and websites and protects against distributed denial-of 
            service, or DDoS, attacks.Delta Air Lines, British Airways, Capital One, 
            Go Daddy, Vanguard, UPS, LastPass, AT&amp;T and Costco were among the 
            websites loading slowly or showing “DNS failure” Thursday afternoon.The 
            outage caused some real-world disruptions. For example, Delta customers 
            could not use the airline’s website or app to check into flights until 
            Akamai fixed the problem. 
        </p>

        <div className="share-post__wrapper">
            <p>share post</p>
            
            <div className="icons__wrapper">
                <router-link to="#">
                  <box-icon name='facebook' type='logo' color="white" />
                </router-link>
                <router-link to="#">
                  <box-icon name='twitter' type='logo' color="white" />
                </router-link>
                <router-link to="#">
                  <box-icon type='logo' name='instagram' color="white" />
                </router-link>
                <router-link to="#">
                  <box-icon name='whatsapp' type='logo' color="white" />
                </router-link>
            </div>
        </div>

        <hr />

        <!-- ============= Discussion ============== -->

        <section class="discussion__wrapper">
            <h3>Discussions (13)</h3>

            <form>
                <div class="icon-and-textarea__wrapper">
                    <div class="icon__wrapper">
                        <Icon icon="system-uicons:user-male" width="22" class="blog-info__icons" />
                    </div>
                    <textarea
                        onfocus = "this.placeholder = ''" onblur = "this.placeholder = 'Add your own discussion here.'"
                        placeholder="Add your own discussion here."
                    />
                </div>
            </form>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import {Icon} from "@iconify/vue";

    // Import image assets.
    import SingleBlogImage from "@/assets/images/single_blog_image.png";

    export default defineComponent({
        name: "BlogDetailsLeftAside_Comp",

        components: {
            Icon
        },

        data() {
            return {
                SingleBlogImage,
            };
        }
    });
</script>

<style lang="scss" scoped>
    @import "BlogDetailsLeftAside_Comp";
</style>