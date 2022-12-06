<script>
export default {
  name: 'currency-btc',
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
<path d="M7.97058 11.25H14.7206C15.7151 11.25 16.669 11.6451 17.3722 12.3484C18.0755 13.0516 18.4706 14.0054 18.4706 15C18.4706 15.9946 18.0755 16.9484 17.3722 17.6517C16.669 18.3549 15.7151 18.75 14.7206 18.75L7.97003 18.7495M7.97003 18.7495V4.49954M7.97003 18.7495H6.47003M7.97003 4.49954L13.5956 4.5C14.4907 4.5 15.3491 4.85558 15.9821 5.48851C16.615 6.12145 16.9706 6.97989 16.9706 7.875C16.9706 8.77011 16.615 9.62855 15.9821 10.2615C15.3491 10.8944 14.4907 11.25 13.5956 11.25M7.97003 4.49954H6.47003M10.2206 4.5V2.25M13.2206 4.5V2.25M10.2206 21V18.75M13.2206 21V18.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    