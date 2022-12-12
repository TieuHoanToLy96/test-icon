<script>
export default {
  name: 'git-diff',
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
<path d="M18.6693 15C17.2196 15 16.0443 16.1753 16.0443 17.625C16.0443 19.0747 17.2196 20.25 18.6693 20.25C20.119 20.25 21.2943 19.0747 21.2943 17.625C21.2943 16.1753 20.119 15 18.6693 15ZM18.6693 15L18.6691 11.2389C18.6691 10.0454 18.195 8.90093 17.3511 8.05706L13.7941 4.5M13.7941 4.5V8.25M13.7941 4.5H17.5441M5.91907 9C7.36882 9 8.54407 7.82475 8.54407 6.375C8.54407 4.92525 7.36882 3.75 5.91907 3.75C4.46932 3.75 3.29407 4.92525 3.29407 6.375C3.29407 7.82475 4.46932 9 5.91907 9ZM5.91907 9L5.91922 12.7611C5.91927 13.9546 6.39337 15.0991 7.23724 15.9429L10.7943 19.5M10.7943 19.5L10.7943 15.75M10.7943 19.5H7.04426" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    