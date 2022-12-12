<script>
export default {
  name: 'brand-ubuntu',
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
<path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.723 7.41005C16.6984 6.35972 15.4045 5.61173 13.983 5.24805M10.012 5.24805C8.56695 5.61865 7.25446 6.38626 6.223 7.46405M4.342 10.679C4.11466 11.4314 3.99942 12.2131 4 12.999C4 13.737 4.1 14.452 4.287 15.131M6.247 18.559C7.27342 19.6226 8.57462 20.3806 10.006 20.749M14.004 20.746C15.4306 20.3767 16.7274 19.6202 17.751 18.56M19.713 15.13C19.904 14.4358 20.0006 13.7191 20 12.999C20 12.235 19.893 11.496 19.693 10.796" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19C20.1046 19 21 18.1046 21 17C21 15.8954 20.1046 15 19 15C17.8954 15 17 15.8954 17 17C17 18.1046 17.8954 19 19 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    