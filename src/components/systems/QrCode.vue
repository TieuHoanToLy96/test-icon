<script>
export default {
  name: 'qr-code',
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
<path d="M14.3237 13.5V16.5M14.3237 19.5H17.3237V13.5M17.3237 15H20.3237M20.3237 18V19.5M6.07373 4.5H10.5737C10.9879 4.5 11.3237 4.83579 11.3237 5.25V9.75C11.3237 10.1642 10.9879 10.5 10.5737 10.5H6.07373C5.65952 10.5 5.32373 10.1642 5.32373 9.75V5.25C5.32373 4.83579 5.65952 4.5 6.07373 4.5ZM6.07373 13.5H10.5737C10.9879 13.5 11.3237 13.8358 11.3237 14.25V18.75C11.3237 19.1642 10.9879 19.5 10.5737 19.5H6.07373C5.65952 19.5 5.32373 19.1642 5.32373 18.75V14.25C5.32373 13.8358 5.65952 13.5 6.07373 13.5ZM15.0737 4.5H19.5737C19.9879 4.5 20.3237 4.83579 20.3237 5.25V9.75C20.3237 10.1642 19.9879 10.5 19.5737 10.5H15.0737C14.6595 10.5 14.3237 10.1642 14.3237 9.75V5.25C14.3237 4.83579 14.6595 4.5 15.0737 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    