<script>
export default {
  name: 'bandage-svg',
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
<path d="M14 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V10.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V14.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.50004 12.5L12.5 4.50004C13.4283 3.57178 14.6873 3.05029 16 3.05029C17.3128 3.05029 18.5718 3.57178 19.5 4.50004C20.4283 5.4283 20.9498 6.68729 20.9498 8.00004C20.9498 9.3128 20.4283 10.5718 19.5 11.5L11.5 19.5C10.5718 20.4283 9.3128 20.9498 8.00004 20.9498C6.68729 20.9498 5.4283 20.4283 4.50004 19.5C3.57178 18.5718 3.05029 17.3128 3.05029 16C3.05029 14.6873 3.57178 13.4283 4.50004 12.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    