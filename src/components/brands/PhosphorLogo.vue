<script>
export default {
  name: 'phosphor-logo',
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
<path d="M6.49265 3L12.6801 15.375M6.49265 3H12.6801M6.49265 3V15.375M12.6801 15.375V3M12.6801 15.375H6.49265M12.6801 15.375V21.5625C11.0391 21.5625 9.4653 20.9106 8.30492 19.7502C7.14454 18.5898 6.49265 17.016 6.49265 15.375M12.6801 15.375H13.4301C15.0712 15.375 16.645 14.7231 17.8054 13.5627C18.9657 12.4023 19.6176 10.8285 19.6176 9.1875C19.6176 7.54647 18.9657 5.97266 17.8054 4.81228C16.645 3.6519 15.0712 3 13.4301 3H12.6801" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    