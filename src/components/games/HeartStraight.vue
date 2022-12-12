<script>
export default {
  name: 'heart-straight',
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
<path d="M12.5891 19.864L20.1859 12.2672C22.0525 10.4006 22.3279 7.32976 20.5614 5.36811C20.119 4.87533 19.5807 4.47786 18.9796 4.19997C18.3784 3.92207 17.727 3.76956 17.0649 3.75176C16.4029 3.73396 15.7442 3.85123 15.129 4.09642C14.5138 4.34161 13.9549 4.70957 13.4866 5.17786L12.0588 6.60571L10.826 5.3729C8.95938 3.5063 5.88854 3.23091 3.92689 4.99735C3.43411 5.43981 3.03664 5.97804 2.75874 6.57919C2.48084 7.18034 2.32834 7.83181 2.31054 8.49384C2.29274 9.15588 2.41001 9.8146 2.65519 10.4298C2.90038 11.045 3.26835 11.6038 3.73664 12.0721L11.5285 19.864C11.6691 20.0046 11.8599 20.0836 12.0588 20.0836C12.2577 20.0836 12.4485 20.0046 12.5891 19.864V19.864Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    