<script>
export default {
  name: 'building-wind-turbine',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V8.427C10 8.247 10.013 8.069 10.04 7.891L10.756 3.063C10.82 2.466 11.353 2 12 2C12.647 2 13.18 2.466 13.244 3.063L13.96 7.891C13.987 8.069 14 8.248 14 8.427V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0099 9.28003L15.2449 10.556C15.4009 10.646 15.5499 10.746 15.6909 10.856L19.5269 13.767C20.0139 14.119 20.1509 14.807 19.8269 15.363C19.5019 15.919 18.8299 16.145 18.2789 15.904L13.7239 14.224C13.5564 14.1592 13.394 14.082 13.2379 13.993L11.0029 12.716" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9999 12.716L10.7639 13.993C10.6082 14.0816 10.4461 14.1585 10.2789 14.223L5.72394 15.904C5.17294 16.145 4.50094 15.919 4.17594 15.364C3.85194 14.807 3.98894 14.119 4.47594 13.767L8.31194 10.857C8.45248 10.7455 8.60161 10.6451 8.75794 10.557L10.9929 9.28003" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21L11 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 14L14 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    