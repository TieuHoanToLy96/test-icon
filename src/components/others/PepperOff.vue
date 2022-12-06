<script>
export default {
  name: 'pepper-off',
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
<path d="M12.59 12.5901C11.82 14.0081 10.055 15.0001 8 15.0001C5.239 15.0001 3 13.2101 3 11.0001C3.00013 12.5807 3.46843 14.1257 4.34581 15.4404C5.22318 16.755 6.47031 17.7803 7.92981 18.3869C9.38931 18.9935 10.9958 19.1541 12.5465 18.8486C14.0972 18.543 15.5227 17.785 16.643 16.6701M18.283 14.3131C18.7568 13.273 19.0013 12.1431 19 11.0001C19.0004 10.3484 18.7885 9.71432 18.3964 9.19373C18.0043 8.67314 17.4534 8.29439 16.8269 8.11475C16.2004 7.93511 15.5325 7.96437 14.9241 8.19808C14.3158 8.4318 13.8001 8.85728 13.455 9.41015" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8C16 6 18 4 20 4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    