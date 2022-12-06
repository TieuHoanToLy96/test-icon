<script>
export default {
  name: 'airplane-takeoff',
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
<path d="M2.66172 20.25H16.1617M1.99864 13.1596L5.53258 16.4727C6.00343 16.9141 6.60408 17.1919 7.24535 17.2648C7.88662 17.3378 8.53431 17.202 9.09227 16.8776L23.2867 8.62499L21.5393 6.48924C21.086 5.93517 20.4494 5.56147 19.7447 5.43565C19.0399 5.30983 18.3134 5.44018 17.6964 5.80315L13.5367 8.24999L7.91172 6.37499L6.36494 7.0379C6.24922 7.08749 6.14784 7.16542 6.07016 7.2645C5.99248 7.36358 5.94099 7.48062 5.92044 7.60484C5.89989 7.72905 5.91094 7.85644 5.95257 7.97526C5.9942 8.09408 6.06507 8.2005 6.15866 8.28473L9.03672 10.875L6.41172 12.375L3.78672 11.25L2.21616 11.9231C2.10162 11.9722 2.00112 12.049 1.92374 12.1467C1.84636 12.2444 1.79453 12.3598 1.77294 12.4825C1.75135 12.6052 1.76068 12.7314 1.80009 12.8496C1.83949 12.9678 1.90773 13.0744 1.99864 13.1596Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    