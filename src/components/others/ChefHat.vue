<script>
export default {
  name: 'chef-hat',
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
<path d="M12 3C13.918 3 15.52 4.35 15.91 6.151C16.9341 5.87385 18.0264 6.01488 18.9465 6.54308C19.8667 7.07128 20.5393 7.94337 20.8165 8.9675C21.0936 9.99163 20.9526 11.0839 20.4244 12.0041C19.8962 12.9242 19.0241 13.5968 18 13.874V21H5.99996V13.874C5.48085 13.7477 4.99228 13.5187 4.56306 13.2006C4.13385 12.8825 3.77268 12.4816 3.50084 12.0217C3.22901 11.5618 3.05202 11.052 2.98031 10.5226C2.9086 9.9932 2.94362 9.45477 3.0833 8.9391C3.22299 8.42342 3.46451 7.94094 3.79363 7.52009C4.12275 7.09924 4.5328 6.74855 4.99961 6.4887C5.46642 6.22885 5.98053 6.0651 6.51163 6.0071C7.04273 5.9491 7.58007 5.99803 8.09196 6.151C8.28563 5.25848 8.77896 4.45914 9.48993 3.88589C10.2009 3.31264 11.0867 3.00001 12 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.16101 17.009L18 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    