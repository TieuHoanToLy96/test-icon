<script>
export default {
  name: 'chat-centered-text',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.76468 9.74995H15.7647M9.76468 12.75H15.7647M14.7961 18.3641L13.4077 20.6781C13.3411 20.7891 13.2468 20.8811 13.1341 20.9449C13.0214 21.0087 12.8941 21.0422 12.7646 21.0422C12.6351 21.0422 12.5078 21.0087 12.3951 20.9449C12.2824 20.8811 12.1881 20.7891 12.1215 20.6781L10.7331 18.3641C10.6664 18.253 10.5722 18.1611 10.4595 18.0973C10.3468 18.0335 10.2195 18 10.0899 18H4.51459C4.31568 18 4.12491 17.9209 3.98426 17.7803C3.84361 17.6396 3.76459 17.4489 3.76459 17.25V5.25C3.76459 5.05109 3.84361 4.86032 3.98426 4.71967C4.12491 4.57902 4.31568 4.5 4.51459 4.5H21.0146C21.2135 4.5 21.4043 4.57902 21.5449 4.71967C21.6856 4.86032 21.7646 5.05109 21.7646 5.25V17.25C21.7646 17.4489 21.6856 17.6397 21.5449 17.7803C21.4043 17.921 21.2135 18 21.0146 18L15.4392 18C15.3097 18 15.1824 18.0335 15.0697 18.0973C14.957 18.1611 14.8627 18.253 14.7961 18.3641Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    