<script>
export default {
  name: 'brand-react-native',
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
<path d="M6.357 9C3.72 9.68 2 10.845 2 12.175C2 14.282 6.405 16 11.85 16C12.59 16 13.11 15.961 13.8 15.903" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.83711 15.9C9.42411 15.304 9.03111 14.767 8.65711 14.1C5.90611 9.19998 5.16911 4.32998 7.02711 3.22698C8.17711 2.52998 10.0741 3.47998 12.0011 5.48098" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.42897 15.387C5.72697 18.075 5.86897 20.103 6.98897 20.782C8.77197 21.862 12.376 18.824 15.032 13.978C15.392 13.308 15.715 12.649 16 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18.5201C13.928 20.5201 15.817 21.4701 16.978 20.7731C18.828 19.6711 18.099 14.8011 15.345 9.9001C14.961 9.2231 14.568 8.6961 14.165 8.1001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.66 15C20.272 14.313 22 13.15 22 11.824C22 9.714 17.592 8 12.155 8C11.408 8 10.889 8.029 10.2 8.087" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12C8.285 11.34 8.607 10.692 8.968 10.022C11.615 5.178 15.221 2.132 17.014 3.221C18.124 3.9 18.276 5.927 17.574 8.614" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.26 12.015H12.25C12.24 12.145 12.13 12.255 11.99 12.255C11.923 12.2517 11.8599 12.2229 11.8134 12.1746C11.7669 12.1263 11.7407 12.062 11.74 11.995C11.74 11.855 11.85 11.745 11.98 11.745H11.97C12.1 11.735 12.22 11.855 12.22 11.985" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    