<script>
export default {
  name: 'push-pin-slash',
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
<path d="M8.48529 15.75L4.73529 19.5M4.73529 3.75001L19.7353 20.25M9.02101 8.4643L8.86029 8.62501C8.86029 8.62501 6.25929 7.32451 3.47916 9.56724C3.39706 9.63333 3.32979 9.71595 3.28171 9.80974C3.23363 9.90353 3.20582 10.0064 3.20009 10.1116C3.19435 10.2169 3.21083 10.3221 3.24843 10.4206C3.28604 10.519 3.34394 10.6085 3.41838 10.6831L13.5337 20.7984C13.6094 20.8743 13.7006 20.9331 13.801 20.9708C13.9015 21.0085 14.0088 21.0241 14.1158 21.0167C14.2228 21.0093 14.327 20.9791 14.4213 20.9279C14.5156 20.8768 14.5979 20.8061 14.6625 20.7204C15.3752 19.773 16.4564 17.9199 15.8548 15.9814M17.5733 13.412L21.455 9.53034C21.5956 9.38969 21.6746 9.19892 21.6746 9.00001C21.6746 8.8011 21.5956 8.61033 21.455 8.46968L15.7656 2.78034C15.625 2.63969 15.4342 2.56067 15.2353 2.56067C15.0364 2.56067 14.8456 2.63969 14.705 2.78034L11.1447 6.34059" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    