<script>
export default {
  name: 'medium-logo',
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
<path d="M22.9118 6.75V17.25M12.4118 12C12.4118 15.1066 10.0613 17.625 7.1618 17.625C4.26231 17.625 1.9118 15.1066 1.9118 12C1.9118 8.8934 4.26231 6.375 7.1618 6.375C10.0613 6.375 12.4118 8.8934 12.4118 12ZM19.9118 12C19.9118 14.8995 18.9044 17.25 17.6618 17.25C16.4192 17.25 15.4118 14.8995 15.4118 12C15.4118 9.10051 16.4192 6.75 17.6618 6.75C18.9044 6.75 19.9118 9.10051 19.9118 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    