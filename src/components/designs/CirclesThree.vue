<script>
export default {
  name: 'circles-three',
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
<path d="M12.8236 10.125C14.8947 10.125 16.5736 8.44607 16.5736 6.375C16.5736 4.30393 14.8947 2.625 12.8236 2.625C10.7525 2.625 9.07361 4.30393 9.07361 6.375C9.07361 8.44607 10.7525 10.125 12.8236 10.125Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4486 19.875C20.5197 19.875 22.1986 18.1961 22.1986 16.125C22.1986 14.0539 20.5197 12.375 18.4486 12.375C16.3775 12.375 14.6986 14.0539 14.6986 16.125C14.6986 18.1961 16.3775 19.875 18.4486 19.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.19861 19.875C9.26968 19.875 10.9486 18.1961 10.9486 16.125C10.9486 14.0539 9.26968 12.375 7.19861 12.375C5.12754 12.375 3.44861 14.0539 3.44861 16.125C3.44861 18.1961 5.12754 19.875 7.19861 19.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    