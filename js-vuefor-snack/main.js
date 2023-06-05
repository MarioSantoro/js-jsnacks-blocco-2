const  {createApp} = Vue;

createApp({
    data() {
      return {
        array1 : ["Mario" , "Mario" ,"Mario" , "Mario"],
        array2 : [],
      }
    }
  }).mount('#app')