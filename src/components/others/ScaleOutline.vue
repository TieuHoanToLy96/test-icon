<script>
export default {
  name: 'scale-outline',
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
<path d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 7.00001C13.9559 7.00001 15.7239 7.80201 16.9939 9.09501L14.0379 11.999C13.4834 11.4855 12.7556 11.2001 11.9999 11.2C11.2443 11.1999 10.5165 11.4848 9.96186 11.998L7.00586 9.09501C7.6567 8.43067 8.43375 7.90312 9.29136 7.54335C10.149 7.18358 11.0698 6.99884 11.9999 7.00001V7.00001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    