<script>
export default {
  name: 'align-right',
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
<path d="M21.0742 3.74954V20.2495M17.3236 10.5H8.32361C7.9094 10.5 7.57361 10.1642 7.57361 9.75V6C7.57361 5.58579 7.9094 5.25 8.32361 5.25H17.3236C17.7378 5.25 18.0736 5.58579 18.0736 6V9.75C18.0736 10.1642 17.7378 10.5 17.3236 10.5ZM4.57361 13.5H17.3236C17.7378 13.5 18.0736 13.8358 18.0736 14.25V18C18.0736 18.4142 17.7378 18.75 17.3236 18.75H4.57361C4.15939 18.75 3.82361 18.4142 3.82361 18V14.25C3.82361 13.8358 4.15939 13.5 4.57361 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    