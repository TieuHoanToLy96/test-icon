<script>
export default {
  name: 'sun-high',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8279 14.8278C15.21 14.4588 15.5147 14.0175 15.7243 13.5295C15.934 13.0414 16.0443 12.5166 16.0489 11.9854C16.0535 11.4543 15.9523 10.9276 15.7512 10.436C15.5501 9.94443 15.2531 9.49783 14.8775 9.12226C14.5019 8.74669 14.0553 8.44967 13.5637 8.24855C13.0722 8.04743 12.5454 7.94622 12.0143 7.95083C11.4832 7.95545 10.9583 8.0658 10.4703 8.27543C9.98229 8.48507 9.54091 8.7898 9.17192 9.17184C8.44329 9.92624 8.04011 10.9367 8.04922 11.9854C8.05834 13.0342 8.47901 14.0375 9.22065 14.7791C9.96228 15.5207 10.9655 15.9414 12.0143 15.9505C13.0631 15.9596 14.0735 15.5565 14.8279 14.8278V14.8278Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.34296 17.6572L4.92896 19.0712" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.34296 6.3432L4.92896 4.9292" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.657 6.3432L19.071 4.9292" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.657 17.6572L19.071 19.0712" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    