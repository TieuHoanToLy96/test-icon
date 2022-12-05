<script>
export default {
  name: 'number-square-two',
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
<path d="M10.3386 8.8742C10.4607 8.58514 10.642 8.32482 10.8708 8.10998C11.0995 7.89514 11.3707 7.73051 11.6668 7.62668C11.963 7.52285 12.2775 7.4821 12.5904 7.50706C12.9032 7.53202 13.2073 7.62214 13.4833 7.77161C13.7592 7.92109 14.0008 8.12663 14.1926 8.37503C14.3844 8.62343 14.5221 8.90919 14.5969 9.21397C14.6717 9.51875 14.6819 9.8358 14.6269 10.1448C14.5719 10.4537 14.4529 10.7478 14.2775 11.008L10.1617 16.5L14.6617 16.4995M4.91174 3.75H19.9117C20.326 3.75 20.6617 4.08579 20.6617 4.5V19.5C20.6617 19.9142 20.326 20.25 19.9117 20.25H4.91174C4.49753 20.25 4.16174 19.9142 4.16174 19.5V4.5C4.16174 4.08579 4.49753 3.75 4.91174 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    