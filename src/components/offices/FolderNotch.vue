<script>
export default {
  name: 'folder-notch',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 7.5H20.2502C20.4492 7.5 20.6399 7.57902 20.7806 7.71967C20.9212 7.86032 21.0002 8.05109 21.0002 8.25V18.75C21.0002 18.9489 20.9212 19.1397 20.7806 19.2803C20.6399 19.421 20.4492 19.5 20.2502 19.5H3.75024C3.55151 19.4994 3.36108 19.4202 3.22056 19.2797C3.08003 19.1392 3.00083 18.9487 3.00024 18.75V9.75M12.0002 7.5L9.20024 5.4C9.07042 5.30263 8.91252 5.25 8.75024 5.25H3.75024C3.55133 5.25 3.36057 5.32902 3.21991 5.46967C3.07926 5.61032 3.00024 5.80109 3.00024 6V9.75M12.0002 7.5L9.20024 9.6C9.07042 9.69737 8.91252 9.75 8.75024 9.75H3.00024" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    