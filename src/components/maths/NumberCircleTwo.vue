<script>
export default {
  name: 'number-circle-two',
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
<path d="M10.221 8.8742C10.3432 8.58514 10.5245 8.32482 10.7532 8.10998C10.982 7.89514 11.2531 7.73051 11.5493 7.62668C11.8454 7.52285 12.16 7.4821 12.4728 7.50706C12.7856 7.53202 13.0898 7.62214 13.3657 7.77161C13.6417 7.92109 13.8833 8.12663 14.0751 8.37503C14.2668 8.62343 14.4046 8.90919 14.4793 9.21397C14.5541 9.51875 14.5644 9.8358 14.5093 10.1448C14.4543 10.4537 14.3353 10.7478 14.1599 11.008L10.0442 16.5L14.5442 16.4995M21.2942 12C21.2942 16.9706 17.2648 21 12.2942 21C7.32363 21 3.29419 16.9706 3.29419 12C3.29419 7.02944 7.32363 3 12.2942 3C17.2648 3 21.2942 7.02944 21.2942 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    