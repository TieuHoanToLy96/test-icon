<script>
export default {
  name: 'car-simple',
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
<path d="M1.91174 11.25H22.9117M20.6617 20.25H18.4117C18.2128 20.25 18.0221 20.171 17.8814 20.0303C17.7408 19.8897 17.6617 19.6989 17.6617 19.5V17.25H7.16174V19.5C7.16174 19.6989 7.08273 19.8897 6.94207 20.0303C6.80142 20.171 6.61066 20.25 6.41174 20.25H4.16174C3.96283 20.25 3.77207 20.171 3.63141 20.0303C3.49076 19.8897 3.41174 19.6989 3.41174 19.5V11.25L6.21379 4.9454C6.27271 4.81282 6.36882 4.70018 6.49046 4.62113C6.61211 4.54208 6.75407 4.5 6.89915 4.5H17.9243C18.0694 4.5 18.2114 4.54208 18.333 4.62113C18.4547 4.70018 18.5508 4.81282 18.6097 4.9454L21.4117 11.25V19.5C21.4117 19.6989 21.3327 19.8897 21.1921 20.0303C21.0514 20.171 20.8607 20.25 20.6617 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    