<script>
export default {
  name: 'fingerprint-off',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8999 7C19.8044 8.50118 20.1908 10.2578 19.9999 12V13C19.9987 14.0529 20.2746 15.0875 20.7999 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.0001C8 10.1521 8.264 9.3661 8.713 8.7201M11.113 7.0991C11.6987 6.96589 12.307 6.96632 12.8925 7.10036C13.4781 7.2344 14.0259 7.4986 14.4954 7.87335C14.9649 8.24811 15.3439 8.72379 15.6044 9.26509C15.8649 9.80638 16.0001 10.3994 16 11.0001L15.999 12.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V13C11.9968 15.8594 12.8693 18.6512 14.5 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 15C8.2447 17.0898 8.85393 19.1206 9.8 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.89994 19.0002C4.22518 16.7305 3.92127 14.3668 3.99994 12.0002V11.0002C3.99482 9.12135 4.65117 7.30064 5.85394 5.85721M8.02994 4.03221C9.24409 3.33836 10.6189 2.97489 12.0173 2.97805C13.4158 2.98121 14.7889 3.35088 15.9999 4.05021" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    