<script>
export default {
  name: 'puzzle-2',
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
<path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V6.5C12 6.63261 11.9473 6.75979 11.8536 6.85355C11.7598 6.94732 11.6326 7 11.5 7C11.1022 7 10.7206 7.15804 10.4393 7.43934C10.158 7.72064 10 8.10218 10 8.5C10 8.89782 10.158 9.27936 10.4393 9.56066C10.7206 9.84196 11.1022 10 11.5 10C11.6326 10 11.7598 10.0527 11.8536 10.1464C11.9473 10.2402 12 10.3674 12 10.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V13.5C12 13.6326 12.0527 13.7598 12.1464 13.8536C12.2402 13.9473 12.3674 14 12.5 14C12.8978 14 13.2794 14.158 13.5607 14.4393C13.842 14.7206 14 15.1022 14 15.5C14 15.8978 13.842 16.2794 13.5607 16.5607C13.2794 16.842 12.8978 17 12.5 17C12.3674 17 12.2402 17.0527 12.1464 17.1464C12.0527 17.2402 12 17.3674 12 17.5V20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H17.5C17.3674 12 17.2402 11.9473 17.1464 11.8536C17.0527 11.7598 17 11.6326 17 11.5C17 11.1022 16.842 10.7206 16.5607 10.4393C16.2794 10.158 15.8978 10 15.5 10C15.1022 10 14.7206 10.158 14.4393 10.4393C14.158 10.7206 14 11.1022 14 11.5C14 11.6326 13.9473 11.7598 13.8536 11.8536C13.7598 11.9473 13.6326 12 13.5 12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12H10.5C10.3674 12 10.2402 12.0527 10.1464 12.1464C10.0527 12.2402 10 12.3674 10 12.5C10 12.8978 9.84196 13.2794 9.56066 13.5607C9.27936 13.842 8.89782 14 8.5 14C8.10218 14 7.72064 13.842 7.43934 13.5607C7.15804 13.2794 7 12.8978 7 12.5C7 12.3674 6.94732 12.2402 6.85355 12.1464C6.75979 12.0527 6.63261 12 6.5 12H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    