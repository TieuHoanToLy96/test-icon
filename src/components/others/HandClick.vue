<script>
export default {
  name: 'hand-click',
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
<path d="M8 13V4.5C8 4.10218 8.15804 3.72064 8.43934 3.43934C8.72064 3.15804 9.10218 3 9.5 3C9.89782 3 10.2794 3.15804 10.5607 3.43934C10.842 3.72064 11 4.10218 11 4.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 11.5V9.5C11 9.10218 11.158 8.72064 11.4393 8.43934C11.7206 8.15804 12.1022 8 12.5 8C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10.5C14 10.1022 14.158 9.72064 14.4393 9.43934C14.7206 9.15804 15.1022 9 15.5 9C15.8978 9 16.2794 9.15804 16.5607 9.43934C16.842 9.72064 17 10.1022 17 10.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9999 11.5C16.9999 11.1022 17.158 10.7206 17.4393 10.4393C17.7206 10.158 18.1021 10 18.4999 10C18.8978 10 19.2793 10.158 19.5606 10.4393C19.8419 10.7206 19.9999 11.1022 19.9999 11.5V16C19.9999 17.5913 19.3678 19.1174 18.2426 20.2426C17.1174 21.3679 15.5912 22 13.9999 22H11.9999H12.2079C11.2143 22.0002 10.2361 21.7535 9.36132 21.2823C8.48652 20.811 7.74245 20.1299 7.19594 19.3L6.99994 19C6.68794 18.521 5.59294 16.612 3.71394 13.272C3.52239 12.9315 3.47122 12.5298 3.57132 12.1522C3.67142 11.7745 3.91489 11.4509 4.24994 11.25C4.60682 11.0359 5.02501 10.9471 5.4381 10.9978C5.85119 11.0486 6.23548 11.2359 6.52994 11.53L7.99994 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 3L4 2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3L15 2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    