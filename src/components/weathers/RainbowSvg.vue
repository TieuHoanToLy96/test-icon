<script>
export default {
  name: 'rainbow-svg',
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
<path d="M16.9119 17.25V15.75C16.9119 14.5565 16.4378 13.4119 15.5938 12.568C14.7499 11.7241 13.6053 11.25 12.4119 11.25C11.2184 11.25 10.0738 11.7241 9.22988 12.568C8.38597 13.4119 7.91186 14.5565 7.91186 15.75V17.25M19.9119 17.25V15.75C19.9119 13.7609 19.1217 11.8532 17.7152 10.4467C16.3086 9.04018 14.401 8.25 12.4119 8.25C10.4227 8.25 8.51509 9.04018 7.10856 10.4467C5.70204 11.8532 4.91187 13.7609 4.91187 15.75V17.25M22.9119 17.25V15.75C22.9119 12.9652 21.8056 10.2945 19.8365 8.32538C17.8674 6.35625 15.1966 5.25 12.4119 5.25C9.62709 5.25 6.95638 6.35625 4.98724 8.32538C3.01811 10.2945 1.91187 12.9652 1.91187 15.75V17.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    