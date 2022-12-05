<script>
export default {
  name: 'globe-stand',
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
<path d="M19.5415 15.8937C17.713 17.7222 15.2331 18.7494 12.6472 18.7494M12.6472 18.7494C10.0614 18.7494 7.58141 17.7222 5.75293 15.8937C3.92445 14.0652 2.89722 11.5853 2.89722 8.99939C2.89722 6.41353 3.92445 3.93358 5.75293 2.1051M12.6472 18.7494V21.7494M9.64722 21.7494H15.6472M19.3972 8.99939C19.3972 12.7273 16.3751 15.7494 12.6472 15.7494C8.91929 15.7494 5.89722 12.7273 5.89722 8.99939C5.89722 5.27147 8.91929 2.24939 12.6472 2.24939C16.3751 2.24939 19.3972 5.27147 19.3972 8.99939Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    