<script>
export default {
  name: 'currency-pound',
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
      default: 1.7
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9999 18.5001C16.2155 18.8596 15.3628 19.0457 14.4999 19.0457C13.637 19.0457 12.7843 18.8596 11.9999 18.5001C11.1799 18.217 10.3082 18.1151 9.44504 18.2014C8.58184 18.2877 7.74763 18.5602 6.9999 19.0001C7.53533 18.8147 8.00733 18.4816 8.36127 18.0392C8.71522 17.5967 8.93663 17.0631 8.9999 16.5001V9.00007C9.00518 8.124 9.29793 7.27389 9.83319 6.58032C10.3684 5.88676 11.1166 5.38811 11.9627 5.16096C12.8089 4.93381 13.7062 4.99073 14.5168 5.32298C15.3274 5.65523 16.0066 6.24443 16.4499 7.00007M13.8999 13.0001H6.8999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    