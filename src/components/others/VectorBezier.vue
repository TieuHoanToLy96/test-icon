<script>
export default {
  name: 'vector-bezier',
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
<path d="M6 14H4C3.44772 14 3 14.4477 3 15V17C3 17.5523 3.44772 18 4 18H6C6.55228 18 7 17.5523 7 17V15C7 14.4477 6.55228 14 6 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 14H18C17.4477 14 17 14.4477 17 15V17C17 17.5523 17.4477 18 18 18H20C20.5523 18 21 17.5523 21 17V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 6H11C10.4477 6 10 6.44772 10 7V9C10 9.55228 10.4477 10 11 10H13C13.5523 10 14 9.55228 14 9V7C14 6.44772 13.5523 6 13 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 8.5C8.66974 8.72148 7.45289 9.38464 6.54574 10.3825C5.6386 11.3804 5.09407 12.6547 5 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8.5C15.3303 8.72148 16.5471 9.38464 17.4543 10.3825C18.3614 11.3804 18.9059 12.6547 19 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 8H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 8H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 9C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7C20.4477 7 20 7.44772 20 8C20 8.55228 20.4477 9 21 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    