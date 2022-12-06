<script>
export default {
  name: 'polygon-svg',
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
<path d="M17.3295 6.15806L13.4205 5.09194M9.57759 6.00517L5.42241 9.74483M5.56466 12.5807L13.1853 18.1693M15.749 17.3778L18.751 8.87211M13.5 4.5C13.5 5.74264 12.4926 6.75 11.25 6.75C10.0074 6.75 9 5.74264 9 4.5C9 3.25736 10.0074 2.25 11.25 2.25C12.4926 2.25 13.5 3.25736 13.5 4.5ZM6 11.25C6 12.4926 4.99264 13.5 3.75 13.5C2.50736 13.5 1.5 12.4926 1.5 11.25C1.5 10.0074 2.50736 9 3.75 9C4.99264 9 6 10.0074 6 11.25ZM17.25 19.5C17.25 20.7426 16.2426 21.75 15 21.75C13.7574 21.75 12.75 20.7426 12.75 19.5C12.75 18.2574 13.7574 17.25 15 17.25C16.2426 17.25 17.25 18.2574 17.25 19.5ZM21.75 6.75C21.75 7.99264 20.7426 9 19.5 9C18.2574 9 17.25 7.99264 17.25 6.75C17.25 5.50736 18.2574 4.5 19.5 4.5C20.7426 4.5 21.75 5.50736 21.75 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    