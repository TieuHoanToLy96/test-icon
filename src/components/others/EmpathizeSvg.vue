<script>
export default {
  name: 'empathize-svg',
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
<path d="M12 8C13.3807 8 14.5 6.88071 14.5 5.5C14.5 4.11929 13.3807 3 12 3C10.6193 3 9.5 4.11929 9.5 5.5C9.5 6.88071 10.6193 8 12 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21.368L17.095 16.272C17.3848 15.9859 17.6152 15.6453 17.7728 15.2699C17.9305 14.8944 18.0123 14.4915 18.0136 14.0843C18.015 13.6771 17.9357 13.2737 17.7805 12.8972C17.6253 12.5208 17.3971 12.1787 17.1092 11.8908C16.8213 11.6028 16.4792 11.3747 16.1028 11.2195C15.7263 11.0643 15.3229 10.985 14.9157 10.9863C14.5085 10.9877 14.1055 11.0695 13.7301 11.2272C13.3546 11.3848 13.0141 11.6152 12.728 11.905L12 12.632L11.272 11.905C10.986 11.6152 10.6454 11.3848 10.27 11.2272C9.8945 11.0695 9.49158 10.9877 9.08438 10.9863C8.67718 10.985 8.27374 11.0643 7.89728 11.2195C7.52082 11.3747 7.17878 11.6028 6.89084 11.8908C6.60291 12.1787 6.37476 12.5208 6.21954 12.8972C6.06432 13.2737 5.98509 13.6771 5.98641 14.0843C5.98772 14.4915 6.06956 14.8944 6.22722 15.2699C6.38487 15.6453 6.61523 15.9859 6.90502 16.272L12 21.368V21.368Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    