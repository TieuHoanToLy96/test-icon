<script>
export default {
  name: 'heart-minus',
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
<path d="M13.0001 19.0002L12.0001 20.0002L4.50006 12.5722C4.00536 12.0908 3.6157 11.5122 3.3556 10.8728C3.09551 10.2334 2.97062 9.54713 2.98879 8.85711C3.00697 8.16709 3.16782 7.48831 3.46121 6.86351C3.75461 6.23871 4.17419 5.68143 4.69354 5.22676C5.21289 4.77208 5.82076 4.42987 6.47887 4.22166C7.13697 4.01345 7.83106 3.94376 8.51743 4.01698C9.20379 4.0902 9.86756 4.30473 10.4669 4.64708C11.0663 4.98943 11.5883 5.45218 12.0001 6.00618C12.7957 4.94531 13.9802 4.24397 15.2929 4.05643C16.6057 3.86889 17.9392 4.21053 19.0001 5.00618C20.0609 5.80183 20.7623 6.98631 20.9498 8.29907C21.1373 9.61182 20.7957 10.9453 20.0001 12.0062" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    