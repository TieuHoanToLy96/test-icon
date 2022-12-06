<script>
export default {
  name: 'gender-epicene',
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
<path d="M15.5362 15.5362C16.0005 15.0718 16.3689 14.5205 16.6202 13.9138C16.8715 13.3071 17.0008 12.6569 17.0008 12.0002C17.0008 11.3435 16.8715 10.6932 16.6202 10.0865C16.3689 9.47979 16.0005 8.92852 15.5362 8.46417C15.0718 7.99982 14.5205 7.63147 13.9138 7.38016C13.3071 7.12886 12.6569 6.99951 12.0002 6.99951C11.3435 6.99951 10.6932 7.12886 10.0865 7.38016C9.47979 7.63147 8.92852 7.99982 8.46417 8.46417C7.52636 9.40198 6.99951 10.6739 6.99951 12.0002C6.99951 13.3264 7.52636 14.5984 8.46417 15.5362C9.40198 16.474 10.6739 17.0008 12.0002 17.0008C13.3264 17.0008 14.5984 16.474 15.5362 15.5362V15.5362Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5361 15.535L21.0001 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13.9998L8.464 8.46484" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    