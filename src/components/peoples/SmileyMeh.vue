<script>
export default {
  name: 'smiley-meh',
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
<path d="M12.2354 21C17.2059 21 21.2354 16.9706 21.2354 12C21.2354 7.02944 17.2059 3 12.2354 3C7.26479 3 3.23535 7.02944 3.23535 12C3.23535 16.9706 7.26479 21 12.2354 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.48535 15H15.9854" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.85949 11.0625C9.37678 11.0625 9.79613 10.6428 9.79613 10.125C9.79613 9.60723 9.37678 9.1875 8.85949 9.1875C8.3422 9.1875 7.92285 9.60723 7.92285 10.125C7.92285 10.6428 8.3422 11.0625 8.85949 11.0625Z" fill="currentColor"/>
<path d="M15.6095 11.0625C16.1268 11.0625 16.5461 10.6428 16.5461 10.125C16.5461 9.60723 16.1268 9.1875 15.6095 9.1875C15.0922 9.1875 14.6729 9.60723 14.6729 10.125C14.6729 10.6428 15.0922 11.0625 15.6095 11.0625Z" fill="currentColor"/>
</svg>

</template>
    