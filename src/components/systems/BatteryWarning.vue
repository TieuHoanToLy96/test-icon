<script>
export default {
  name: 'battery-warning',
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
<path d="M12.0955 8.25V12M23.7205 9V15M20.7205 6.75V17.25C20.7205 18.0784 20.0489 18.75 19.2205 18.75H4.97046C4.14203 18.75 3.47046 18.0784 3.47046 17.25V6.75C3.47046 5.92157 4.14203 5.25 4.97046 5.25H19.2205C20.0489 5.25 20.7205 5.92157 20.7205 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0946 16.3125C12.6119 16.3125 13.0312 15.8928 13.0312 15.375C13.0312 14.8572 12.6119 14.4375 12.0946 14.4375C11.5773 14.4375 11.158 14.8572 11.158 15.375C11.158 15.8928 11.5773 16.3125 12.0946 16.3125Z" fill="currentColor"/>
</svg>

</template>
    