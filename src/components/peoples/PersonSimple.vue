<script>
export default {
  name: 'person-simple',
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
<path d="M12.9409 9.75V14.25M12.9409 9.75C7.69092 9.75 3.94092 12 3.94092 12M12.9409 9.75C18.1909 9.75 21.9409 12 21.9409 12M12.9409 14.25L6.94092 21M12.9409 14.25L18.9409 21M15.1804 4.5C15.1804 5.74264 14.173 6.75 12.9304 6.75C11.6877 6.75 10.6804 5.74264 10.6804 4.5C10.6804 3.25736 11.6877 2.25 12.9304 2.25C14.173 2.25 15.1804 3.25736 15.1804 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    