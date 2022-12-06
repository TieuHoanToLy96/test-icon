<script>
export default {
  name: 'ghost-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.79402 4.77587C9.86119 4.22605 11.0518 3.95992 12.2515 4.00306C13.4512 4.04619 14.6197 4.39714 15.6446 5.02218C16.6696 5.64722 17.5165 6.52535 18.1041 7.57218C18.6917 8.61902 19.0002 9.79939 19 10.9999V14.9999M18.88 18.8979C18.7652 19.1778 18.581 19.4237 18.3447 19.6126C18.1084 19.8015 17.8278 19.9269 17.5296 19.9772C17.2313 20.0274 16.9251 20.0008 16.6399 19.8998C16.3548 19.7988 16.1001 19.6267 15.9 19.3999C15.7457 19.2024 15.5484 19.0427 15.3232 18.9329C15.0979 18.8231 14.8506 18.766 14.6 18.766C14.3494 18.766 14.1021 18.8231 13.8769 18.9329C13.6516 19.0427 13.4543 19.2024 13.3 19.3999C13.1457 19.5973 12.9484 19.757 12.7232 19.8668C12.4979 19.9767 12.2506 20.0338 12 20.0338C11.7494 20.0338 11.5021 19.9767 11.2769 19.8668C11.0516 19.757 10.8543 19.5973 10.7 19.3999C10.5457 19.2024 10.3484 19.0427 10.1232 18.9329C9.89792 18.8231 9.65062 18.766 9.40002 18.766C9.14942 18.766 8.90211 18.8231 8.67686 18.9329C8.45162 19.0427 8.25434 19.2024 8.10002 19.3999C7.84816 19.6849 7.51163 19.8817 7.13975 19.9615C6.76788 20.0413 6.38022 19.9999 6.03358 19.8434C5.68695 19.6869 5.39957 19.4234 5.21357 19.0916C5.02757 18.7599 4.95273 18.3773 5.00002 17.9999V10.9999C5.00002 9.31687 5.59402 7.77287 6.58302 6.56587" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10H14.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14C10.5869 14.4087 11.2849 14.6277 12 14.6277C12.7151 14.6277 13.4131 14.4087 14 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    