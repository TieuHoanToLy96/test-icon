<script>
export default {
  name: 'direction-sign-off',
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
<path d="M18.73 14.7239L20.679 12.7739C20.8842 12.5686 20.9995 12.2902 20.9995 11.9999C20.9995 11.7097 20.8842 11.4313 20.679 11.2259L12.774 3.32092C12.5687 3.11574 12.2903 3.00049 12 3.00049C11.7098 3.00049 11.4314 3.11574 11.226 3.32092L9.27605 5.27092M7.26605 7.28092L3.32105 11.2259C3.11587 11.4313 3.00061 11.7097 3.00061 11.9999C3.00061 12.2902 3.11587 12.5686 3.32105 12.7739L11.226 20.6789C11.653 21.1069 12.346 21.1069 12.774 20.6789L16.724 16.7289" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.748 13.752L12 15.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    