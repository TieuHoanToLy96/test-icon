<script>
export default {
  name: 'radioactive-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.118 14.127C13.936 14.308 13.728 14.468 13.5 14.6L16.5 19.79C17.178 19.3985 17.8019 18.9201 18.356 18.367M20.036 16.047C20.6692 14.7919 20.9994 13.4058 21 12H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5001 9.40013L16.5001 4.21013C15.2093 3.46488 13.7535 3.05189 12.2637 3.00825C10.7738 2.96462 9.29636 3.2917 7.96411 3.96013" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 14.6L7.5 19.79C6.13245 19.0004 4.99671 17.865 4.20683 16.4976C3.41695 15.1302 3.00074 13.5791 3 12H9C8.99966 12.5269 9.13812 13.0447 9.40144 13.5011C9.66476 13.9575 10.0437 14.3365 10.5 14.6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    