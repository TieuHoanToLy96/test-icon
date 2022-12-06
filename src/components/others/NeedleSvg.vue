<script>
export default {
  name: 'needle-svg',
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
<path d="M2.99997 21C2.33297 20.333 6.26197 14.764 14.785 4.291C15.0888 3.91792 15.4662 3.61149 15.8937 3.39082C16.3213 3.17016 16.7897 3.04 17.2698 3.00849C17.7499 2.97698 18.2313 3.04479 18.684 3.20768C19.1367 3.37057 19.5509 3.62504 19.9009 3.95521C20.2508 4.28538 20.529 4.68415 20.7179 5.12662C20.9068 5.56909 21.0025 6.04576 20.9989 6.52687C20.9954 7.00797 20.8926 7.48318 20.6972 7.92281C20.5017 8.36243 20.2178 8.75705 19.863 9.082C9.28797 17.694 3.66697 21.667 2.99997 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 6.5L16.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    