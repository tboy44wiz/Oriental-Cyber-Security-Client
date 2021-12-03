<template>
    <div class="RegistrationForm_Comp">
      <SectionTitle_Comp :title="title" :subTitle="subTitle" />

      <section class="container">
        <form class="registration__form">
          <input type="text" name="fullName"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'"
                 class="input__box full-name__input" placeholder="Full Name" required
          >
          <input type="text" name="phoneNumber"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'"
                 class="input__box phone-number__input" placeholder="Phone Number" required
          >
          <input type="text" name="email"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
                 class="input__box email__input" placeholder="Email" required
          >
          <input type="text" name="state"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'State of resident'"
                 class="input__box state__input" placeholder="State of resident" required
          >
          <select type="text" name="programmeLocation" class="select__box" required>
            <option selected disabled>Programme location</option>
            <option value="physical_location">Physical location</option>
            <option value="remote_location">Remote location (Zoom)</option>
          </select>
          <input type="text" name="institution"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'Institution'"
                 class="input__box institution__input" placeholder="Institution" required
          >
          <input type="text" name="course"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'Course of study'"
                 class="input__box course__input" placeholder="Course of study" required
          >
          <input type="text" name="level"
                 onfocus="this.placeholder = ''" onblur="this.placeholder = 'Level of education'"
                 class="input__box level__input" placeholder="Level of education" required
          >
          <button class="register__button">Register</button>
        </form>
      </section>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import SectionTitle_Comp from "@/components/layouts/SectionTitle_Comp/SectionTitle_Comp.vue";

  export default defineComponent({
    name: 'RegistrationForm_Comp',

    components: {
      SectionTitle_Comp,
    },

    data() {
      return {
        title: "Registration Form",
        subTitle: "Please kindly give us your personal details."
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "RegistrationForm_Comp";
</style>
