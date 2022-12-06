<script>
export default {
  name: 'pill-off',
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
<path d="M10.495 6.50509L12.5 4.50009C13.4314 3.58728 14.6855 3.07893 15.9896 3.08551C17.2938 3.0921 18.5426 3.61309 19.4648 4.53527C20.387 5.45745 20.908 6.70631 20.9146 8.01045C20.9211 9.31459 20.4128 10.5686 19.5 11.5001L17.502 13.4981M15.502 15.4981L11.5 19.5001C10.5685 20.4129 9.31447 20.9213 8.01033 20.9147C6.70618 20.9081 5.45733 20.3871 4.53515 19.4649C3.61297 18.5427 3.09198 17.2939 3.08539 15.9897C3.0788 14.6856 3.58715 13.4315 4.49997 12.5001L8.49997 8.50009" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8.5L15.5 15.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    