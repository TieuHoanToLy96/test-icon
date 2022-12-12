<script>
export default {
  name: 'envelope-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.94116 5.25H21.9412M3.94116 5.25V18C3.94116 18.1989 4.02018 18.3897 4.16083 18.5303C4.30148 18.671 4.49225 18.75 4.69116 18.75H21.1912C21.3901 18.75 21.5808 18.671 21.7215 18.5303C21.8621 18.3897 21.9412 18.1989 21.9412 18V5.25M3.94116 5.25L12.9412 13.5L21.9412 5.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    