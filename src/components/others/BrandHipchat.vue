<script>
export default {
  name: 'brand-hipchat',
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
<path d="M17.802 17.2921C17.802 17.2921 17.879 17.2371 18.002 17.1431C19.845 15.7181 21 13.6531 21 11.3541C21 7.06809 16.97 3.59009 12.002 3.59009C7.032 3.59009 3 7.06809 3 11.3541C3 15.6421 7.03 19.0001 12 19.0001C12.424 19.0001 13.12 18.9721 14.088 18.9161C15.35 19.7361 17.192 20.4091 18.804 20.4091C19.303 20.4091 19.538 19.9991 19.218 19.5811C18.732 18.9851 18.062 18.0301 17.802 17.2911V17.2921Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 13.5C10 16 14 16 16.5 13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    