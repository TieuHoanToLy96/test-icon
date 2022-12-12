<script>
export default {
  name: 'youtube-logo',
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
<path d="M15.0588 12L10.5588 8.99997V15L15.0588 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.30882 12C2.30882 14.7895 2.59702 16.4263 2.81611 17.2675C2.87468 17.4972 2.98714 17.7097 3.14419 17.8873C3.30124 18.0649 3.49835 18.2026 3.71919 18.2888C6.85765 19.4949 12.0588 19.4618 12.0588 19.4618C12.0588 19.4618 17.2599 19.4949 20.3984 18.2888C20.6193 18.2026 20.8164 18.0649 20.9734 17.8873C21.1305 17.7097 21.2429 17.4972 21.3015 17.2675C21.5206 16.4263 21.8088 14.7896 21.8088 12C21.8088 9.21039 21.5206 7.57368 21.3015 6.73247C21.243 6.50273 21.1305 6.29025 20.9735 6.11264C20.8164 5.93502 20.6193 5.79738 20.3985 5.71113C17.26 4.50506 12.0588 4.53818 12.0588 4.53818C12.0588 4.53818 6.85771 4.50506 3.71922 5.71112C3.49837 5.79737 3.30126 5.93501 3.14421 6.11262C2.98716 6.29024 2.8747 6.50272 2.81613 6.73246C2.59704 7.57366 2.30882 9.21039 2.30882 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    