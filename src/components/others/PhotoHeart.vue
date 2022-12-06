<script>
export default {
  name: 'photo-heart',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8H15.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 14.9998L8 10.9998C8.928 10.1068 10.072 10.1068 11 10.9998L13.5 13.4998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9942 21.5L21.5122 18.92C21.8247 18.5964 21.9997 18.1642 22.0005 17.7143C22.0012 17.2644 21.8277 16.8317 21.5162 16.507C21.3648 16.3487 21.1829 16.2227 20.9815 16.1364C20.7801 16.0502 20.5634 16.0055 20.3443 16.005C20.1252 16.0045 19.9083 16.0483 19.7066 16.1337C19.5048 16.2191 19.3224 16.3444 19.1702 16.502L19.0022 16.674L18.8342 16.502C18.6827 16.3438 18.5007 16.2178 18.2993 16.1317C18.0979 16.0455 17.8812 16.0009 17.6621 16.0005C17.443 16.0001 17.2261 16.044 17.0244 16.1295C16.8227 16.215 16.6403 16.3403 16.4882 16.498C16.176 16.8216 16.0012 17.2535 16.0005 17.7032C15.9997 18.1529 16.1731 18.5854 16.4842 18.91L18.9942 21.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    