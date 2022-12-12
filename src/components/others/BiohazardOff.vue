<script>
export default {
  name: 'biohazard-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5862 10.5859C10.3957 10.771 10.2441 10.9921 10.14 11.2364C10.0359 11.4807 9.98154 11.7432 9.98001 12.0088C9.97849 12.2743 10.0299 12.5375 10.1311 12.7829C10.2324 13.0284 10.3815 13.2512 10.5698 13.4385C10.7581 13.6257 10.9817 13.7735 11.2278 13.8734C11.4738 13.9733 11.7373 14.0232 12.0028 14.0201C12.2683 14.0171 12.5305 13.9612 12.7742 13.8558C13.0179 13.7503 13.2382 13.5974 13.4222 13.4059" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9391 14C11.9391 14.173 11.9871 14.351 11.9951 14.533V14.75C11.9951 15.9722 11.524 17.1474 10.6797 18.0311C9.83546 18.9149 8.68304 19.4392 7.46212 19.495H7.24512" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.49512 14.7451C2.49517 13.8482 2.74914 12.9697 3.22763 12.2111C3.70613 11.4526 4.38961 10.845 5.199 10.4587C6.00839 10.0723 6.91062 9.92302 7.80131 10.028C8.69201 10.1331 9.53477 10.4881 10.2321 11.0521" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7452 19.4949C16.0577 19.495 15.3784 19.3457 14.7542 19.0576C14.1301 18.7694 13.5759 18.3493 13.1299 17.826C12.684 17.3028 12.357 16.689 12.1714 16.027C11.9859 15.3651 11.9462 14.6707 12.0552 13.9919H11.9952" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5332 10.5379C15.2409 10.1655 16.0311 9.97783 16.8307 9.99222C17.6302 10.0066 18.4132 10.2226 19.107 10.6203C19.8008 11.0179 20.383 11.5842 20.7996 12.2668C21.2162 12.9494 21.4537 13.7261 21.4902 14.5249V14.7419" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2951 10.9291C9.52362 10.6344 8.84226 10.1437 8.31827 9.50542C7.79428 8.8671 7.44577 8.10318 7.30713 7.28906M7.96713 3.96506C8.11427 3.73092 8.28157 3.51008 8.46713 3.30506L8.63113 3.13306" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3492 3.13306C15.8544 3.63796 16.2392 4.25029 16.475 4.92448C16.7108 5.59866 16.7916 6.31735 16.7112 7.02706C16.6309 7.73677 16.3915 8.41922 16.011 9.02364C15.6304 9.62805 15.1185 10.1389 14.5132 10.5181" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    