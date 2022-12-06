<script>
export default {
  name: 'hourglass-high',
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
<path d="M12.5884 12L6.88838 7.725C6.79523 7.65514 6.71963 7.56455 6.66756 7.46041C6.61549 7.35627 6.58838 7.24143 6.58838 7.125V3.75C6.58838 3.55109 6.6674 3.36032 6.80805 3.21967C6.9487 3.07902 7.13947 3 7.33838 3H17.8384C18.0373 3 18.2281 3.07902 18.3687 3.21967C18.5094 3.36032 18.5884 3.55109 18.5884 3.75V7.09136C18.5884 7.20732 18.5615 7.3217 18.5098 7.42551C18.4582 7.52932 18.3831 7.61974 18.2906 7.68966L12.5884 12ZM12.5884 12L6.88838 16.275C6.79523 16.3449 6.71963 16.4354 6.66756 16.5396C6.61549 16.6437 6.58838 16.7586 6.58838 16.875V20.25C6.58838 20.4489 6.6674 20.6397 6.80805 20.7803C6.9487 20.921 7.13947 21 7.33838 21H17.8384C18.0373 21 18.2281 20.921 18.3687 20.7803C18.5094 20.6397 18.5884 20.4489 18.5884 20.25V16.9086C18.5884 16.7927 18.5615 16.6783 18.5098 16.5745C18.4582 16.4707 18.3831 16.3803 18.2906 16.3103L12.5884 12ZM6.58838 5.99958H18.5884" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    