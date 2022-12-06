<script>
export default {
  name: 'order-customer',
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
<path d="M4.1249 7.8V4.875C4.1249 4.67609 4.20392 4.48532 4.34457 4.34467C4.48522 4.20402 4.67599 4.125 4.8749 4.125H19.1249C19.3238 4.125 19.5146 4.20402 19.6552 4.34467C19.7959 4.48532 19.8749 4.67609 19.8749 4.875V19.125C19.8749 19.3239 19.7959 19.5147 19.6552 19.6553C19.5146 19.796 19.3238 19.875 19.1249 19.875H13.7999M6.8999 16.8C8.55676 16.8 9.8999 15.4569 9.8999 13.8C9.8999 12.1431 8.55676 10.8 6.8999 10.8C5.24305 10.8 3.8999 12.1431 3.8999 13.8C3.8999 15.4569 5.24305 16.8 6.8999 16.8ZM6.8999 16.8C6.02665 16.8 5.16539 17.0033 4.38433 17.3938C3.60326 17.7844 2.92385 18.3514 2.3999 19.05M6.8999 16.8C7.77316 16.8 8.63442 17.0033 9.41548 17.3938C10.1965 17.7844 10.876 18.3514 11.3999 19.05" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    