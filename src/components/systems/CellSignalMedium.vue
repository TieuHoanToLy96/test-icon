<script>
export default {
  name: 'cell-signal-medium',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8383 9.75001V20.25M19.3383 4.06067V19.5C19.3383 19.6989 19.2592 19.8897 19.1186 20.0303C18.9779 20.171 18.7872 20.25 18.5883 20.25H3.14893C3.00059 20.25 2.85559 20.206 2.73225 20.1236C2.60891 20.0412 2.51278 19.9241 2.45602 19.787C2.39925 19.65 2.3844 19.4992 2.41334 19.3537C2.44228 19.2082 2.51371 19.0746 2.6186 18.9697L18.0579 3.53034C18.1628 3.42545 18.2965 3.35402 18.442 3.32508C18.5874 3.29614 18.7382 3.31099 18.8753 3.36776C19.0123 3.42453 19.1295 3.52065 19.2119 3.64399C19.2943 3.76733 19.3383 3.91233 19.3383 4.06067Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    