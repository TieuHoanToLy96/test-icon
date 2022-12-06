<script>
export default {
  name: 'battery-charging-vertical',
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
<path d="M9.69949 2H15.4773M12.5884 17.1852L14.0328 13.4815H11.1439L12.5884 9.77778M7.53282 4.96296H17.6439C18.4417 4.96296 19.0884 5.62624 19.0884 6.44444V20.5185C19.0884 21.3367 18.4417 22 17.6439 22H7.53282C6.73508 22 6.08838 21.3367 6.08838 20.5185V6.44444C6.08838 5.62624 6.73508 4.96296 7.53282 4.96296Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    