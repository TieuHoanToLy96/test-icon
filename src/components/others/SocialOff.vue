<script>
export default {
  name: 'social-off',
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
<path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5699 17.6021C17.195 17.9773 16.9846 18.4862 16.9849 19.0166C16.9851 19.5471 17.1961 20.0557 17.5714 20.4306C17.9467 20.8054 18.4555 21.0159 18.986 21.0156C19.5164 21.0153 20.025 20.8043 20.3999 20.4291" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.113 11.1328C10.6174 11.286 10.1699 11.5651 9.81423 11.9429C9.4586 12.3207 9.20698 12.7842 9.08392 13.2882C8.96087 13.7922 8.97058 14.3195 9.11212 14.8187C9.25366 15.3178 9.52219 15.7717 9.8915 16.1361C10.2608 16.5005 10.7183 16.763 11.2193 16.8978C11.7203 17.0327 12.2476 17.0353 12.75 16.9056C13.2523 16.7758 13.7124 16.518 14.0854 16.1573C14.4584 15.7967 14.7315 15.3455 14.878 14.8478" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.69995 17.7998L9.49995 15.7998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3 17.7998L14.5 15.7998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    