<script>
export default {
  name: 'anchor-off',
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
<path d="M12 12V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13C4.00016 14.643 4.50618 16.2461 5.44928 17.5914C6.39238 18.9367 7.72682 19.9591 9.27127 20.5195C10.8157 21.0799 12.4952 21.1512 14.0816 20.7236C15.668 20.2961 17.0843 19.3906 18.138 18.13M19.578 15.57C19.8583 14.7422 20.0008 13.874 20 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 13H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 13H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8659 8.87312C13.3624 8.72347 13.8117 8.44772 14.1699 8.07274C14.5281 7.69776 14.783 7.23636 14.9098 6.73352C15.0366 6.23068 15.031 5.70357 14.8934 5.20357C14.7558 4.70358 14.491 4.24777 14.1248 3.88059C13.7586 3.51341 13.3035 3.24739 12.8039 3.10847C12.3042 2.96955 11.7771 2.96246 11.274 3.08791C10.7708 3.21336 10.3087 3.46705 9.93277 3.82426C9.55683 4.18147 9.27988 4.63 9.12891 5.12612" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    