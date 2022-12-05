<script>
export default {
  name: 'brand-edge',
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
<path d="M20.978 11.3721C20.8296 9.25371 19.9369 7.25603 18.4578 5.73229C16.9787 4.20855 15.0084 3.25691 12.8954 3.04564C10.7824 2.83437 8.66267 3.37709 6.91115 4.57781C5.15964 5.77854 3.88911 7.55994 3.32425 9.60701C2.75938 11.6541 2.93655 13.8349 3.82444 15.764C4.71233 17.693 6.25374 19.246 8.17611 20.1482C10.0985 21.0505 12.278 21.244 14.3292 20.6944C16.3804 20.1448 18.1712 18.8876 19.385 17.1451" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9781 11.372C21.1881 14.365 15.9441 13.785 14.0651 12.858C15.4571 11.258 14.4671 8.81998 11.7911 9.00698C10.0461 9.12898 8.86406 10.164 9.00706 12.209C9.28706 16.199 13.4511 18.414 19.3671 16.999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.02203 12.6281C2.73903 8.58511 11.739 5.40011 14.27 9.94011" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.628 20.978C9.63504 21.188 7.46604 16.253 9.06104 11.23" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    