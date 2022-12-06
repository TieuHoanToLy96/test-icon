<script>
export default {
  name: 'id-off',
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
<path d="M8 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V17M19.563 19.561C19.108 19.84 18.573 20 18 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 5.917 3.573 4.969 4.433 4.441" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.17488 8.17822C7.88048 8.31165 7.62281 8.51444 7.42393 8.76923C7.22505 9.02402 7.09088 9.32321 7.03291 9.64119C6.97495 9.95917 6.99491 10.2865 7.0911 10.595C7.18729 10.9036 7.35683 11.1843 7.58521 11.413C7.81359 11.6417 8.094 11.8117 8.40243 11.9083C8.71086 12.005 9.03812 12.0255 9.35619 11.968C9.67425 11.9105 9.97365 11.7768 10.2287 11.5783C10.4838 11.3798 10.687 11.1224 10.8209 10.8282" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 16H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    