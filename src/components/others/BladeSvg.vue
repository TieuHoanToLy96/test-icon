<script>
export default {
  name: 'blade-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7069 3.70709L20.2928 6.29309C20.4803 6.48062 20.5856 6.73493 20.5856 7.00009C20.5856 7.26526 20.4803 7.51957 20.2928 7.70709L19.7069 8.29309C19.5194 8.48062 19.4141 8.73493 19.4141 9.00009C19.4141 9.26526 19.5194 9.51957 19.7069 9.70709L20.2928 10.2931C20.4803 10.4806 20.5856 10.7349 20.5856 11.0001C20.5856 11.2653 20.4803 11.5196 20.2928 11.7071L11.7068 20.2931C11.5193 20.4806 11.265 20.5859 10.9998 20.5859C10.7347 20.5859 10.4804 20.4806 10.2928 20.2931L9.70685 19.7071C9.51932 19.5196 9.26501 19.4143 8.99985 19.4143C8.73468 19.4143 8.48038 19.5196 8.29285 19.7071L7.70685 20.2931C7.51932 20.4806 7.26501 20.5859 6.99985 20.5859C6.73468 20.5859 6.48038 20.4806 6.29285 20.2931L3.70685 17.7071C3.51938 17.5196 3.41406 17.2653 3.41406 17.0001C3.41406 16.7349 3.51938 16.4806 3.70685 16.2931L4.29285 15.7071C4.48032 15.5196 4.58564 15.2653 4.58564 15.0001C4.58564 14.7349 4.48032 14.4806 4.29285 14.2931L3.70685 13.7071C3.51938 13.5196 3.41406 13.2653 3.41406 13.0001C3.41406 12.7349 3.51938 12.4806 3.70685 12.2931L12.2928 3.70709C12.4804 3.51962 12.7347 3.41431 12.9998 3.41431C13.265 3.41431 13.5193 3.51962 13.7068 3.70709L14.2928 4.29309C14.4804 4.48056 14.7347 4.58588 14.9998 4.58588C15.265 4.58588 15.5193 4.48056 15.7068 4.29309L16.2928 3.70709C16.4804 3.51962 16.7347 3.41431 16.9998 3.41431C17.265 3.41431 17.5193 3.51962 17.7069 3.70709V3.70709Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16L11.2 12.8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7998 11.2L15.9998 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8L16 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 14L10 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    