<script>
export default {
  name: 'student-svg',
  props: {
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.23523 6V13.5M3.23523 6L12.2352 9L21.2352 6L12.2352 3L3.23523 6ZM5.31947 20.2499C6.06898 19.0986 7.09406 18.1526 8.30172 17.4978C9.50939 16.843 10.8614 16.5 12.2352 16.5M12.2352 16.5C13.609 16.5 14.961 16.843 16.1687 17.4978C17.3764 18.1526 18.4015 19.0986 19.151 20.2499M12.2352 16.5C13.2535 16.5 14.2498 16.2038 15.1027 15.6477C15.9557 15.0915 16.6285 14.2993 17.0392 13.3675C17.4499 12.4357 17.5808 11.4046 17.4159 10.3998C17.2511 9.39499 16.7975 8.4598 16.1106 7.70816M12.2352 16.5C11.2169 16.5 10.2207 16.2038 9.36771 15.6477C8.51475 15.0915 7.84194 14.2993 7.43122 13.3675C7.02051 12.4357 6.88963 11.4046 7.05452 10.3998C7.2194 9.39499 7.67295 8.4598 8.3599 7.70816" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    