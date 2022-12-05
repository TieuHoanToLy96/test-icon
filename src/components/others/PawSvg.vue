<script>
export default {
  name: 'paw-svg',
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
<path d="M14.7 13.5C13.6 11.504 13.259 11 12 11C10.741 11 10.264 11.755 9.16401 13.747C8.22201 15.45 6.31801 15.592 5.84301 17.038C5.74601 17.303 5.69801 17.715 5.70001 18C5.70001 19.176 6.48701 20 7.50001 20C8.75901 20 10.504 19 12 19C13.496 19 15.241 20 16.5 20C17.513 20 18.3 19.177 18.3 18C18.3 17.715 18.251 17.303 18.154 17.038C17.679 15.587 15.642 15.203 14.7 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1881 8.082C20.0596 8.0277 19.9215 7.99981 19.7821 8H19.7671C19.0321 8.012 18.2071 8.75 17.7741 9.866C17.2551 11.201 17.4941 12.566 18.3121 12.918C18.4411 12.973 18.5791 13 18.7181 13C19.4571 13 20.2931 12.258 20.7291 11.134C21.2451 9.799 21.0021 8.434 20.1891 8.082H20.1881Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.47395 9C9.52895 9 9.58295 8.996 9.63695 8.989C10.581 8.861 11.1699 7.643 10.9569 6.267C10.7539 4.97 9.90995 4 9.02495 4C8.96995 4 8.91595 4.004 8.86195 4.011C7.91795 4.139 7.32895 5.357 7.54195 6.733C7.74595 8.026 8.58995 9 9.47495 9H9.47395Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.456 6.733C16.67 5.357 16.081 4.139 15.136 4.011C15.0823 4.00357 15.0282 3.99989 14.974 4C14.089 4 13.246 4.97 13.044 6.267C12.83 7.643 13.419 8.861 14.364 8.989C14.418 8.996 14.472 9 14.526 9C15.411 9 16.256 8.026 16.456 6.733V6.733Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.68995 12.918C6.50595 12.566 6.74395 11.199 6.22595 9.866C5.78995 8.742 4.95495 8 4.21695 8C4.07695 8 3.93995 8.027 3.80995 8.082C2.99395 8.434 2.75595 9.801 3.27395 11.134C3.70995 12.258 4.54495 13 5.28295 13C5.42295 13 5.55995 12.973 5.68995 12.918Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    