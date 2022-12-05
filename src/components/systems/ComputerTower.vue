<script>
export default {
  name: 'computer-tower',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5291 6.75H9.52905M15.5291 9.75H9.52905M19.2791 3.75V20.25C19.2791 20.6642 18.9433 21 18.5291 21H6.52905C6.11484 21 5.77905 20.6642 5.77905 20.25V3.75C5.77905 3.33579 6.11484 3 6.52905 3H18.5291C18.9433 3 19.2791 3.33579 19.2791 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5282 17.8125C13.0455 17.8125 13.4648 17.3928 13.4648 16.875C13.4648 16.3572 13.0455 15.9375 12.5282 15.9375C12.0109 15.9375 11.5916 16.3572 11.5916 16.875C11.5916 17.3928 12.0109 17.8125 12.5282 17.8125Z" fill="currentColor"/>
</svg>

</template>
    