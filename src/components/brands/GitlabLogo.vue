<script>
export default {
  name: 'gitlab-logo',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.84007 10.5H16.2776M7.84007 10.5L5.72031 4.84734C5.69241 4.77292 5.64158 4.70929 5.57516 4.66564C5.50874 4.62198 5.43017 4.60056 5.35079 4.60446C5.27141 4.60836 5.19532 4.63738 5.1335 4.68733C5.07168 4.73728 5.02733 4.80559 5.00685 4.88238L2.44473 14.4904C2.40493 14.6396 2.41218 14.7975 2.46547 14.9424C2.51877 15.0874 2.61551 15.2123 2.7425 15.3002L11.6319 21.4545C11.7573 21.5413 11.9063 21.5878 12.0588 21.5878C12.2114 21.5878 12.3603 21.5413 12.4857 21.4545L21.3751 15.3002C21.5021 15.2123 21.5989 15.0874 21.6522 14.9424C21.7055 14.7975 21.7127 14.6396 21.6729 14.4904L19.1108 4.88238C19.0903 4.80559 19.046 4.73728 18.9841 4.68733C18.9223 4.63738 18.8462 4.60836 18.7668 4.60446C18.6875 4.60056 18.6089 4.62198 18.5425 4.66563C18.4761 4.70929 18.4252 4.77292 18.3973 4.84733L16.2776 10.5M7.84007 10.5H3.50882M7.84007 10.5L11.997 21.5853M16.2776 10.5L12.1206 21.5853M16.2776 10.5H20.6088" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    