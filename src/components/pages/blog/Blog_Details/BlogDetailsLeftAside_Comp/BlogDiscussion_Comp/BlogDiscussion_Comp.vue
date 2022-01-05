<template>
    <div class="BlogDiscussion_Comp">
        <h3>Discussions (13)</h3>

        <!-- Discussion Form -->
        <form>
            <div class="icon-and-textarea__wrapper">
                <Icon icon="system-uicons:user-male" width="22" class="user__icon" />

                <div class="textarea-and-button__wrapper">
                    <textarea
                        v-model="discussionText"
                        onfocus = "this.placeholder = ''" onblur = "this.placeholder = 'Add your own discussion here.'"
                        placeholder="Add your own discussion here."
                    />

                    <transition name="slide">
                        <button 
                            v-show="discussionText.length >= 1"
                            class="send__button"
                        >Send</button>
                    </transition>
                </div>
            </div>
        </form>


        <!-- Discussion Post -->
        <div class="discussion__wrapper">
            <Icon icon="system-uicons:user-male" width="22" class="user__icon" />

            <div class="discussion-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Ben Okezie</h5>
                    <p>Jan 2</p>
                </div>
                <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual form of a document or a 
                    typeface without relying on meaningful content. 
                </p>
                <ul class="discussion-info__items">
                    <li class="discussion-info__item">
                        <router-link to="#" 
                            data-bs-toggle="modal" 
                            data-bs-target="#appModal"
                            v-on:click="updateModalTitleAndSubTitle('Like Conversation', 'Please enter your name and email.')"
                        >
                            <Icon icon="fluent:thumb-like-20-regular" width="23" class="discussion-info__icons" />
                            <p>6</p>
                        </router-link>
                    </li>
                    <li class="discussion-info__item">
                        <router-link to="#">
                            <Icon icon="akar-icons:comment" width="20" class="discussion-info__icons" />
                            <p>1</p>
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>

        <!-- Discussion Reply Post -->
        <div class="discussion-reply__wrapper">
            <Icon icon="system-uicons:user-male" width="22" class="user__icon" />

            <div class="discussion-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Alleu Sodeeq</h5>
                    <p>Jan 3</p>
                </div>
                <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual. 
                </p>
                <ul class="discussion-info__items">
                    <li class="discussion-info__item">
                        <router-link to="#">
                            <Icon icon="fluent:thumb-like-20-regular" width="23" class="discussion-info__icons" />
                            <p>2</p>
                        </router-link>
                    </li>
                    <li class="discussion-info__item">
                        <router-link to="#">
                            <Icon icon="akar-icons:comment" width="20" class="discussion-info__icons" />
                            <!-- <p>1</p> -->
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>
        <div class="discussion-reply__wrapper">
            <Icon icon="system-uicons:user-male" width="22" class="user__icon" />

            <div class="discussion-detail__wrapper">
                <div class="name-and-date__wrapper">
                    <h5>Joy Ebem</h5>
                    <p>Jan 3</p>
                </div>
                <p>
                    Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the visual. 
                </p>
                <ul class="discussion-info__items">
                    <li class="discussion-info__item">
                        <router-link to="#">
                            <Icon icon="fluent:thumb-like-20-regular" width="23" class="discussion-info__icons" />
                            <!-- <p>2</p> -->
                        </router-link>
                    </li>
                    <li class="discussion-info__item">
                        <router-link to="#">
                            <Icon icon="akar-icons:comment" width="20" class="discussion-info__icons" />
                            <!-- <p>1</p> -->
                        </router-link>
                    </li>
                </ul> 
            </div>
        </div>


        <!-- Modal Component -->
        <Modal_Comp :modalTitle="modalTitle" :modalSubTitle="modalSubTitle">
            <form>
                <input type="text" name="fullName"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'"
                    class="input__box full-name__input" placeholder="Full Name" required
                >
                <input type="text" name="email"
                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"
                        class="input__box email__input" placeholder="Email" required
                >
            </form>
        </Modal_Comp>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";
    import { Icon } from "@iconify/vue";
    import Modal_Comp from "@/components/layouts/Modal_Comp/Modal_Comp.vue";

    export default defineComponent({
        name: "BlogDiscussion_Comp",

        components: {
            Icon,
            Modal_Comp
        },

        data() {
            return {
                discussionText: "",
                modalTitle: "",
                modalSubTitle: "",
            };
        },

        methods: {
            updateModalTitleAndSubTitle(title: string, subTitle: string) {
                this.modalTitle = title;
                this.modalSubTitle = subTitle;
            },
        }
    });
</script>

<style lang="scss" scoped>
    @import "BlogDiscussion_Comp";
    @import "@/components/layouts/Modal_Comp/Modal_Comp"
</style>