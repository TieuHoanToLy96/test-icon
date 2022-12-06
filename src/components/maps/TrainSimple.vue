<script>
export default {
  name: 'train-simple',
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
<path d="M4.41919 12H20.1692M9.29419 19.5L7.04419 22.5M15.2942 19.5L17.5442 22.5M6.66919 3H17.9192C19.1618 3 20.1692 4.00736 20.1692 5.25V17.25C20.1692 18.4926 19.1618 19.5 17.9192 19.5H6.66919C5.42655 19.5 4.41919 18.4926 4.41919 17.25V5.25C4.41919 4.00736 5.42655 3 6.66919 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4192 17.0625C16.937 17.0625 17.3567 16.6428 17.3567 16.125C17.3567 15.6072 16.937 15.1875 16.4192 15.1875C15.9014 15.1875 15.4817 15.6072 15.4817 16.125C15.4817 16.6428 15.9014 17.0625 16.4192 17.0625Z" fill="currentColor"/>
<path d="M8.16919 17.0625C8.68696 17.0625 9.10669 16.6428 9.10669 16.125C9.10669 15.6072 8.68696 15.1875 8.16919 15.1875C7.65142 15.1875 7.23169 15.6072 7.23169 16.125C7.23169 16.6428 7.65142 17.0625 8.16919 17.0625Z" fill="currentColor"/>
</svg>

</template>
    