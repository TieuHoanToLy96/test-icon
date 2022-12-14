<script>
export default {
  name: 'volleyball-svg',
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
<path d="M21.2941 12C21.2941 16.9706 17.2646 21 12.2941 21C7.32351 21 3.29407 16.9706 3.29407 12C3.29407 7.02944 7.32351 3 12.2941 3C17.2646 3 21.2941 7.02944 21.2941 12ZM21.2941 12H12.2941M7.79407 4.20577L12.2941 12M12.2941 12L7.79407 19.7942M11.2233 3.06154C12.9212 3.82192 14.3418 5.08952 15.2899 6.6901C16.2381 8.29068 16.6671 10.1457 16.5182 12M5.08851 17.3965C4.8981 15.546 5.28556 13.6819 6.19763 12.0605C7.10971 10.4391 8.50161 9.13998 10.182 8.34179M20.5704 15.5419C19.063 16.6321 17.2549 17.2286 15.3946 17.2494C13.5344 17.2703 11.7134 16.7144 10.182 15.6582" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    