<script>
export default {
  name: 'tag-svg',
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
<path d="M11.794 2.42619L4.23262 3.93846L2.72034 11.4998C2.69613 11.6209 2.70218 11.7461 2.73796 11.8642C2.77374 11.9824 2.83814 12.0899 2.92545 12.1772L12.7179 21.9697C12.7875 22.0393 12.8702 22.0946 12.9612 22.1323C13.0522 22.17 13.1497 22.1894 13.2482 22.1894C13.3467 22.1894 13.4442 22.17 13.5352 22.1323C13.6262 22.0946 13.7089 22.0393 13.7786 21.9697L22.2638 13.4844C22.3335 13.4148 22.3887 13.3321 22.4264 13.2411C22.4641 13.1501 22.4835 13.0526 22.4835 12.9541C22.4835 12.8556 22.4641 12.7581 22.4264 12.6671C22.3887 12.5761 22.3335 12.4934 22.2638 12.4237L12.4714 2.63129C12.3841 2.54398 12.2766 2.47958 12.1584 2.4438C12.0402 2.40802 11.915 2.40197 11.794 2.42619V2.42619Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.1683 8.8125C8.68559 8.8125 9.10494 8.39277 9.10494 7.875C9.10494 7.35723 8.68559 6.9375 8.1683 6.9375C7.65101 6.9375 7.23166 7.35723 7.23166 7.875C7.23166 8.39277 7.65101 8.8125 8.1683 8.8125Z" fill="currentColor"/>
</svg>

</template>
    