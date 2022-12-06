<script>
export default {
  name: 'laptop-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16187 16.5V6.75C4.16187 6.35218 4.3199 5.97064 4.60121 5.68934C4.88251 5.40804 5.26404 5.25 5.66187 5.25H19.1619C19.5597 5.25 19.9412 5.40804 20.2225 5.68934C20.5038 5.97064 20.6619 6.35218 20.6619 6.75V16.5M13.9119 8.25H10.9119M2.66187 16.5H22.1619V18C22.1619 18.3978 22.0038 18.7794 21.7225 19.0607C21.4412 19.342 21.0597 19.5 20.6619 19.5H4.16187C3.76404 19.5 3.38251 19.342 3.10121 19.0607C2.8199 18.7794 2.66187 18.3978 2.66187 18V16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    