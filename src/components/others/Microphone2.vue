<script>
export default {
  name: 'microphone-2',
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
<path d="M15.002 12.9001C16.0551 13.1144 17.1492 12.9837 18.1222 12.5273C19.0951 12.071 19.8952 11.3134 20.4038 10.3666C20.9123 9.41991 21.1023 8.33453 20.9456 7.27134C20.7889 6.20816 20.2938 5.22377 19.5337 4.46405C18.7736 3.70434 17.7889 3.20975 16.7257 3.05357C15.6624 2.8974 14.5771 3.08796 13.6307 3.59701C12.6842 4.10605 11.9269 4.9065 11.4711 5.87971C11.0153 6.85292 10.8851 7.9471 11.1 9.00007" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.002 12.9L11.1 9.00098L3.58701 17.585C3.21173 17.9599 3.00074 18.4685 3.00046 18.9989C3.00032 19.2616 3.05191 19.5217 3.1523 19.7644C3.25268 20.0071 3.39989 20.2277 3.58551 20.4135C3.77113 20.5993 3.99154 20.7467 4.23414 20.8474C4.47675 20.948 4.7368 20.9999 4.99945 21C5.5299 21.0003 6.03873 20.7899 6.41401 20.415L15.002 12.9V12.9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    