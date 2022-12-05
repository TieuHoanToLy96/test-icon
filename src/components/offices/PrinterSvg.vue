<script>
export default {
  name: 'printer-svg',
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
<path d="M7.15019 8.75896V5.39999H17.9022V8.75896M7.15046 16.8205H4.12646V10.1026C4.12646 9.36051 4.77834 8.75896 5.58246 8.75896H19.4705C20.2746 8.75896 20.9265 9.36051 20.9265 10.1026V16.8205H17.9025M7.15052 14.8051H17.9025V20.5154H7.15052V14.8051Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5658 12.6218C18.0291 12.6218 18.4047 12.2458 18.4047 11.782C18.4047 11.3183 18.0291 10.9423 17.5658 10.9423C17.1024 10.9423 16.7268 11.3183 16.7268 11.782C16.7268 12.2458 17.1024 12.6218 17.5658 12.6218Z" fill="currentColor"/>
</svg>

</template>
    