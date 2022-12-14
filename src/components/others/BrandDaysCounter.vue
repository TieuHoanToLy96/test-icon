<script>
export default {
  name: 'brand-days-counter',
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
<path d="M20.779 10.007C20.4222 8.438 19.6513 6.99335 18.5466 5.82348C17.4418 4.65361 16.0436 3.8013 14.4976 3.35531C12.9516 2.90932 11.3143 2.88596 9.7562 3.28766C8.19809 3.68936 6.77617 4.50144 5.6385 5.63932C4.50083 6.7772 3.68902 8.19927 3.28761 9.75745C2.8862 11.3156 2.90986 12.9529 3.35614 14.4989C3.80242 16.0448 4.65498 17.4428 5.82506 18.5473C6.99514 19.6519 8.43993 20.4225 10.009 20.779" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 21H21V14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V12L15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    