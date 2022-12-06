<script>
export default {
  name: 'user-gear',
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
<path d="M10.3604 15C13.467 15 15.9854 12.4816 15.9854 9.375C15.9854 6.2684 13.467 3.75 10.3604 3.75C7.25378 3.75 4.73538 6.2684 4.73538 9.375C4.73538 12.4816 7.25378 15 10.3604 15ZM10.3604 15C8.82729 15 7.31283 15.3357 5.92332 15.9835C4.53381 16.6313 3.30301 17.5755 2.31738 18.7498M10.3604 15C11.8935 15 13.408 15.3357 14.7975 15.9835C16.187 16.6314 17.4178 17.5756 18.4034 18.7499M20.8604 14.25C21.6888 14.25 22.3604 13.5784 22.3604 12.75C22.3604 11.9216 21.6888 11.25 20.8604 11.25M20.8604 14.25C20.032 14.25 19.3604 13.5784 19.3604 12.75C19.3604 11.9216 20.032 11.25 20.8604 11.25M20.8604 14.25V15.375M20.8604 11.25V10.125M19.5613 12L18.5871 11.4375M19.5613 13.5L18.5871 14.0625M22.1594 13.5L23.1337 14.0625M22.1594 12L23.1337 11.4375" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    