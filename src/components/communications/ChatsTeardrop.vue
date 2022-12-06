<script>
export default {
  name: 'chats-teardrop',
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
<path d="M9.39884 16.4995C9.86463 17.8156 10.7269 18.9549 11.8669 19.7608C13.0069 20.5666 14.3686 20.9993 15.7646 20.9993H21.9522C22.1013 20.9993 22.2444 20.94 22.3499 20.8345C22.4554 20.729 22.5147 20.586 22.5147 20.4368V14.2492C22.5146 12.5229 21.8532 10.8621 20.6663 9.60848C19.4794 8.35483 17.8573 7.60357 16.1335 7.50917M9.76466 16.4993H3.57715C3.42796 16.4993 3.28489 16.44 3.1794 16.3345C3.07391 16.229 3.01465 16.086 3.01465 15.9368V9.74925C3.01465 7.95904 3.72581 6.24216 4.99168 4.97629C6.25754 3.71042 7.97443 2.99927 9.76464 2.99927C11.5548 2.99927 13.2717 3.71043 14.5376 4.9763C15.8035 6.24217 16.5147 7.95906 16.5147 9.74927C16.5147 11.5395 15.8035 13.2564 14.5376 14.5222C13.2718 15.7881 11.5549 16.4993 9.76466 16.4993Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    