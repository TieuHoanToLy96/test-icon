<script>
export default {
  name: 'gitlab-logo-simple',
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
<path d="M7.89891 10.5H16.3364L18.4562 4.84733C18.4841 4.77292 18.5349 4.70929 18.6013 4.66563C18.6677 4.62198 18.7463 4.60056 18.8257 4.60446C18.9051 4.60836 18.9812 4.63738 19.043 4.68733C19.1048 4.73728 19.1491 4.80559 19.1696 4.88238L21.7317 14.4904C21.7715 14.6396 21.7643 14.7975 21.711 14.9424C21.6577 15.0874 21.561 15.2123 21.434 15.3002L12.5446 21.4545C12.4191 21.5413 12.2702 21.5878 12.1177 21.5878C11.9651 21.5878 11.8162 21.5413 11.6907 21.4545L2.80133 15.3002C2.67435 15.2123 2.57761 15.0874 2.52431 14.9424C2.47102 14.7975 2.46377 14.6396 2.50356 14.4904L5.06569 4.88238C5.08617 4.80559 5.13052 4.73728 5.19233 4.68733C5.25415 4.63738 5.33024 4.60836 5.40963 4.60446C5.48901 4.60056 5.56758 4.62198 5.634 4.66564C5.70041 4.70929 5.75124 4.77292 5.77915 4.84734L7.89891 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    