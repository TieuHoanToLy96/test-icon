<script>
export default {
  name: 'desktop-tower',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2056 17.25H3.70557C3.30774 17.25 2.92621 17.092 2.64491 16.8107C2.3636 16.5294 2.20557 16.1478 2.20557 15.75V9C2.20557 8.60218 2.3636 8.22064 2.64491 7.93934C2.92621 7.65804 3.30774 7.5 3.70557 7.5H11.2056M11.2056 20.25H6.70557M20.2056 6.75H17.2056M20.2056 9.75H17.2056M8.95557 17.25V20.25M14.9556 3.75H22.4556C22.8698 3.75 23.2056 4.08579 23.2056 4.5V19.5C23.2056 19.9142 22.8698 20.25 22.4556 20.25H14.9556C14.5414 20.25 14.2056 19.9142 14.2056 19.5V4.5C14.2056 4.08579 14.5414 3.75 14.9556 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7047 17.8125C19.222 17.8125 19.6413 17.3928 19.6413 16.875C19.6413 16.3572 19.222 15.9375 18.7047 15.9375C18.1874 15.9375 17.7681 16.3572 17.7681 16.875C17.7681 17.3928 18.1874 17.8125 18.7047 17.8125Z" fill="currentColor"/>
</svg>

</template>
    