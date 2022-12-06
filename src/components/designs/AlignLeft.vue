<script>
export default {
  name: 'align-left',
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
<path d="M4.5141 3.74954V20.2495M8.26465 5.25H17.2646C17.6789 5.25 18.0146 5.58579 18.0146 6V9.75C18.0146 10.1642 17.6789 10.5 17.2646 10.5H8.26465C7.85043 10.5 7.51465 10.1642 7.51465 9.75V6C7.51465 5.58579 7.85043 5.25 8.26465 5.25ZM8.26465 13.5H21.0146C21.4289 13.5 21.7646 13.8358 21.7646 14.25V18C21.7646 18.4142 21.4289 18.75 21.0146 18.75H8.26465C7.85043 18.75 7.51465 18.4142 7.51465 18V14.25C7.51465 13.8358 7.85043 13.5 8.26465 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    