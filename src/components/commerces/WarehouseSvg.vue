<script>
export default {
  name: 'warehouse-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19.8V6.80005L12 2.80005L21 6.80005V19.8M13 11.6001H17V19.6001H7V13.6001H13M13 19.6V10.6C13 10.3348 12.8946 10.0805 12.7071 9.89294C12.5196 9.7054 12.2652 9.60005 12 9.60005H10C9.73478 9.60005 9.48043 9.7054 9.29289 9.89294C9.10536 10.0805 9 10.3348 9 10.6V13.6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    