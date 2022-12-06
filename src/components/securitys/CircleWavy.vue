<script>
export default {
  name: 'circle-wavy',
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
<path d="M5.92651 18.8943C5.06363 18.0314 5.63595 16.2198 5.19675 15.1584C4.74146 14.058 3.0708 13.1723 3.0708 12C3.0708 10.8276 4.74147 9.942 5.19675 8.84164C5.63595 7.78015 5.06364 5.96858 5.92651 5.10571C6.78938 4.24283 8.60096 4.81514 9.66245 4.37595C10.7628 3.92066 11.6485 2.25 12.8208 2.25C13.9932 2.25 14.8788 3.92067 15.9792 4.37595C17.0407 4.81515 18.8522 4.24283 19.7151 5.10571C20.578 5.96858 20.0057 7.78016 20.4449 8.84165C20.9001 9.94203 22.5708 10.8277 22.5708 12C22.5708 13.1724 20.9001 14.058 20.4448 15.1584C20.0057 16.2199 20.578 18.0314 19.7151 18.8943C18.8522 19.7572 17.0406 19.1849 15.9792 19.6241C14.8788 20.0793 13.9931 21.75 12.8208 21.75C11.6484 21.75 10.7628 20.0793 9.66244 19.624C8.60095 19.1848 6.78938 19.7572 5.92651 18.8943Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    