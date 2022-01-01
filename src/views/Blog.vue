<template>
    <div class="Blogs">
        <Blogs_Comp />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import Blogs_Comp from "@/components/pages/blog/Blogs_Comp/Blogs_Comp.vue";

    export default defineComponent({
        name: 'Blog',

        components: {
            Blogs_Comp,
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