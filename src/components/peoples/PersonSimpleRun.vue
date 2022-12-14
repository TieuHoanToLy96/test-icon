<script>
export default {
  name: 'person-simple-run',
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
<path d="M5.30884 9.52041C5.30884 9.52041 8.30884 6.75 12.8088 10.2704C17.5403 13.9719 20.3088 12.5204 20.3088 12.5204M12.7222 10.2033C12.3151 12.1163 9.57994 19.4021 3.05884 18.75M10.4318 15.1088C12.1028 15.4658 16.5588 16.875 16.5588 21.75M16.5588 5.25C16.5588 6.49264 15.5515 7.5 14.3088 7.5C13.0662 7.5 12.0588 6.49264 12.0588 5.25C12.0588 4.00736 13.0662 3 14.3088 3C15.5515 3 16.5588 4.00736 16.5588 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    