<script>
export default {
  name: 'hourglass-off',
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
<path d="M18 18V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H7C6.73478 21 6.48043 20.8946 6.29289 20.7071C6.10536 20.5196 6 20.2652 6 20V18C6 16.4087 6.63214 14.8826 7.75736 13.7574C8.88258 12.6321 10.4087 12 12 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12M15.13 11.12C16.0071 10.5841 16.7317 9.83179 17.2343 8.93519C17.7369 8.03859 18.0006 7.02785 18 6V4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    