<script>
export default {
  name: 'at-off',
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
<path d="M9.17394 9.17C8.42231 9.91871 7.9989 10.9353 7.99683 11.9962C7.99477 13.0571 8.41423 14.0754 9.16294 14.827C9.91164 15.5786 10.9283 16.002 11.9892 16.0041C13.0501 16.0062 14.0683 15.5867 14.8199 14.838M15.9999 12C15.9999 10.9391 15.5785 9.92172 14.8284 9.17157C14.0782 8.42143 13.0608 8 11.9999 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.695 15.6971C20.09 15.4821 20.4197 15.1646 20.6494 14.7779C20.8791 14.3912 21.0002 13.9498 21 13.5001V12.0001C21.0021 10.4621 20.61 8.94919 19.8612 7.6058C19.1123 6.26241 18.0317 5.13334 16.7225 4.32632C15.4132 3.5193 13.919 3.06126 12.3824 2.99592C10.8457 2.93058 9.31803 3.26011 7.94498 3.95306M5.62298 5.63606C4.1501 7.11376 3.23637 9.05729 3.03807 11.1342C2.83977 13.2112 3.36922 15.2925 4.53587 17.0222C5.70252 18.7519 7.43388 20.0225 9.43384 20.6168C11.4338 21.2111 13.5781 21.092 15.5 20.2801" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    