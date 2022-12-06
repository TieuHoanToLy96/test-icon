<script>
export default {
  name: 'file-zip',
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
<path d="M3.6001 12.3913V3.78261C3.6001 3.57505 3.6886 3.37599 3.84613 3.22922C4.00366 3.08245 4.21732 3 4.4401 3H14.5201M14.5201 3L20.4001 8.47826M14.5201 3V8.47826H20.4001M20.4001 8.47826V12.3913M16.2001 19.4348H17.8801C18.3257 19.4348 18.753 19.2699 19.068 18.9763C19.3831 18.6828 19.5601 18.2847 19.5601 17.8696C19.5601 17.4544 19.3831 17.0563 19.068 16.7628C18.753 16.4693 18.3257 16.3043 17.8801 16.3043H16.2001V21M12.0001 16.3043V21M4.4401 16.3043H7.8001L4.4401 21H7.8001" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    