<template>
    <div class="SectionTitle_Comp">
      <h2 class="section__title">{{ title }}</h2>
      <p class="section__subTitle">{{ subTitle }}</p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
      name: 'SectionTitle_Comp' as string,

      props: {
        title: String,
        subTitle: String
      },
    });
</script>

<style lang="scss" scoped>
  @import "SectionTitle_Comp";
</style>
