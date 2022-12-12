<script>
export default {
  name: 'battery-warning-vertical',
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
<path d="M12.5291 8.625V12.375M9.52905 0.75H15.5291M7.27905 3.75H17.7791C18.6075 3.75 19.2791 4.42157 19.2791 5.25V19.5C19.2791 20.3284 18.6075 21 17.7791 21H7.27905C6.45063 21 5.77905 20.3284 5.77905 19.5V5.25C5.77905 4.42157 6.45063 3.75 7.27905 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5282 16.6875C13.0455 16.6875 13.4648 16.2678 13.4648 15.75C13.4648 15.2322 13.0455 14.8125 12.5282 14.8125C12.0109 14.8125 11.5916 15.2322 11.5916 15.75C11.5916 16.2678 12.0109 16.6875 12.5282 16.6875Z" fill="currentColor"/>
</svg>

</template>
    