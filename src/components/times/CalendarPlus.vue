<script>
export default {
  name: 'calendar-plus',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.147 2.25V5.25M8.14697 2.25V5.25M4.39697 8.25H20.897M15.272 14.25H10.022M12.647 11.625V16.875M5.14697 3.75H20.147C20.5612 3.75 20.897 4.08579 20.897 4.5V19.5C20.897 19.9142 20.5612 20.25 20.147 20.25H5.14697C4.73276 20.25 4.39697 19.9142 4.39697 19.5V4.5C4.39697 4.08579 4.73276 3.75 5.14697 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    