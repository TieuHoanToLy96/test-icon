<script>
export default {
  name: 'brand-apple-podcast',
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
<path d="M18.364 18.3639C19.6227 17.1052 20.4798 15.5016 20.8271 13.7558C21.1743 12.0099 20.9961 10.2004 20.3149 8.55582C19.6337 6.91129 18.4802 5.50569 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C10.22 3 8.47992 3.52784 6.99988 4.51677C5.51984 5.50569 4.36629 6.91129 3.6851 8.55582C3.00391 10.2004 2.82567 12.0099 3.17293 13.7558C3.52019 15.5016 4.37734 17.1052 5.636 18.3639" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.7661 22H12.2341C12.7216 22.0001 13.1924 21.8221 13.558 21.4995C13.9235 21.1768 14.1586 20.7318 14.2191 20.248L14.7191 16.248C14.7542 15.9666 14.7291 15.6809 14.6455 15.4099C14.5618 15.1389 14.4214 14.8888 14.2337 14.6762C14.046 14.4636 13.8152 14.2934 13.5566 14.1768C13.2981 14.0602 13.0177 13.9999 12.7341 14H11.2661C10.9824 13.9999 10.7021 14.0602 10.4435 14.1768C10.185 14.2934 9.95416 14.4636 9.76644 14.6762C9.57871 14.8888 9.43835 15.1389 9.35466 15.4099C9.27098 15.6809 9.24589 15.9666 9.28106 16.248L9.78106 20.248C9.84152 20.7318 10.0766 21.1768 10.4422 21.4995C10.8077 21.8221 11.2785 22.0001 11.7661 22V22Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    