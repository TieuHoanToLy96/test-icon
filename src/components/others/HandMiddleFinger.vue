<script>
export default {
  name: 'hand-middle-finger',
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
<path d="M8 13V10.5C8 10.1022 8.15804 9.72064 8.43934 9.43934C8.72064 9.15804 9.10218 9 9.5 9C9.89782 9 10.2794 9.15804 10.5607 9.43934C10.842 9.72064 11 10.1022 11 10.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10.5C14 10.1022 14.158 9.72064 14.4393 9.43934C14.7206 9.15804 15.1022 9 15.5 9C15.8978 9 16.2794 9.15804 16.5607 9.43934C16.842 9.72064 17 10.1022 17 10.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0002 11.5C17.0002 11.1022 17.1582 10.7206 17.4395 10.4393C17.7208 10.158 18.1024 10 18.5002 10C18.898 10 19.2795 10.158 19.5608 10.4393C19.8421 10.7206 20.0002 11.1022 20.0002 11.5V16C20.0002 17.5913 19.368 19.1174 18.2428 20.2426C17.1176 21.3679 15.5915 22 14.0002 22H12.0002H12.2082C11.2145 22.0002 10.2364 21.7535 9.36157 21.2823C8.48676 20.811 7.7427 20.1299 7.19618 19.3C7.13059 19.2002 7.06526 19.1002 7.00018 19C6.68818 18.521 5.59318 16.612 3.71418 13.272C3.52263 12.9315 3.47147 12.5298 3.57157 12.1522C3.67166 11.7745 3.91513 11.4509 4.25018 11.25C4.60706 11.0359 5.02526 10.9471 5.43834 10.9978C5.85143 11.0486 6.23572 11.2359 6.53018 11.53L8.00018 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 11.5V3.5C11 3.30302 11.0388 3.10796 11.1142 2.92597C11.1896 2.74399 11.3001 2.57863 11.4393 2.43934C11.5786 2.30005 11.744 2.18956 11.926 2.11418C12.108 2.0388 12.303 2 12.5 2C12.697 2 12.892 2.0388 13.074 2.11418C13.256 2.18956 13.4214 2.30005 13.5607 2.43934C13.6999 2.57863 13.8104 2.74399 13.8858 2.92597C13.9612 3.10796 14 3.30302 14 3.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    