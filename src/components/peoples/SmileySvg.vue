<script>
export default {
  name: 'smiley-svg',
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
<path d="M8.74157 11.0625C9.25886 11.0625 9.67821 10.6428 9.67821 10.125C9.67821 9.60723 9.25886 9.1875 8.74157 9.1875C8.22428 9.1875 7.80493 9.60723 7.80493 10.125C7.80493 10.6428 8.22428 11.0625 8.74157 11.0625Z" fill="currentColor"/>
<path d="M15.4916 11.0625C16.0089 11.0625 16.4282 10.6428 16.4282 10.125C16.4282 9.60723 16.0089 9.1875 15.4916 9.1875C14.9743 9.1875 14.5549 9.60723 14.5549 10.125C14.5549 10.6428 14.9743 11.0625 15.4916 11.0625Z" fill="currentColor"/>
<path d="M16.0156 14.2498C15.6204 14.9339 15.0522 15.5021 14.3679 15.8971C13.6837 16.292 12.9075 16.5 12.1175 16.5C11.3274 16.5 10.5512 16.2921 9.86697 15.8971C9.18272 15.5021 8.61447 14.934 8.21934 14.2498M21.1174 12C21.1174 16.9706 17.088 21 12.1174 21C7.14687 21 3.11743 16.9706 3.11743 12C3.11743 7.02944 7.14687 3 12.1174 3C17.088 3 21.1174 7.02944 21.1174 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    