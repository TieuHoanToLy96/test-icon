<script>
export default {
  name: 'network-off',
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
<path d="M6.53701 6.51605C6.03109 7.62697 5.87606 8.86578 6.0926 10.0671C6.30914 11.2684 6.88696 12.3752 7.74893 13.2395C8.61089 14.1039 9.716 14.6848 10.9167 14.9046C12.1175 15.1245 13.3567 14.9729 14.469 14.47M16.715 12.71C17.6214 11.557 18.0741 10.1119 17.9875 8.64782C17.901 7.18373 17.2812 5.80204 16.2452 4.76385C15.2092 3.72567 13.8289 3.10289 12.3649 3.01319C10.901 2.9235 9.45498 3.3731 8.30001 4.27705" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3C13.333 3.333 14 5.333 14 9C14 9.348 13.994 9.681 13.982 10M13.437 13.43C13.105 14.32 12.626 14.844 12 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3C11.062 3.234 10.453 4.295 10.175 6.182M10.019 10.019C10.136 13.039 10.796 14.699 12 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9H9M13 9H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 20H10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 3L22 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    