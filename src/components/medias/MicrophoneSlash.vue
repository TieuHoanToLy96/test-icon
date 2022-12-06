<script>
export default {
  name: 'microphone-slash',
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
<path d="M12.4117 18.75V21.75M4.91174 3.75L19.9117 20.25M14.9343 14.7748C14.2447 15.4035 13.3449 15.7513 12.4118 15.75C11.4172 15.75 10.4634 15.3549 9.76009 14.6517C9.05683 13.9484 8.66174 12.9946 8.66174 12V7.875M16.9523 16.9946C16.0319 17.8313 14.8983 18.3974 13.6765 18.6304C12.4547 18.8635 11.1922 18.7545 10.0285 18.3154C8.86476 17.8763 7.84496 17.1242 7.08166 16.1421C6.31836 15.16 5.84123 13.9861 5.70294 12.75M19.1205 12.75C19.0409 13.4726 18.8443 14.1775 18.5384 14.8369M9.22041 4.02978C9.55626 3.48544 10.0258 3.03612 10.5845 2.72458C11.1431 2.41305 11.7721 2.24967 12.4117 2.25C12.9042 2.25 13.3918 2.347 13.8468 2.53545C14.3018 2.72391 14.7152 3.00013 15.0634 3.34835C15.4116 3.69657 15.6878 4.10996 15.8763 4.56493C16.0647 5.0199 16.1617 5.50754 16.1617 5.99999V11.6652" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    