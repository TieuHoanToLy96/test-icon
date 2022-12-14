<script>
export default {
  name: 'chat-centered',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6786 18.3641L13.2902 20.6781C13.2235 20.7891 13.1293 20.8811 13.0166 20.9449C12.9039 21.0087 12.7765 21.0422 12.647 21.0422C12.5175 21.0422 12.3902 21.0087 12.2775 20.9449C12.1648 20.8811 12.0705 20.7891 12.0039 20.6781L10.6155 18.3641C10.5489 18.253 10.4546 18.1611 10.3419 18.0973C10.2292 18.0335 10.1019 18 9.97239 18H4.39703C4.19812 18 4.00736 17.9209 3.8667 17.7803C3.72605 17.6396 3.64703 17.4489 3.64703 17.25V5.25C3.64703 5.05109 3.72605 4.86032 3.8667 4.71967C4.00736 4.57902 4.19812 4.5 4.39703 4.5H20.897C21.0959 4.5 21.2867 4.57902 21.4274 4.71967C21.568 4.86032 21.647 5.05109 21.647 5.25V17.25C21.647 17.4489 21.568 17.6397 21.4274 17.7803C21.2867 17.921 21.0959 18 20.897 18L15.3217 18C15.1922 18 15.0649 18.0335 14.9522 18.0973C14.8395 18.1611 14.7452 18.253 14.6786 18.3641V18.3641Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    