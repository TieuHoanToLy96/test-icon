<script>
export default {
  name: 'coffee-svg',
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
<path d="M7.90498 4V6.66661M10.6742 4V6.66661M13.4434 4V6.66661M3.05882 19.9997H18.2896M7.49794 20C6.17303 19.4143 5.05048 18.4749 4.26361 17.2931C3.47673 16.1113 3.05859 14.7369 3.05882 13.3331V9.33322H18.2896M18.2896 9.33322V13.3331C18.2898 14.737 17.8717 16.1114 17.0848 17.2931C16.2979 18.4749 15.1753 19.4144 13.8504 20M18.2896 9.33322C19.024 9.33322 19.7284 9.61417 20.2477 10.1143C20.7671 10.6143 21.0588 11.2926 21.0588 11.9998V12.6665C21.0588 13.3737 20.7671 14.052 20.2477 14.5521C19.7284 15.0521 19.024 15.3331 18.2896 15.3331H17.9972" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    