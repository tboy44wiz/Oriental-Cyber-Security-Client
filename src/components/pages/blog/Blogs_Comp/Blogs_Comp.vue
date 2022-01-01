<template>
    <div class="Blogs_Comp">
        <section class="container">
            <SectionTitle_Comp :title="title" :subTitle="subTitle" />

            <div class="row blog-items__wrapper">
                <div 
                    v-for="blog in blogs"
                    :key="blog.id"
                    class="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0 mb-lg-4"
                >
                    <div class="blog__item">
                        <img :src="blog.image" :alt="'Blog' + blog.id + 'image'"  />
                        <div className="title-and-subTitle__Wrapper">
                            <strong>{{ blog.title }}</strong>
                            <p>{{ blog.subTitle }}</p>
                        </div>

                        <router-link :to="/blogs/ + blog.id" class="">
                            <button class="read-more__button">Read More</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>  
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

    //  Import Assets.
    import Blog1 from '@/assets/images/blog1_image.png';
    import Blog2 from '@/assets/images/blog2_image.png';

    export default defineComponent({
        name: 'Blogs_Comp',

        components: {
            SectionTitle_Comp
        },

        data() {
            return {
                title: "Our Blogs",
                subTitle: "Our exceptional first hand blog posts",

                blogs: [
                    {
                        id: 1,
                        image: Blog1,
                        title: "Versions of the Lorem ipsum have been used in 1960s",
                        subTitle: "American Airlines has told the remaining 3,300 flight attendants on voluntary leave to come back by November or December and that it will start recruiting new cabin crew members, a...",
                    },
                    {
                        id: 2,
                        image: Blog2,
                        title: "Versions of the Lorem ipsum have been used in 1960s",
                        subTitle: "Several major websites briefly went down Thursday in a widespread outage linked to content distribution network Akamai.By about 12:50 p.m. ET, Akamai said it fixed the issue and th...",
                    },
                    {
                        id: 3,
                        image: Blog1,
                        title: "Versions of the Lorem ipsum have been used in 1960s",
                        subTitle: "The coronavirus crisis has cast new attention on wages and income.It’s been 12 years since the last federal minimum wage increase, and whether a hike in minimum pay will get passed...",
                    },
                    {
                        id: 4,
                        image: Blog2,
                        title: "Versions of the Lorem ipsum have been used in 1960s",
                        subTitle: "About 2.2 million more stimulus checks have gone out over the last six weeks, the government said Wednesday.The latest batch brings the total number of payments disbursed to more t...",
                    },
                    {
                        id: 5,
                        image: Blog1,
                        title: "Versions of the Lorem ipsum have been used in 1960s",
                        subTitle: "About 2.2 million more stimulus checks have gone out over the last six weeks, the government said Wednesday.The latest batch brings the total number of payments disbursed to more t...",
                    },
                ],
            };
        },
    });
</script>

<style lang="scss" scoped>
    @import "Blogs_Comp";
</style>