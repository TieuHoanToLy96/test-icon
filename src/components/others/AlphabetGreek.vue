<script>
export default {
  name: 'alphabet-greek',
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
<path d="M10 10V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10H7C5.89543 10 5 10.8954 5 12V15C5 16.1046 5.89543 17 7 17H8C9.10457 17 10 16.1046 10 15V12C10 10.8954 9.10457 10 8 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20V9C14 8.46957 14.2107 7.96086 14.5858 7.58579C14.9609 7.21071 15.4696 7 16 7H17C17.5304 7 18.0391 7.21071 18.4142 7.58579C18.7893 7.96086 19 8.46957 19 9V10C19 10.5304 18.7893 11.0391 18.4142 11.4142C18.0391 11.7893 17.5304 12 17 12C17.5304 12 18.0391 12.2107 18.4142 12.5858C18.7893 12.9609 19 13.4696 19 14V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    