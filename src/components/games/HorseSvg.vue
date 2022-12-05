<script>
export default {
  name: 'horse-svg',
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
<path d="M16.6176 11.25C16.6176 12.4435 16.1435 13.5881 15.2995 14.432C14.4556 15.2759 13.311 15.75 12.1176 15.75M12.1176 15.75C9.62027 14.2517 6.75217 14.4163 5.11458 14.6936C4.6996 14.7644 4.27309 14.7174 3.88343 14.5581C3.49378 14.3987 3.15658 14.1334 2.91009 13.7921L1.61755 12L11.3676 6V3H12.1176C13.3102 3 14.491 3.23706 15.5913 3.6974C16.6916 4.15774 17.6893 4.83218 18.5267 5.68152C19.364 6.53085 20.0242 7.53815 20.4688 8.64485C20.9134 9.75156 21.1336 10.9356 21.1167 12.1282C21.0495 16.9548 17.1258 20.9028 12.2997 20.9982C10.023 21.0475 7.81278 20.2288 6.11751 18.7083M12.1176 15.75L8.81435 20.3745" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.7417 10.3125C12.259 10.3125 12.6783 9.89277 12.6783 9.375C12.6783 8.85723 12.259 8.4375 11.7417 8.4375C11.2244 8.4375 10.8051 8.85723 10.8051 9.375C10.8051 9.89277 11.2244 10.3125 11.7417 10.3125Z" fill="currentColor"/>
</svg>

</template>
    