<script>
export default {
  name: 'arrow-big-left-line',
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
<path d="M12.0001 15.0001V18.5861C12.0001 18.7838 11.9414 18.9771 11.8315 19.1416C11.7216 19.306 11.5654 19.4341 11.3827 19.5098C11.2 19.5854 10.999 19.6052 10.8051 19.5667C10.6111 19.5281 10.4329 19.4329 10.2931 19.2931L3.70709 12.7071C3.51962 12.5196 3.41431 12.2653 3.41431 12.0001C3.41431 11.7349 3.51962 11.4806 3.70709 11.2931L10.2931 4.70709C10.4329 4.56728 10.6111 4.47208 10.8051 4.43351C10.999 4.39494 11.2 4.41475 11.3827 4.49042C11.5654 4.56609 11.7216 4.69423 11.8315 4.85864C11.9414 5.02305 12.0001 5.21634 12.0001 5.41409V9.00009H18.0001V15.0001H12.0001V15.0001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 15V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    