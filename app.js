const app = Vue.createApp({
    data() {
      return {
        products: [],
        filteredProducts: [],
      };
    },
    methods: {

    },
    mounted() {
        fetch('https://fakestoreapi.com/products/category/jewelery')
          .then(response => response.json())
          .then(data => {
            this.products = data;
            this.filteredProducts = data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      },
  });
  
  app.mount('#app');