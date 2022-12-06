<script>
export default {
  name: 'bell-simple-z',
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
<path d="M9.52906 21H15.5291M10.6541 9H14.4041L10.6541 13.5H14.4041M5.79809 9.75C5.79685 8.86051 5.97167 7.97957 6.31248 7.15796C6.65329 6.33635 7.15335 5.59031 7.78383 4.96286C8.4143 4.33541 9.16274 3.83895 9.98598 3.5021C10.8092 3.16525 11.691 2.99467 12.5805 3.00019C16.292 3.02778 19.2608 6.11282 19.2608 9.83474V10.5C19.2608 13.8577 19.9633 15.8062 20.582 16.8711C20.6486 16.9849 20.6841 17.1142 20.6848 17.2461C20.6855 17.378 20.6514 17.5077 20.586 17.6222C20.5206 17.7367 20.4261 17.8319 20.3121 17.8982C20.1982 17.9646 20.0687 17.9997 19.9368 18H5.12128C4.98939 17.9997 4.85992 17.9645 4.74594 17.8982C4.63196 17.8318 4.53749 17.7366 4.47206 17.6221C4.40664 17.5076 4.37257 17.3778 4.3733 17.2459C4.37403 17.1141 4.40953 16.9847 4.47621 16.8709C5.09527 15.806 5.79809 13.8575 5.79809 10.5L5.79809 9.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    