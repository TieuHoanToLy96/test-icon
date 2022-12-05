<script>
export default {
  name: 'brand-reddit',
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
<path d="M12 8C14.648 8 17.028 8.826 18.675 10.14C19.2384 9.9425 19.8539 9.95316 20.4102 10.1701C20.9664 10.3869 21.4267 10.7958 21.7077 11.3225C21.9888 11.8493 22.072 12.4592 21.9424 13.042C21.8127 13.6248 21.4788 14.142 21.001 14.5C21.001 18.09 16.971 21 12.001 21C7.126 21 3.156 18.2 3.001 14.706L2.001 14.5C1.52319 14.142 1.18927 13.6248 1.05964 13.042C0.930012 12.4592 1.01324 11.8493 1.29426 11.3225C1.57529 10.7958 2.03555 10.3869 2.59181 10.1701C3.14806 9.95316 3.76357 9.9425 4.327 10.14C5.973 8.827 8.353 8 11.001 8H12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8L13 3L19 4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 5C19.5523 5 20 4.55228 20 4C20 3.44772 19.5523 3 19 3C18.4477 3 18 3.44772 18 4C18 4.55228 18.4477 5 19 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 13.5C9.27614 13.5 9.5 13.2761 9.5 13C9.5 12.7239 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.7239 8.5 13C8.5 13.2761 8.72386 13.5 9 13.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13.5C15.2761 13.5 15.5 13.2761 15.5 13C15.5 12.7239 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.7239 14.5 13C14.5 13.2761 14.7239 13.5 15 13.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17C10.667 17.333 11.333 17.5 12 17.5C12.667 17.5 13.333 17.333 14 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    