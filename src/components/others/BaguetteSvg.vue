<script>
export default {
  name: 'baguette-svg',
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
<path d="M5.628 11.2829L11.272 5.64594C13.937 2.98294 17.196 1.89894 19.935 4.44095L20.123 4.62195C20.4009 4.89938 20.6214 5.2289 20.7719 5.59165C20.9223 5.95439 20.9998 6.34324 20.9998 6.73594C20.9998 7.12865 20.9223 7.5175 20.7719 7.88024C20.6214 8.24299 20.4009 8.57251 20.123 8.84995L8.836 20.1239C8.2985 20.6606 7.57724 20.973 6.81813 20.9981C6.05903 21.0231 5.31874 20.7589 4.747 20.2589L4.604 20.1239C1.876 17.3999 2.9 14.0069 5.628 11.2829Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 7.5L11 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 10.5L8 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 4.5L14 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    