<script>
export default {
  name: 'scuba-mask-off',
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
<path d="M11 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V12.5C17 12.654 16.986 12.804 16.96 12.95M14.963 14.957C14.813 14.985 14.658 15 14.5 15H14C13.4696 15 12.9609 14.7893 12.5858 14.4142C12.2107 14.0391 12 13.5304 12 13C12 12.4696 11.7893 11.9609 11.4142 11.5858C11.0391 11.2107 10.5304 11 10 11C9.46957 11 8.96086 11.2107 8.58579 11.5858C8.21071 11.9609 8 12.4696 8 13C8 13.5304 7.78929 14.0391 7.41421 14.4142C7.03914 14.7893 6.53043 15 6 15H5.5C4.83696 15 4.20107 14.7366 3.73223 14.2678C3.26339 13.7989 3 13.163 3 12.5V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17C10 17.5304 10.2107 18.0391 10.5858 18.4142C10.9609 18.7893 11.4696 19 12 19H15.5C16.4713 19.0017 17.4256 18.7449 18.265 18.256M20.261 16.256C20.731 15.446 21 14.504 21 13.5V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    