<script>
export default {
  name: 'nut-svg',
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
<path d="M21.272 16.4374V7.5626C21.272 7.42978 21.2367 7.29935 21.1698 7.18463C21.1028 7.06991 21.0066 6.97503 20.891 6.90968L13.016 2.45859C12.9034 2.39495 12.7763 2.36151 12.647 2.36151C12.5176 2.36151 12.3905 2.39495 12.2779 2.45859L4.40293 6.90968C4.28731 6.97503 4.19111 7.06991 4.12418 7.18463C4.05724 7.29935 4.02197 7.42978 4.02197 7.5626V16.4374C4.02197 16.5702 4.05724 16.7007 4.12418 16.8154C4.19111 16.9301 4.28731 17.025 4.40293 17.0903L12.2779 21.5414C12.3905 21.605 12.5176 21.6385 12.647 21.6385C12.7763 21.6385 12.9034 21.605 13.016 21.5414L20.891 17.0903C21.0066 17.025 21.1028 16.9301 21.1698 16.8154C21.2367 16.7006 21.272 16.5702 21.272 16.4374Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.647 15.375C14.5109 15.375 16.022 13.864 16.022 12C16.022 10.136 14.5109 8.625 12.647 8.625C10.783 8.625 9.27198 10.136 9.27198 12C9.27198 13.864 10.783 15.375 12.647 15.375Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    