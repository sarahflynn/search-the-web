<template>
  <div>
    <h4>{{ book.title }}</h4>
    <Author v-if="book.authors" v-for="author in book.authors"
      :key="author"
      :author= "author"/>
  </div>
</template>

<script>
import Author from './Author.vue';

export default {
  props: {
    book: Object
  },
  components: {
    Author
  }
};
</script>

<style>

</style>
