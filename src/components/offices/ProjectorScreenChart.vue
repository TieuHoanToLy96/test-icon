<script>
export default {
  name: 'projector-screen-chart',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.61743 17.25V6.75M19.6174 6.75V17.25M9.11743 12V13.5M12.1174 11.25V13.5M15.1174 10.5V13.5M12.1174 17.25V20.25M12.1174 20.25C11.289 20.25 10.6174 20.9216 10.6174 21.75C10.6174 22.5784 11.289 23.25 12.1174 23.25C12.9459 23.25 13.6174 22.5784 13.6174 21.75C13.6174 20.9216 12.9459 20.25 12.1174 20.25ZM3.11743 17.25H21.1174M3.86743 3.75H20.3674C20.7816 3.75 21.1174 4.08579 21.1174 4.5V6C21.1174 6.41421 20.7816 6.75 20.3674 6.75H3.86743C3.45322 6.75 3.11743 6.41421 3.11743 6V4.5C3.11743 4.08579 3.45322 3.75 3.86743 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    