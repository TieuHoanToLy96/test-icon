<script>
export default {
  name: 'smiley-sticker',
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
<path d="M15.5862 20.6049C13.6678 21.1932 11.6077 21.1228 9.73389 20.4049C7.8601 19.687 6.28034 18.3629 5.24611 16.6433C4.21189 14.9238 3.78265 12.9076 4.02674 10.9159C4.27083 8.92423 5.17421 7.07143 6.59306 5.65251C8.01192 4.23358 9.86468 3.33011 11.8564 3.08593C13.8481 2.84175 15.8642 3.27089 17.5838 4.30504C19.3034 5.33918 20.6276 6.91888 21.3456 8.79264C22.0636 10.6664 22.1341 12.7265 21.5459 14.645L15.5862 20.6049Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.56506 11.0625C10.0823 11.0625 10.5017 10.6428 10.5017 10.125C10.5017 9.60723 10.0823 9.1875 9.56506 9.1875C9.04777 9.1875 8.62842 9.60723 8.62842 10.125C8.62842 10.6428 9.04777 11.0625 9.56506 11.0625Z" fill="currentColor"/>
<path d="M16.3151 11.0625C16.8323 11.0625 17.2517 10.6428 17.2517 10.125C17.2517 9.60723 16.8323 9.1875 16.3151 9.1875C15.7978 9.1875 15.3784 9.60723 15.3784 10.125C15.3784 10.6428 15.7978 11.0625 16.3151 11.0625Z" fill="currentColor"/>
<path d="M16.8389 14.2498C16.4438 14.9339 15.8756 15.5021 15.1913 15.8971C14.5071 16.2921 13.7309 16.5 12.9408 16.5C12.1508 16.5 11.3746 16.2921 10.6904 15.8971C10.0061 15.5021 9.43786 14.934 9.04272 14.2498" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    