<script>
export default {
  name: 'dots-three',
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
<path d="M12.886 13.0625C13.4383 13.0625 13.886 12.6148 13.886 12.0625C13.886 11.5102 13.4383 11.0625 12.886 11.0625C12.3337 11.0625 11.886 11.5102 11.886 12.0625C11.886 12.6148 12.3337 13.0625 12.886 13.0625Z" fill="currentColor"/>
<path d="M6.88599 13.0625C7.43827 13.0625 7.88599 12.6148 7.88599 12.0625C7.88599 11.5102 7.43827 11.0625 6.88599 11.0625C6.3337 11.0625 5.88599 11.5102 5.88599 12.0625C5.88599 12.6148 6.3337 13.0625 6.88599 13.0625Z" fill="currentColor"/>
<path d="M18.886 13.0625C19.4383 13.0625 19.886 12.6148 19.886 12.0625C19.886 11.5102 19.4383 11.0625 18.886 11.0625C18.3337 11.0625 17.886 11.5102 17.886 12.0625C17.886 12.6148 18.3337 13.0625 18.886 13.0625Z" fill="currentColor"/>
</svg>

</template>
    