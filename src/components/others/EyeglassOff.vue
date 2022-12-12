<script>
export default {
  name: 'eyeglass-off',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.536 5.5459L3 13.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 4H18L21 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.426 19.423C18.8983 19.7708 18.2863 19.9692 17.655 19.9972C17.0236 20.0251 16.3965 19.8816 15.8401 19.5819C15.2837 19.2822 14.8188 18.8374 14.4949 18.2948C14.1709 17.7522 13.9999 17.132 14 16.5V14M18 14H21V16.5C21 16.657 20.99 16.812 20.97 16.963" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16.5C10 17.4283 9.63125 18.3185 8.97487 18.9749C8.3185 19.6313 7.42826 20 6.5 20C5.57174 20 4.6815 19.6313 4.02513 18.9749C3.36875 18.3185 3 17.4283 3 16.5V14H10V16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    