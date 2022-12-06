<script>
export default {
  name: 'vector-off',
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
<path d="M6.68 6.73299C6.49533 6.90491 6.2523 7.00033 6 6.99999H4C3.73478 6.99999 3.48043 6.89464 3.29289 6.7071C3.10536 6.51956 3 6.26521 3 5.99999V3.99999C3 3.72399 3.112 3.47299 3.293 3.29199" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 3H18C17.4477 3 17 3.44772 17 4V6C17 6.55228 17.4477 7 18 7H20C20.5523 7 21 6.55228 21 6V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.72 20.6932C20.6269 20.7903 20.5151 20.8676 20.3914 20.9203C20.2676 20.9731 20.1345 21.0003 20 21.0002H18C17.7348 21.0002 17.4804 20.8949 17.2929 20.7073C17.1054 20.5198 17 20.2654 17 20.0002V18.0002C17 17.7182 17.116 17.4642 17.304 17.2822" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 17H4C3.44772 17 3 17.4477 3 18V20C3 20.5523 3.44772 21 4 21H6C6.55228 21 7 20.5523 7 20V18C7 17.4477 6.55228 17 6 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    