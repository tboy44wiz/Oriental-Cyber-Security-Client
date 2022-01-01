<template>
    <div class="BlogDetailsRightAside_Comp">

        <!--  Latest Posts Section  -->
        <section class="latest-post__wrapper">
            <h4>Latest Posts</h4>
            <div className="latest-post-list__wrapper">
                <router-link to="#">
                    American Airlines cancels flight attendants’ voluntary leaves, 
                    plans to hire 800 to meet travel demand.
                </router-link>
                <router-link to="#">
                    It’s been 12 years since the last federal minimum wage increase. 
                    Where efforts to raise the pay rate stand.
                </router-link>
                <router-link to="#">
                    Personal Finance States cutting unemployment benefits didn’t get people back to work, study finds.
                </router-link>
                <router-link to="#">
                    Another 2.2 million stimulus checks have gone out. Here’s who received the payments.
                </router-link>
            </div>
        </section>


        <!--  Post tags Section  -->
        <section class="post-tag__wrapper">
            <h4>Tags</h4>
            <ul class="tag-list__wrapper">
                <li v-for="blogTag in blogTags" :key="blogTag" class="tag-list__item">
                    <router-link to="#" :key="blogTag">{{ blogTag }}</router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "BlogDetailsRightAside_Comp",

        data() {
            return {
                blogTags: ["Cyber Security", "Ethical Hacking", "CCNA"],
            };
        },
    });
</script>

<style lang="scss" scoped>
    @import "BlogDetailsRightAside_Comp";
</style>