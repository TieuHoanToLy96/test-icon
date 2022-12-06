<script>
export default {
  name: 'chat-circle',
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
<path d="M5.08256 16.5935C3.96437 14.7085 3.57277 12.4802 3.98129 10.3269C4.38982 8.17359 5.57036 6.2435 7.30125 4.89903C9.03213 3.55455 11.1943 2.8882 13.3817 3.02508C15.5691 3.16196 17.6314 4.09267 19.1811 5.64244C20.7309 7.1922 21.6616 9.25442 21.7985 11.4418C21.9354 13.6293 21.2691 15.7914 19.9246 17.5223C18.5801 19.2532 16.6501 20.4338 14.4968 20.8423C12.3435 21.2508 10.1151 20.8593 8.23009 19.7411L8.23012 19.741L5.12169 20.6291C4.99308 20.6658 4.85699 20.6675 4.72751 20.634C4.59804 20.6004 4.47989 20.5329 4.38531 20.4383C4.29073 20.3437 4.22317 20.2256 4.18962 20.0961C4.15607 19.9666 4.15776 19.8305 4.1945 19.7019L5.08262 16.5935L5.08256 16.5935Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    