<script>
export default {
  name: 'brand-sharik',
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
<path d="M4.28103 16.6061C3.2484 14.8874 2.82153 12.8722 3.0686 10.8824C3.31567 8.89262 4.22242 7.04303 5.64403 5.62906C7.06835 4.21216 8.92437 3.31053 10.9186 3.06676C12.9128 2.82298 14.9313 3.25098 16.655 4.28306C15.071 8.97506 14.24 11.2431 12 13.0001C10.416 14.2421 8.16403 15.2401 4.28103 16.6061ZM20.616 9.30006C22.729 16.8901 15.724 22.6611 9.31403 20.5641C11.245 17.4641 12.549 15.9581 14 14.4991C15.705 12.7841 17.591 11.2691 20.616 9.30006V9.30006Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    