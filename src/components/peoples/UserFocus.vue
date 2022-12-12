<script>
export default {
  name: 'user-focus',
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
<path d="M17.0518 3.75H19.6743C19.8731 3.75 20.0637 3.82902 20.2042 3.96967C20.3447 4.11032 20.4237 4.30109 20.4237 4.5V7.12497" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0518 20.25H19.6743C19.8731 20.25 20.0637 20.171 20.2042 20.0303C20.3447 19.8897 20.4237 19.6989 20.4237 19.5V16.8749" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.29866 20.25H4.67607C4.47734 20.25 4.28675 20.171 4.14623 20.0303C4.0057 19.8897 3.92676 19.6989 3.92676 19.5V16.8749" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.29866 3.75H4.67607C4.47734 3.75 4.28675 3.82902 4.14623 3.96967C4.0057 4.11032 3.92676 4.30109 3.92676 4.5V7.12497" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.1768 13.5C13.8336 13.5 15.1768 12.1569 15.1768 10.5C15.1768 8.84315 13.8336 7.5 12.1768 7.5C10.5199 7.5 9.17676 8.84315 9.17676 10.5C9.17676 12.1569 10.5199 13.5 12.1768 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.20044 16.5C7.67847 15.5945 8.39449 14.8366 9.27137 14.308C10.1482 13.7794 11.1527 13.5 12.1766 13.5C13.2005 13.5 14.205 13.7794 15.0819 14.308C15.9588 14.8366 16.6748 15.5945 17.1528 16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    