<script>
export default {
  name: 'lock-laminated',
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
<path d="M3.80542 11.25H20.3054M3.80542 14.25H20.3054M3.80542 17.25H20.3054M8.68042 8.25V4.875C8.68042 3.97989 9.036 3.12145 9.66894 2.48851C10.3019 1.85558 11.1603 1.5 12.0554 1.5C12.9505 1.5 13.809 1.85558 14.4419 2.48851C15.0748 3.12145 15.4304 3.97989 15.4304 4.875V8.25M4.55542 8.25H19.5554C19.9696 8.25 20.3054 8.58579 20.3054 9V19.5C20.3054 19.9142 19.9696 20.25 19.5554 20.25H4.55542C4.14121 20.25 3.80542 19.9142 3.80542 19.5V9C3.80542 8.58579 4.14121 8.25 4.55542 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    