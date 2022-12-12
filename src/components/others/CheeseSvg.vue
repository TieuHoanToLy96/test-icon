<script>
export default {
  name: 'cheese-svg',
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
<path d="M4.51895 20.008L21 20V16.5C20.4695 16.5 19.9608 16.2893 19.5857 15.9142C19.2107 15.5391 19 15.0304 19 14.5C19 13.9696 19.2107 13.4609 19.5857 13.0858C19.9608 12.7107 20.4695 12.5 21 12.5V9H4.27795" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9.00006L11.615 4.00806C9.103 4.12806 6.857 5.42806 5.288 7.43306C3.865 9.25306 3 11.6541 3 14.2871C3 16.4041 3.56 18.3721 4.519 20.0081" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13V13.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13V13.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 16V16.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    