<script>
export default {
  name: 'music-notes-simple',
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
<path d="M20.1472 16.125C20.1472 17.5747 18.972 18.75 17.5222 18.75C16.0725 18.75 14.8972 17.5747 14.8972 16.125C14.8972 14.6753 16.0725 13.5 17.5222 13.5C18.972 13.5 20.1472 14.6753 20.1472 16.125ZM20.1472 16.125V3L8.14722 6V19.125M8.14722 19.125C8.14722 20.5747 6.97196 21.75 5.52222 21.75C4.07247 21.75 2.89722 20.5747 2.89722 19.125C2.89722 17.6753 4.07247 16.5 5.52222 16.5C6.97196 16.5 8.14722 17.6753 8.14722 19.125Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    