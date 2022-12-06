<script>
export default {
  name: 'tree-structure',
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
<path d="M7.85303 12H11.603M15.353 17.25H13.853C13.2563 17.25 12.684 17.0129 12.262 16.591C11.8401 16.169 11.603 15.5967 11.603 15V9C11.603 8.40326 11.8401 7.83097 12.262 7.40901C12.684 6.98705 13.2563 6.75 13.853 6.75H15.353M3.35303 9.375H7.10303C7.51724 9.375 7.85303 9.71079 7.85303 10.125V13.875C7.85303 14.2892 7.51724 14.625 7.10303 14.625H3.35303C2.93881 14.625 2.60303 14.2892 2.60303 13.875V10.125C2.60303 9.71079 2.93881 9.375 3.35303 9.375ZM16.103 3.75H20.603C21.0172 3.75 21.353 4.08579 21.353 4.5V9C21.353 9.41421 21.0172 9.75 20.603 9.75H16.103C15.6888 9.75 15.353 9.41421 15.353 9V4.5C15.353 4.08579 15.6888 3.75 16.103 3.75ZM16.103 14.25H20.603C21.0172 14.25 21.353 14.5858 21.353 15V19.5C21.353 19.9142 21.0172 20.25 20.603 20.25H16.103C15.6888 20.25 15.353 19.9142 15.353 19.5V15C15.353 14.5858 15.6888 14.25 16.103 14.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    