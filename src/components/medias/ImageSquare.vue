<script>
export default {
  name: 'image-square',
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
<path d="M21.2942 15.2727L16.9636 10.9422C16.8102 10.7887 16.6021 10.7025 16.3851 10.7025C16.1681 10.7025 15.96 10.7887 15.8066 10.9422L11.2364 15.5124C11.0829 15.6658 10.8748 15.752 10.6578 15.752C10.4408 15.752 10.2327 15.6658 10.0793 15.5124L7.96364 13.3967C7.8102 13.2433 7.60209 13.1571 7.3851 13.1571C7.1681 13.1571 6.95999 13.2433 6.80655 13.3967L3.29419 16.9091M4.11237 3H20.476C20.9279 3 21.2942 3.36631 21.2942 3.81818V20.1818C21.2942 20.6337 20.9279 21 20.476 21H4.11237C3.6605 21 3.29419 20.6337 3.29419 20.1818V3.81818C3.29419 3.36631 3.6605 3 4.11237 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.66833 9.5625C10.1856 9.5625 10.605 9.14277 10.605 8.625C10.605 8.10723 10.1856 7.6875 9.66833 7.6875C9.15104 7.6875 8.73169 8.10723 8.73169 8.625C8.73169 9.14277 9.15104 9.5625 9.66833 9.5625Z" fill="currentColor"/>
</svg>

</template>
    