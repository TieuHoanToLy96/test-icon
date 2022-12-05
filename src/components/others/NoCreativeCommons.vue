<script>
export default {
  name: 'no-creative-commons',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 10.4998C9.65296 9.78979 8.36796 9.84179 7.58596 10.6158C7.40065 10.7955 7.25331 11.0106 7.1527 11.2484C7.05209 11.4861 7.00024 11.7416 7.00024 11.9998C7.00024 12.2579 7.05209 12.5135 7.1527 12.7512C7.25331 12.989 7.40065 13.2041 7.58596 13.3838C8.36796 14.1578 9.65296 14.2088 10.5 13.4998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 10.4998C15.653 9.78979 14.368 9.84179 13.586 10.6158C13.4006 10.7955 13.2533 11.0106 13.1527 11.2484C13.0521 11.4861 13.0002 11.7416 13.0002 11.9998C13.0002 12.2579 13.0521 12.5135 13.1527 12.7512C13.2533 12.989 13.4006 13.2041 13.586 13.3838C14.368 14.1578 15.653 14.2088 16.5 13.4998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L7.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 16.5L18 18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    