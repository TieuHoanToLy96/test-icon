<script>
export default {
  name: 'dice-6',
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
<path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7C15.2239 7 15 7.22386 15 7.5C15 7.77614 15.2239 8 15.5 8Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 12.5C8.77614 12.5 9 12.2761 9 12C9 11.7239 8.77614 11.5 8.5 11.5C8.22386 11.5 8 11.7239 8 12C8 12.2761 8.22386 12.5 8.5 12.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 12.5C15.7761 12.5 16 12.2761 16 12C16 11.7239 15.7761 11.5 15.5 11.5C15.2239 11.5 15 11.7239 15 12C15 12.2761 15.2239 12.5 15.5 12.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 17C15.7761 17 16 16.7761 16 16.5C16 16.2239 15.7761 16 15.5 16C15.2239 16 15 16.2239 15 16.5C15 16.7761 15.2239 17 15.5 17Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 17C8.77614 17 9 16.7761 9 16.5C9 16.2239 8.77614 16 8.5 16C8.22386 16 8 16.2239 8 16.5C8 16.7761 8.22386 17 8.5 17Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    