<script>
export default {
  name: 'seeding-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10C12 8.4087 11.3679 6.88258 10.2426 5.75736C9.11742 4.63214 7.5913 4 6 4H3V6C3 7.5913 3.63214 9.11742 4.75736 10.2426C5.88258 11.3679 7.4087 12 9 12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C12 12.4087 12.6321 10.8826 13.7574 9.75736C14.8826 8.63214 16.4087 8 18 8H21V9C21 10.5913 20.3679 12.1174 19.2426 13.2426C18.1174 14.3679 16.5913 15 15 15H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    