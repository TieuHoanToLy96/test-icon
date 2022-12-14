<script>
export default {
  name: 'trophy-svg',
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
<path d="M9.23518 21H15.2352M12.2352 17.25V21M18.8179 12H19.7352C20.5308 12 21.2939 11.6839 21.8565 11.1213C22.4191 10.5587 22.7352 9.79565 22.7352 9V7.5C22.7352 7.30109 22.6562 7.11032 22.5155 6.96967C22.3749 6.82902 22.1841 6.75 21.9852 6.75H18.9852M5.66931 12H4.72327C3.92762 12 3.16456 11.6839 2.60195 11.1213C2.03934 10.5587 1.72327 9.79565 1.72327 9V7.5C1.72327 7.30109 1.80228 7.11032 1.94294 6.96967C2.08359 6.82902 2.27435 6.75 2.47327 6.75H5.47327M5.48518 5.25V10.4153C5.48518 14.1372 8.46218 17.2222 12.184 17.2498C13.0747 17.2566 13.9579 17.087 14.7828 16.7508C15.6076 16.4146 16.3578 15.9185 16.99 15.291C17.6222 14.6636 18.124 13.9172 18.4665 13.0949C18.8089 12.2727 18.9852 11.3907 18.9852 10.5V5.25C18.9852 5.05109 18.9062 4.86032 18.7655 4.71967C18.6249 4.57902 18.4341 4.5 18.2352 4.5H6.23518C6.03627 4.5 5.84551 4.57902 5.70485 4.71967C5.5642 4.86032 5.48518 5.05109 5.48518 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    