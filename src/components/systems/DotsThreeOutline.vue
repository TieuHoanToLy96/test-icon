<script>
export default {
  name: 'dots-three-outline',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4705 14.25C13.7131 14.25 14.7205 13.2426 14.7205 12C14.7205 10.7574 13.7131 9.75 12.4705 9.75C11.2278 9.75 10.2205 10.7574 10.2205 12C10.2205 13.2426 11.2278 14.25 12.4705 14.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.97046 14.25C6.2131 14.25 7.22046 13.2426 7.22046 12C7.22046 10.7574 6.2131 9.75 4.97046 9.75C3.72782 9.75 2.72046 10.7574 2.72046 12C2.72046 13.2426 3.72782 14.25 4.97046 14.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9705 14.25C21.2131 14.25 22.2205 13.2426 22.2205 12C22.2205 10.7574 21.2131 9.75 19.9705 9.75C18.7278 9.75 17.7205 10.7574 17.7205 12C17.7205 13.2426 18.7278 14.25 19.9705 14.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    