<script>
export default {
  name: 'twitch-logo',
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
<path d="M16.0442 8.25V12.75M11.5442 8.25V12.75M15.7726 18.75H11.8157C11.6402 18.75 11.4703 18.8115 11.3356 18.9238L7.04416 22.5V18.75H4.79416C4.59525 18.75 4.40448 18.671 4.26383 18.5303C4.12318 18.3897 4.04416 18.1989 4.04416 18V4.5C4.04416 4.30109 4.12318 4.11032 4.26383 3.96967C4.40448 3.82902 4.59525 3.75 4.79416 3.75H19.7942C19.9931 3.75 20.1838 3.82902 20.3245 3.96967C20.4651 4.11032 20.5442 4.30109 20.5442 4.5V14.6487C20.5442 14.7587 20.52 14.8673 20.4734 14.9668C20.4267 15.0664 20.3588 15.1545 20.2743 15.2249L16.2528 18.5762C16.118 18.6885 15.9481 18.75 15.7726 18.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    