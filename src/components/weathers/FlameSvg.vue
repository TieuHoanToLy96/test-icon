<script>
export default {
  name: 'flame-svg',
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
<path d="M12.4119 21C10.4227 21 8.51509 20.2098 7.10856 18.8033C5.70204 17.3968 4.91187 15.4891 4.91187 13.5C4.91187 6.75 12.4119 2.25 12.4119 2.25C12.4119 2.25 19.9119 6.75 19.9119 13.5C19.9119 15.4891 19.1217 17.3968 17.7152 18.8033C16.3086 20.2098 14.401 21 12.4119 21ZM12.4119 21C11.4173 21 10.4635 20.6049 9.76021 19.9017C9.05695 19.1984 8.66187 18.2446 8.66187 17.25C8.66187 13.5 12.4119 11.25 12.4119 11.25C12.4119 11.25 16.1619 13.5 16.1619 17.25C16.1619 18.2446 15.7668 19.1984 15.0635 19.9017C14.3603 20.6049 13.4064 21 12.4119 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    