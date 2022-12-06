<script>
export default {
  name: 'gauge-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.038 16.0522C20.891 14.3626 21.1896 12.4472 20.8914 10.5781C20.5932 8.70909 19.7134 6.98163 18.377 5.64136C17.0406 4.3011 15.3157 3.41626 13.4475 3.11265C11.5794 2.80904 9.66302 3.10212 7.97099 3.95021M5.63798 5.63621C4.80238 6.47208 4.1396 7.46434 3.68748 8.55635C3.23535 9.64836 3.00274 10.8187 3.00293 12.0006C3.00312 13.1825 3.23609 14.3528 3.68856 15.4447C4.14103 16.5366 4.80412 17.5286 5.63998 18.3642C6.47585 19.1998 7.46811 19.8626 8.56012 20.3147C9.65213 20.7668 10.8225 20.9995 12.0044 20.9993C13.1863 20.9991 14.3566 20.7661 15.4485 20.3136C16.5403 19.8612 17.5324 19.1981 18.368 18.3622" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2829 11.3032C11.0959 11.4914 10.9913 11.7461 10.9922 12.0114C10.993 12.2767 11.0992 12.5307 11.2874 12.7177C11.4756 12.9047 11.7303 13.0093 11.9956 13.0084C12.2608 13.0076 12.5149 12.9014 12.7019 12.7132" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10L16 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12C7 10.614 7.564 9.36 8.475 8.454M11.094 7.082C11.388 7.028 11.691 7 12 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    