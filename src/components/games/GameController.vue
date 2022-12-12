<script>
export default {
  name: 'game-controller',
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
<path d="M14.603 10.125H17.6003" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.10303 10.125H10.1003" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.60303 8.625V11.625" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4798 5.22559L8.22847 5.24998C7.0823 5.25006 5.97279 5.65388 5.09471 6.39053C4.21662 7.12718 3.62607 8.1496 3.42673 9.2783L3.42753 9.27844L1.89337 17.1687C1.79647 17.7185 1.87735 18.2849 2.12428 18.7855C2.37121 19.2862 2.77131 19.6952 3.26649 19.9529C3.76167 20.2107 4.32614 20.3039 4.87791 20.219C5.42967 20.1341 5.94001 19.8756 6.3348 19.4809L6.33465 19.4807L10.388 15L16.4798 14.9756C17.7727 14.9756 19.0127 14.462 19.9269 13.5477C20.8412 12.6335 21.3548 11.3935 21.3548 10.1006C21.3548 8.80766 20.8412 7.56768 19.9269 6.65344C19.0127 5.7392 17.7727 5.22559 16.4798 5.22559V5.22559Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.2807 9.25403L22.8136 17.1687C22.9105 17.7185 22.8296 18.2848 22.5827 18.7855C22.3358 19.2862 21.9356 19.6951 21.4405 19.9529C20.9453 20.2107 20.3808 20.3039 19.829 20.219C19.2773 20.1341 18.7669 19.8755 18.3722 19.4808L18.3723 19.4807L14.3218 14.9842" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    