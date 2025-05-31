<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm"/>
  <TweetList />
</template>

<script>
import Menu from "./components/Menu.vue";
import TweetForm from "./components/TweetForm.vue";
import TweetList from "./components/TweetList.vue";
import useFormTweet from "./hooks/useFormTweet"

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList
  },
  setup() {
    return {
      ...useFormTweet(),
    }
  }
};
</script>

<style lang="scss"></style>
