<script>
export default {
  name: 'coin-svg',
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
<path d="M22.1176 9.66667C22.1176 12.244 17.6405 14.3333 12.1176 14.3333M22.1176 9.66667C22.1176 7.08934 17.6405 5 12.1176 5C6.5948 5 2.11765 7.08934 2.11765 9.66667M22.1176 9.66667V14.3333C22.1176 16.6667 18.2715 19 12.1176 19M12.1176 14.3333C6.5948 14.3333 2.11765 12.244 2.11765 9.66667M12.1176 14.3333V19M2.11765 9.66667V14.3333C2.11765 16.6667 5.9638 19 12.1176 19M18.2715 13.3715V18.0382M5.9638 13.3715V18.0382" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    