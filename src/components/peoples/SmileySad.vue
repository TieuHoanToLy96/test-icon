<script>
export default {
  name: 'smiley-sad',
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
<path d="M12.8823 21C17.8529 21 21.8823 16.9706 21.8823 12C21.8823 7.02944 17.8529 3 12.8823 3C7.91176 3 3.88232 7.02944 3.88232 12C3.88232 16.9706 7.91176 21 12.8823 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.50646 11.0625C10.0238 11.0625 10.4431 10.6428 10.4431 10.125C10.4431 9.60723 10.0238 9.1875 9.50646 9.1875C8.98917 9.1875 8.56982 9.60723 8.56982 10.125C8.56982 10.6428 8.98917 11.0625 9.50646 11.0625Z" fill="currentColor"/>
<path d="M16.2565 11.0625C16.7738 11.0625 17.1931 10.6428 17.1931 10.125C17.1931 9.60723 16.7738 9.1875 16.2565 9.1875C15.7392 9.1875 15.3198 9.60723 15.3198 10.125C15.3198 10.6428 15.7392 11.0625 16.2565 11.0625Z" fill="currentColor"/>
<path d="M16.7803 16.5C16.3852 15.8158 15.817 15.2477 15.1327 14.8527C14.4485 14.4577 13.6723 14.2498 12.8823 14.2498C12.0922 14.2498 11.316 14.4577 10.6318 14.8527C9.94751 15.2477 9.37927 15.8158 8.98413 16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    