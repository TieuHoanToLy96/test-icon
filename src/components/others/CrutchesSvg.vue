<script>
export default {
  name: 'crutches-svg',
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
<path d="M14 3H10C8.89543 3 8 3.89543 8 5C8 6.10457 8.89543 7 10 7H14C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V16.908C12.0001 16.3157 12.1754 15.7368 12.504 15.244L13.496 13.756C13.8246 13.2632 13.9999 12.6843 14 12.092V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V16.908C11.9999 16.3157 11.8246 15.7368 11.496 15.244L10.504 13.756C10.1754 13.2632 10.0001 12.6843 10 12.092V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    