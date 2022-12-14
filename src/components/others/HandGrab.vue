<script>
export default {
  name: 'hand-grab',
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
<path d="M8 11V7.5C8 7.10218 8.15804 6.72064 8.43934 6.43934C8.72064 6.15804 9.10218 6 9.5 6C9.89782 6 10.2794 6.15804 10.5607 6.43934C10.842 6.72064 11 7.10218 11 7.5V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 9.5V6.5C11 6.10218 11.158 5.72064 11.4393 5.43934C11.7206 5.15804 12.1022 5 12.5 5C12.8978 5 13.2794 5.15804 13.5607 5.43934C13.842 5.72064 14 6.10218 14 6.5V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7.5C14 7.10218 14.158 6.72064 14.4393 6.43934C14.7206 6.15804 15.1022 6 15.5 6C15.8978 6 16.2794 6.15804 16.5607 6.43934C16.842 6.72064 17 7.10218 17 7.5V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9999 9.5C16.9999 9.10218 17.158 8.72064 17.4393 8.43934C17.7206 8.15804 18.1021 8 18.4999 8C18.8978 8 19.2793 8.15804 19.5606 8.43934C19.8419 8.72064 19.9999 9.10218 19.9999 9.5V14C19.9999 15.5913 19.3678 17.1174 18.2426 18.2426C17.1174 19.3679 15.5912 20 13.9999 20H11.9999H12.2079C11.2143 20.0002 10.2361 19.7535 9.36132 19.2823C8.48652 18.811 7.74245 18.1299 7.19594 17.3L6.99994 17C6.68794 16.521 5.59294 14.612 3.71394 11.272C3.52239 10.9315 3.47122 10.5298 3.57132 10.1522C3.67142 9.77454 3.91489 9.45088 4.24994 9.25C4.60682 9.03587 5.02501 8.94712 5.4381 8.99785C5.85119 9.04858 6.23548 9.23588 6.52994 9.53L7.99994 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    