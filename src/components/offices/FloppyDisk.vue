<script>
export default {
  name: 'floppy-disk',
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
<path d="M7.61743 20.2508V14.2508C7.61743 14.0519 7.69645 13.8611 7.8371 13.7205C7.97775 13.5798 8.16852 13.5008 8.36743 13.5008H15.8674C16.0663 13.5008 16.2571 13.5798 16.3978 13.7205C16.5384 13.8611 16.6174 14.0519 16.6174 14.2508V20.2508M14.3674 6.75085H9.11743M20.3674 8.56066V19.5C20.3674 19.6989 20.2884 19.8897 20.1478 20.0303C20.0071 20.171 19.8163 20.25 19.6174 20.25H4.61743C4.41852 20.25 4.22775 20.171 4.0871 20.0303C3.94645 19.8897 3.86743 19.6989 3.86743 19.5V4.5C3.86743 4.30109 3.94645 4.11032 4.0871 3.96967C4.22775 3.82902 4.41852 3.75 4.61743 3.75H15.5568C15.6553 3.75 15.7528 3.7694 15.8438 3.80709C15.9348 3.84478 16.0175 3.90003 16.0871 3.96967L20.1478 8.03033C20.2174 8.09997 20.2727 8.18265 20.3103 8.27365C20.348 8.36464 20.3674 8.46217 20.3674 8.56066Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    