<script>
export default {
  name: 'backpack-svg',
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
<path d="M11 7H13C14.5913 7 16.1174 7.63214 17.2426 8.75736C18.3679 9.88258 19 11.4087 19 13V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V13C5 11.4087 5.63214 9.88258 6.75736 8.75736C7.88258 7.63214 9.4087 7 11 7V7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    