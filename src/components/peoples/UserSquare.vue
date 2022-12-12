<script>
export default {
  name: 'user-square',
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
<path d="M12.8232 15C14.8943 15 16.5732 13.3211 16.5732 11.25C16.5732 9.17893 14.8943 7.5 12.8232 7.5C10.7522 7.5 9.07324 9.17893 9.07324 11.25C9.07324 13.3211 10.7522 15 12.8232 15ZM12.8232 15C11.2936 15 9.80921 15.5194 8.61329 16.4732C7.41738 17.427 6.58078 18.7586 6.24051 20.25M12.8232 15C14.3529 15 15.8373 15.5194 17.0332 16.4732C18.2291 17.427 19.0657 18.7586 19.406 20.25M5.32324 3.75H20.3232C20.7375 3.75 21.0732 4.08579 21.0732 4.5V19.5C21.0732 19.9142 20.7375 20.25 20.3232 20.25H5.32324C4.90903 20.25 4.57324 19.9142 4.57324 19.5V4.5C4.57324 4.08579 4.90903 3.75 5.32324 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    