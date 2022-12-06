<script>
export default {
  name: 'volume-off',
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
<path d="M15 8C15.7483 8.56124 16.3242 9.32114 16.6622 10.1933C17.0002 11.0655 17.0867 12.0151 16.912 12.934M15.535 15.536C15.3679 15.7031 15.1891 15.8582 15 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.7 5C19.3049 6.29704 20.4154 8.10621 20.8454 10.1244C21.2754 12.1427 20.9988 14.2474 20.062 16.086M18.386 18.385C18.1679 18.6016 17.939 18.8068 17.7 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.069 5.05422L9.5 4.50022C9.5874 4.33045 9.73265 4.19754 9.90949 4.12551C10.0863 4.05348 10.2831 4.04708 10.4643 4.10746C10.6454 4.16784 10.799 4.29103 10.8972 4.45476C10.9955 4.61849 11.0319 4.81196 11 5.00022V7.00022M11 11.0002V19.0002C11.0319 19.1885 10.9955 19.3819 10.8972 19.5457C10.799 19.7094 10.6454 19.8326 10.4643 19.893C10.2831 19.9534 10.0863 19.947 9.90949 19.8749C9.73265 19.8029 9.5874 19.67 9.5 19.5002L6 15.0002H4C3.73478 15.0002 3.48043 14.8949 3.29289 14.7073C3.10536 14.5198 3 14.2654 3 14.0002V10.0002C3 9.735 3.10536 9.48065 3.29289 9.29311C3.48043 9.10557 3.73478 9.00022 4 9.00022H6L7.294 7.33622" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    