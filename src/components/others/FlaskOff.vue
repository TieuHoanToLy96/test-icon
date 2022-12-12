<script>
export default {
  name: 'flask-off',
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
<path d="M9 3H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 9H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99999 3V6M9.73199 9.736L5.99999 20C5.95174 20.0971 5.92669 20.204 5.92682 20.3124C5.92695 20.4208 5.95224 20.5277 6.00072 20.6246C6.0492 20.7216 6.11952 20.806 6.20616 20.8711C6.2928 20.9362 6.39339 20.9804 6.49999 21H17.5C17.6066 20.9804 17.7072 20.9362 17.7938 20.8711C17.8805 20.806 17.9508 20.7216 17.9993 20.6246C18.0477 20.5277 18.073 20.4208 18.0732 20.3124C18.0733 20.204 18.0482 20.0971 18 20L16.857 16.858M14.569 10.564L14 9V3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    