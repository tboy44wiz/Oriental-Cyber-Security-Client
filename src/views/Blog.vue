<template>
    <div class="Blogs">
        <BlogList_Comp />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import BlogList_Comp from "@/components/pages/blog/Blogs_Comp/BlogList_Comp.vue";

    export default defineComponent({
        name: 'Blog',

        components: {
            BlogList_Comp,
        },

    });
</script>

<style lang="scss" scoped>
    @import "src/assets/styles/GlobalStyle";

    .Blogs {
        height: auto;
        width: $fullWidth;
        margin-top: 50px;
        padding: 30px 0 60px 0;
    };

    @media screen and (max-width: 680px) {
        .Blogs {
            margin-top: 20px;
        };
    };
</style>