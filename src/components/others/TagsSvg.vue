<script>
export default {
  name: 'tags-svg',
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
<path d="M7.859 6H5.025C4.48794 6 3.97287 6.21335 3.59311 6.59311C3.21335 6.97287 3 7.48794 3 8.025V10.859C3 11.396 3.213 11.911 3.593 12.291L9.709 18.407C9.89704 18.5951 10.1203 18.7443 10.366 18.846C10.6117 18.9478 10.875 19.0002 11.141 19.0002C11.407 19.0002 11.6703 18.9478 11.916 18.846C12.1617 18.7443 12.385 18.5951 12.573 18.407L15.407 15.573C15.5951 15.385 15.7443 15.1617 15.846 14.916C15.9478 14.6703 16.0002 14.407 16.0002 14.141C16.0002 13.875 15.9478 13.6117 15.846 13.366C15.7443 13.1203 15.5951 12.897 15.407 12.709L9.29 6.593C8.91044 6.2135 8.39574 6.00021 7.859 6V6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.573 18.4068L20.407 15.5728C20.5951 15.3847 20.7443 15.1615 20.8461 14.9158C20.9479 14.6701 21.0003 14.4067 21.0003 14.1408C21.0003 13.8748 20.9479 13.6115 20.8461 13.3658C20.7443 13.1201 20.5951 12.8968 20.407 12.7088L13.29 5.59277" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00023 9H5.99023" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    