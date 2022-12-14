<script>
export default {
  name: 'brand-tumblr',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 21H18V17H14V11H18V7H14V3H10V4C10 4.79565 9.68393 5.55871 9.12132 6.12132C8.55871 6.68393 7.79565 7 7 7H6V11H10V17C10 18.0609 10.4214 19.0783 11.1716 19.8284C11.9217 20.5786 12.9391 21 14 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    