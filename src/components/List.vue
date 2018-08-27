<template>
    <div>
        <h2>Search</h2>
        <Search :onSearch="handleSearch"/>
    </div>
    
</template>

<script>
import Search from './Search.vue';
import api from '../services/api.js';

export default {
  data() {
    return {
      author: null,
      search: ''
    };
  },
  components: {
    Search
  },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchData();
    },
    searchData() {
      api.getData(this.search)
        .then(response => {
          console.log('this', response.items[0].volumeInfo.authors);
          this.items = response.items;
        });
    }
  }

};
</script>

<style>

</style>
