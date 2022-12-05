<script>
export default {
  name: 'yin-yang',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12C13.1935 12 14.3381 12.4741 15.182 13.318C16.0259 14.1619 16.5 15.3065 16.5 16.5C16.5 17.6935 16.0259 18.8381 15.182 19.682C14.3381 20.5259 13.1935 21 12 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7C11.7239 7 11.5 7.22386 11.5 7.5C11.5 7.77614 11.7239 8 12 8Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17C12.2761 17 12.5 16.7761 12.5 16.5C12.5 16.2239 12.2761 16 12 16C11.7239 16 11.5 16.2239 11.5 16.5C11.5 16.7761 11.7239 17 12 17Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    