<script>
export default {
  name: 'infinity-svg',
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
<path d="M10.3491 14.2625L9.53476 15.182C8.90543 15.8113 8.1036 16.2399 7.23069 16.4135C6.35777 16.5872 5.45297 16.4981 4.63071 16.1575C3.80844 15.8169 3.10564 15.2401 2.61117 14.5001C2.1167 13.76 1.85278 12.89 1.85278 12C1.85278 11.11 2.1167 10.24 2.61117 9.49994C3.10564 8.75991 3.80844 8.18314 4.63071 7.84254C5.45297 7.50195 6.35777 7.41283 7.23069 7.58647C8.1036 7.7601 8.90543 8.18869 9.53476 8.81802L15.1708 15.182C15.8001 15.8113 16.602 16.2399 17.4749 16.4135C18.3478 16.5872 19.2526 16.4981 20.0749 16.1575C20.8971 15.8169 21.5999 15.2401 22.0944 14.5001C22.5889 13.76 22.8528 12.89 22.8528 12C22.8528 11.11 22.5889 10.24 22.0944 9.49994C21.5999 8.75991 20.8971 8.18314 20.0749 7.84254C19.2526 7.50195 18.3478 7.41283 17.4749 7.58647C16.602 7.7601 15.8001 8.18869 15.1708 8.81802L14.3565 9.73754" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    