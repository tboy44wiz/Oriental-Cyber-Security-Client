<template>
    <div class="BlogDetails">
        <div class="container p-0">
            <div class="row">
                <div class="col-12">

                    <div class="row my-2 my-md-5">

                        <!--   Blog Details Left Side   -->
                        <div class="col-lg-8">
                            <BlogDetailsLeftAside_Comp />
                        </div>

                        <!--   Blog Details Right Side   -->
                        <div class="col-lg-4 mt-sm-5 mt-md-0">
                            <BlogDetailsRightAside_Comp />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
    import BlogDetailsLeftAside_Comp from "@/components/pages/blog/Blog_Details/BlogDetailsLeftAside_Comp/BlogDetailsLeftAside_Comp.vue";
    import BlogDetailsRightAside_Comp from "@/components/pages/blog/Blog_Details/BlogDetailsRightAside_Comp/BlogDetailsRightAside_Comp.vue";

    export default defineComponent({
        name: "BlogDetails",

        components: {
            BlogDetailsLeftAside_Comp,
            BlogDetailsRightAside_Comp,
        },
    });
</script>

<style lang="scss" scoped>
    @import "src/assets/styles/GlobalStyle";

    .BlogDetails {
        height: auto;
        width: $fullWidth;
        margin-top: 50px;
        padding: 30px 0 60px 0;
    };

    @media screen and (max-width: 680px) {
        .BlogDetails {
            margin-top: 20px;
        };
    };

</style>