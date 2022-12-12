<script>
export default {
  name: 'device-computer-camera-off',
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
<path d="M6.15002 6.15309C5.26388 7.49891 4.86918 9.10925 5.03254 10.7123C5.1959 12.3154 5.90732 13.813 7.04672 14.9524C8.18613 16.0918 9.68375 16.8032 11.2868 16.9666C12.8899 17.1299 14.5002 16.7352 15.846 15.8491M17.846 13.8491C18.7329 12.503 19.128 10.8921 18.9647 9.28846C18.8013 7.68479 18.0895 6.18664 16.9494 5.04705C15.8094 3.90745 14.3109 3.19625 12.7072 3.03356C11.1035 2.87087 9.49272 3.26666 8.14702 4.15409" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.12995 9.12211C8.97038 9.64257 8.95543 10.1966 9.08671 10.7249C9.21798 11.2532 9.49053 11.7359 9.87515 12.1211C10.2598 12.5063 10.742 12.7797 11.2701 12.9118C11.7981 13.0439 12.3522 13.0298 12.8729 12.8711M14.8729 10.8711C15.0289 10.3521 15.0413 9.80049 14.9088 9.27497C14.7764 8.74945 14.5041 8.26962 14.1208 7.88645C13.7375 7.50329 13.2576 7.2311 12.7321 7.09881C12.2065 6.96652 11.6549 6.97906 11.1359 7.13511" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00006 16L5.90906 19.486C5.81816 19.6377 5.76911 19.8108 5.76692 19.9876C5.76473 20.1645 5.80948 20.3387 5.89659 20.4926C5.98371 20.6465 6.11008 20.7746 6.26282 20.8637C6.41556 20.9528 6.58921 20.9999 6.76606 21H17.2341C17.4109 20.9999 17.5845 20.9528 17.7373 20.8637C17.89 20.7746 18.0164 20.6465 18.1035 20.4926C18.1906 20.3387 18.2354 20.1645 18.2332 19.9876C18.231 19.8108 18.182 19.6377 18.0911 19.486L16.0001 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    