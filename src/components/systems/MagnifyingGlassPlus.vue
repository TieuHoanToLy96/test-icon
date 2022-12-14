<script>
export default {
  name: 'magnifying-glass-plus',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.52173 10.875H14.5217M11.5217 7.875V13.875M17.0899 16.4434L21.6462 20.9997M19.3967 10.8746C19.3967 15.2239 15.871 18.7496 11.5217 18.7496C7.17249 18.7496 3.64673 15.2239 3.64673 10.8746C3.64673 6.52539 7.17249 2.99963 11.5217 2.99963C15.871 2.99963 19.3967 6.52539 19.3967 10.8746Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    