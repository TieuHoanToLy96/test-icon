<script>
export default {
  name: 'circle-letter-s',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4804 15.8946 10.7348 16 11 16H13C13.2652 16 13.5196 15.8946 13.7071 15.7071C13.8946 15.5196 14 15.2652 14 15V13C14 12.7348 13.8946 12.4804 13.7071 12.2929C13.5196 12.1054 13.2652 12 13 12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11V9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    