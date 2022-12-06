<script>
export default {
  name: 'tag-simple',
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
<path d="M18.5756 18.416L22.8529 12L18.5756 5.58397C18.5071 5.48124 18.4143 5.397 18.3054 5.33874C18.1966 5.28048 18.075 5.25 17.9515 5.25H4.10291C3.90399 5.25 3.71323 5.32902 3.57258 5.46967C3.43192 5.61032 3.35291 5.80109 3.35291 6V18C3.35291 18.1989 3.43192 18.3897 3.57258 18.5303C3.71323 18.671 3.90399 18.75 4.10291 18.75H17.9515C18.075 18.75 18.1965 18.7195 18.3054 18.6613C18.4143 18.603 18.5071 18.5188 18.5756 18.416V18.416Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    