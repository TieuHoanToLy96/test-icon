<script>
export default {
  name: 'dental-broken',
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
<path d="M12 5.50001C10.926 4.91401 9.417 4.00001 8 4.00001C5.9 3.99901 4 5.24701 4 9.00001C4 13.899 5.056 17.41 6.671 19.537C7.244 20.293 8.641 20.058 9.238 19.301C9.636 18.796 10.057 17.862 10.5 16.5C10.792 15.729 11.392 14.996 12 15C12.602 15.004 13.21 15.737 13.5 16.5C13.943 17.862 14.364 18.795 14.762 19.3C15.359 20.059 16.756 20.293 17.329 19.537C18.944 17.41 20 13.9 20 9.00001C20 5.26001 18.092 4.00601 16 4.00001C14.577 3.99601 13.08 4.91101 12 5.50001V5.50001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5L13 8L11 10L13 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    