<script>
export default {
  name: 'circle-wavy-check',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.98559 18.8943C5.12272 18.0314 5.69503 16.2198 5.25583 15.1584C4.80054 14.058 3.12988 13.1723 3.12988 12C3.12988 10.8276 4.80055 9.942 5.25584 8.84164C5.69503 7.78015 5.12272 5.96858 5.98559 5.10571C6.84847 4.24283 8.66004 4.81514 9.72153 4.37595C10.8219 3.92066 11.7075 2.25 12.8799 2.25C14.0523 2.25 14.9379 3.92067 16.0382 4.37595C17.0997 4.81515 18.9113 4.24283 19.7742 5.10571C20.6371 5.96858 20.0647 7.78016 20.5039 8.84165C20.9592 9.94203 22.6299 10.8277 22.6299 12C22.6299 13.1724 20.9592 14.058 20.5039 15.1584C20.0647 16.2199 20.637 18.0314 19.7742 18.8943C18.9113 19.7572 17.0997 19.1849 16.0382 19.6241C14.9379 20.0793 14.0522 21.75 12.8798 21.75C11.7075 21.75 10.8219 20.0793 9.72152 19.624C8.66003 19.1848 6.84847 19.7572 5.98559 18.8943Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0049 9.75L11.5049 15L8.75488 12.375" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    