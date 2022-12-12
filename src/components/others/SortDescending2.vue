<script>
export default {
  name: 'sort-descending-2',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 5H5.5C5.22386 5 5 5.22386 5 5.5V9.5C5 9.77614 5.22386 10 5.5 10H9.5C9.77614 10 10 9.77614 10 9.5V5.5C10 5.22386 9.77614 5 9.5 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 14H5.5C5.22386 14 5 14.2239 5 14.5V18.5C5 18.7761 5.22386 19 5.5 19H9.5C9.77614 19 10 18.7761 10 18.5V14.5C10 14.2239 9.77614 14 9.5 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 15L17 18L20 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 18V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    