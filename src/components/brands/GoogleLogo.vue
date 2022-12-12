<script>
export default {
  name: 'google-logo',
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
<path d="M12.1765 12H20.4265C20.4265 13.9087 19.7646 15.7583 18.5538 17.2338C17.3429 18.7092 15.658 19.7191 13.786 20.0915C11.9139 20.4639 9.97074 20.1756 8.28743 19.2759C6.60413 18.3761 5.28487 16.9205 4.55445 15.1572C3.82403 13.3938 3.72764 11.4317 4.2817 9.60516C4.83576 7.77867 6.00599 6.2008 7.593 5.14039C9.18001 4.07998 11.0856 3.60266 12.9851 3.78974C14.8846 3.97682 16.6604 4.81674 18.0101 6.16638" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    