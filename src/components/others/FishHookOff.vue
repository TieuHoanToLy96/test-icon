<script>
export default {
  name: 'fish-hook-off',
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
<path d="M16 9V12M15.915 15.924C15.6815 17.1455 15.0013 18.2362 14.0071 18.9834C13.013 19.7305 11.7761 20.0806 10.5378 19.9652C9.29958 19.8498 8.1487 19.2772 7.30971 18.3592C6.47072 17.4412 6.00379 16.2436 6 15V11L9 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9C17.1046 9 18 8.10457 18 7C18 5.89543 17.1046 5 16 5C14.8954 5 14 5.89543 14 7C14 8.10457 14.8954 9 16 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5V3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    