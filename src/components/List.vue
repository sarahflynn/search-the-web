<template>
    <div>
        <h2>Search Book Title To Find Author(s)</h2>
        <Search :onSearch="handleSearch"/>
        <Book v-for="book in books"
          :key="book.industryIdentifiers[0].identifier"
          :book="book"/>
    </div>
</template>

<script>
import Search from './Search.vue';
import api from '../services/api.js';
import Book from './Book.vue';

export default {
  data() {
    return {
      books: null,
      items: null,
      search: ''
    };
  },
  components: {
    Search,
    Book
  },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchData();
    },
    searchData() {
      api.getData(this.search)
        .then(response => {
          this.books = response.items.map(book => book.volumeInfo);
        });
    }
  }

};
</script>

<style>

</style>
