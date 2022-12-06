<script>
export default {
  name: 'person-simple-walk',
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
<path d="M4.50024 12C4.50024 12 9.75024 6.75 12.7502 9.52041C14.4322 11.0736 15.7502 13.5 19.5002 13.5M12.2356 9.13366L6.75024 21.75M14.2502 21.75V16.5L10.2692 13.6564M16.5002 4.5C16.5002 5.74264 15.4929 6.75 14.2502 6.75C13.0076 6.75 12.0002 5.74264 12.0002 4.5C12.0002 3.25736 13.0076 2.25 14.2502 2.25C15.4929 2.25 16.5002 3.25736 16.5002 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    