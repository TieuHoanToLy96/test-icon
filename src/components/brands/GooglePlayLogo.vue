<script>
export default {
  name: 'google-play-logo',
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
<path d="M4.19478 2.45947L16.7274 14.992M4.19483 21.5405L16.7273 9.00796M3.9678 21.0135C3.97028 21.1446 4.00698 21.2727 4.07428 21.3852C4.14159 21.4977 4.23714 21.5907 4.35146 21.6548C4.46579 21.719 4.5949 21.7521 4.726 21.751C4.85709 21.7498 4.98561 21.7144 5.09878 21.6483L20.8335 12.6416C20.9496 12.5795 21.0467 12.487 21.1144 12.374C21.1821 12.261 21.2178 12.1317 21.2178 12C21.2178 11.8683 21.1821 11.739 21.1144 11.626C21.0467 11.513 20.9496 11.4205 20.8335 11.3583L5.09878 2.35173C4.98561 2.28556 4.85709 2.25014 4.726 2.24899C4.5949 2.24784 4.46579 2.28099 4.35146 2.34516C4.23714 2.40932 4.14159 2.50227 4.07428 2.61478C4.00698 2.72728 3.97028 2.85543 3.9678 2.98651V21.0135Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    