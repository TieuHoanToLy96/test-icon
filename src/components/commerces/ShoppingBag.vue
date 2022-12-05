<script>
export default {
  name: 'shopping-bag',
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
<path d="M16.1029 8.25C16.1029 9.24456 15.7078 10.1984 15.0046 10.9017C14.3013 11.6049 13.3475 12 12.3529 12C11.3583 12 10.4045 11.6049 9.70126 10.9017C8.99799 10.1984 8.60291 9.24456 8.60291 8.25M4.10291 4.5H20.6029C21.0171 4.5 21.3529 4.83579 21.3529 5.25V18.75C21.3529 19.1642 21.0171 19.5 20.6029 19.5H4.10291C3.68869 19.5 3.35291 19.1642 3.35291 18.75V5.25C3.35291 4.83579 3.68869 4.5 4.10291 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    