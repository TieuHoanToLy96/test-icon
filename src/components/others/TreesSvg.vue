<script>
export default {
  name: 'trees-svg',
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
<path d="M16 5L19 8L17 9L21 13L18 14L22 18H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13L6 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12L10 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 21V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.82411 15.9951C5.38658 15.9694 4.95998 15.8483 4.57431 15.6401C4.18865 15.4319 3.85328 15.1417 3.59181 14.7899C3.33035 14.4382 3.14912 14.0334 3.06089 13.6041C2.97265 13.1748 2.97956 12.7314 3.08111 12.3051C2.71819 12.0034 2.43162 11.6203 2.2447 11.187C2.05778 10.7537 1.9758 10.2823 2.00543 9.81134C2.03505 9.34035 2.17545 8.88301 2.41519 8.47652C2.65494 8.07003 2.98725 7.72588 3.38511 7.47206C3.03648 6.85272 2.91906 6.12971 3.05377 5.43187C3.18848 4.73403 3.56657 4.10668 4.12068 3.6616C4.67478 3.21651 5.3689 2.98261 6.07938 3.00156C6.78985 3.0205 7.47052 3.29108 8.00011 3.76506C8.52982 3.29183 9.21027 3.0219 9.92034 3.00331C10.6304 2.98473 11.324 3.21871 11.8778 3.66359C12.4315 4.10848 12.8094 4.73541 12.9443 5.43281C13.0791 6.13022 12.9621 6.85284 12.6141 7.47206C13.0122 7.72565 13.3448 8.06968 13.5848 8.47613C13.8247 8.88259 13.9653 9.33997 13.995 9.81104C14.0247 10.2821 13.9428 10.7535 13.7558 11.1869C13.5689 11.6203 13.2822 12.0034 12.9191 12.3051C13.0241 12.7459 13.0278 13.2047 12.9301 13.6472C12.8324 14.0896 12.6357 14.5042 12.3548 14.8597C12.0739 15.2153 11.7161 15.5026 11.3083 15.7001C10.9005 15.8976 10.4532 16.0002 10.0001 16.0001H6.00011L5.82411 15.9951Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    