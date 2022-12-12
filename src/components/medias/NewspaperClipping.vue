<script>
export default {
  name: 'newspaper-clipping',
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
<path d="M13.7942 10.5H18.2942M13.7942 13.5H18.2942M3.29419 20.25V5.25C3.29419 5.05109 3.37321 4.86032 3.51386 4.71967C3.65451 4.57902 3.84528 4.5 4.04419 4.5H20.5442C20.7431 4.5 20.9339 4.57902 21.0745 4.71967C21.2152 4.86032 21.2942 5.05109 21.2942 5.25V20.25L18.2942 18.75L15.2942 20.25L12.2942 18.75L9.29419 20.25L6.29419 18.75L3.29419 20.25ZM6.29419 9H10.7942V15H6.29419V9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    