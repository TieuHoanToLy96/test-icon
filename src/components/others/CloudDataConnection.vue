<script>
export default {
  name: 'cloud-data-connection',
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
<path d="M5 9.89689C5 8.18289 6.46 6.79289 8.26 6.79289C8.535 5.57289 9.515 4.57789 10.832 4.18189C12.149 3.78489 13.602 4.04789 14.643 4.87189C15.685 5.69389 16.157 6.95189 15.882 8.17189H16.575C17.2167 8.17056 17.8326 8.42412 18.2873 8.8768C18.7421 9.32949 18.9984 9.94424 19 10.5859C18.9984 11.2275 18.7421 11.8423 18.2873 12.295C17.8326 12.7477 17.2167 13.0012 16.575 12.9999H8.26C6.46 12.9999 5 11.6099 5 9.89689V9.89689Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    