<script>
export default {
  name: 'alien-svg',
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
<path d="M11 17C11.3154 17.1377 11.6559 17.2087 12 17.2087C12.3441 17.2087 12.6846 17.1377 13 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 3C7.33591 3 4.60391 5.331 4.13791 8.595C3.67037 11.6098 4.38704 14.6886 6.13791 17.187C6.98058 18.4188 8.06992 19.4622 9.33691 20.251C11.0029 21.251 13.0009 21.251 14.6669 20.251C15.9339 19.4622 17.0232 18.4188 17.8659 17.187C19.6097 14.6854 20.3257 11.6095 19.8659 8.595C19.3999 5.33 16.6679 3 12.0039 3H11.9999Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11L10 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11L14 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    