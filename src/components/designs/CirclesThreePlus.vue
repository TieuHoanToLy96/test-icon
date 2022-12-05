<script>
export default {
  name: 'circles-three-plus',
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
<path d="M17.7573 14.25V19.5M20.3823 16.875H15.1323M11.3823 7.125C11.3823 8.98896 9.87129 10.5 8.00732 10.5C6.14336 10.5 4.63232 8.98896 4.63232 7.125C4.63232 5.26104 6.14336 3.75 8.00732 3.75C9.87129 3.75 11.3823 5.26104 11.3823 7.125ZM21.1323 7.125C21.1323 8.98896 19.6213 10.5 17.7573 10.5C15.8934 10.5 14.3823 8.98896 14.3823 7.125C14.3823 5.26104 15.8934 3.75 17.7573 3.75C19.6213 3.75 21.1323 5.26104 21.1323 7.125ZM11.3823 16.875C11.3823 18.739 9.87129 20.25 8.00732 20.25C6.14336 20.25 4.63232 18.739 4.63232 16.875C4.63232 15.011 6.14336 13.5 8.00732 13.5C9.87129 13.5 11.3823 15.011 11.3823 16.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    