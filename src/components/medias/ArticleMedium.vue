<script>
export default {
  name: 'article-medium',
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
<path d="M2.66614 5.25006H4.16614M4.16614 5.25006L4.16615 12.7501M4.16614 5.25006L7.91615 11.2501L11.6661 5.25006M11.6661 5.25006H13.1661M11.6661 5.25006L11.6661 12.7501M2.66614 12.7501H4.91614M10.9161 12.7501H13.1661M16.1661 9.75006H22.9161M16.1661 12.7501H22.9161M7.16614 15.7501H22.9161M7.16614 18.7501H22.9161" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    