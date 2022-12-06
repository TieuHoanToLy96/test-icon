<script>
export default {
  name: 'recycle-svg',
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
<path d="M14.25 21.75L12 19.4992M12 19.4992L14.25 17.25M12 19.4992L20.2478 19.4993C20.5112 19.4993 20.77 19.4299 20.9981 19.2981C21.2263 19.1663 21.4156 18.9768 21.5472 18.7486C21.6788 18.5203 21.748 18.2615 21.7478 17.998C21.7476 17.7346 21.678 17.4758 21.546 17.2478L19.3006 13.3686M18.2463 7.04925L17.4221 10.1232M17.4221 10.1232L14.3492 9.29925M17.4221 10.1232L13.2982 2.99857C13.1664 2.77093 12.9771 2.58193 12.7493 2.45055C12.5214 2.31916 12.263 2.25 12 2.25C11.737 2.25 11.4786 2.31916 11.2507 2.45055C11.0229 2.58193 10.8336 2.77093 10.7018 2.99857L8.45648 6.87769M7.40213 13.1971L6.57788 10.1232M6.57788 10.1232L3.50494 10.9471M6.57788 10.1232L2.45402 17.2478C2.32204 17.4759 2.25245 17.7346 2.25223 17.998C2.25201 18.2615 2.32118 18.5203 2.45278 18.7486C2.58437 18.9768 2.77376 19.1663 3.00187 19.2981C3.22999 19.4299 3.48879 19.4993 3.75223 19.4993H8.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    