<script>
export default {
  name: 'tote-simple',
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
<path d="M8.36765 6.75C8.36765 5.75544 8.76274 4.80161 9.466 4.09835C10.1693 3.39509 11.1231 3 12.1176 3C13.1122 3 14.066 3.39509 14.7693 4.09835C15.4726 4.80161 15.8676 5.75544 15.8676 6.75M19.6964 20.25H4.53893C4.35436 20.25 4.17627 20.1819 4.03874 20.0588C3.90121 19.9358 3.8139 19.7663 3.79352 19.5828L2.46018 7.58282C2.44854 7.47799 2.45913 7.37188 2.49128 7.27142C2.52343 7.17095 2.5764 7.0784 2.64675 6.99981C2.7171 6.92121 2.80323 6.85834 2.89953 6.81529C2.99582 6.77225 3.10012 6.75 3.2056 6.75H21.0297C21.1352 6.75 21.2395 6.77225 21.3358 6.81529C21.4321 6.85834 21.5182 6.92121 21.5885 6.99981C21.6589 7.0784 21.7119 7.17095 21.744 7.27142C21.7762 7.37188 21.7868 7.47799 21.7751 7.58282L20.4418 19.5828C20.4214 19.7663 20.3341 19.9358 20.1966 20.0588C20.059 20.1819 19.8809 20.25 19.6964 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    