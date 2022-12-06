<script>
export default {
  name: 'handbag-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.54416 6.75C8.54416 5.75544 8.93925 4.80161 9.64251 4.09835C10.3458 3.39509 11.2996 3 12.2942 3C13.2887 3 14.2426 3.39509 14.9458 4.09835C15.6491 4.80161 16.0442 5.75544 16.0442 6.75M19.8729 6.75H4.71544C4.53087 6.75 4.35278 6.81806 4.21525 6.94115C4.07772 7.06425 3.99041 7.23373 3.97003 7.41718L2.6367 19.4172C2.62505 19.522 2.63565 19.6281 2.66779 19.7286C2.69994 19.829 2.75292 19.9216 2.82326 20.0002C2.89361 20.0788 2.97975 20.1417 3.07604 20.1847C3.17234 20.2278 3.27663 20.25 3.38211 20.25H21.2062C21.3117 20.25 21.416 20.2278 21.5123 20.1847C21.6086 20.1417 21.6947 20.0788 21.7651 20.0002C21.8354 19.9216 21.8884 19.829 21.9205 19.7286C21.9527 19.6281 21.9633 19.522 21.9516 19.4172L20.6183 7.41718C20.5979 7.23373 20.5106 7.06425 20.3731 6.94115C20.2355 6.81806 20.0575 6.75 19.8729 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    