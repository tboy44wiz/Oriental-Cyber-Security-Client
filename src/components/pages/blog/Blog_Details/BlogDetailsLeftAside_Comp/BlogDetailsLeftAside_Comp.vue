<template>
    <div class="BlogDetailsLeftAside_Comp">
        <BlogDetails_Comp />

        <hr />

        <!-- ============= Discussion ============== -->

        <BlogDiscussion_Comp />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";
    import BlogDetails_Comp from "./BlogDetails_Comp/BlogDetails_Comp.vue";
    import BlogDiscussion_Comp from "./BlogDiscussion_Comp/BlogDiscussion_Comp.vue";    

    export default defineComponent({
        name: "BlogDetailsLeftAside_Comp",

        components: { 
            BlogDetails_Comp,
            BlogDiscussion_Comp,
        },
    });
</script>

<style lang="scss" scoped>
    @import "src/assets/styles/GlobalStyle";

    .BlogDetailsLeftAside_Comp {
        height: min-content;
        width: $fullWidth;
        background: $colorWhite;
        border-radius: 5px;

        hr {
            margin: 30px 20px 10px 20px;
        };
    };
</style>