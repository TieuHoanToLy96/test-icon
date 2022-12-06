<script>
export default {
  name: 'facebook-logo',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2942 21C17.2647 21 21.2942 16.9706 21.2942 12C21.2942 7.02944 17.2647 3 12.2942 3C7.3236 3 3.29416 7.02944 3.29416 12C3.29416 16.9706 7.3236 21 12.2942 21ZM12.2942 21V10.5001C12.2942 9.90335 12.5312 9.33106 12.9532 8.9091C13.3751 8.48714 13.9474 8.25009 14.5442 8.25009H16.0442M9.29416 13.5001H15.2942" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    