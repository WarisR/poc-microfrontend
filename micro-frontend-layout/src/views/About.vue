<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="micro-app1" />
    <div id="micro-app2" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import systemJs from 'systemjs/dist/system-production.js';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  async mounted() {
    // const a = await systemJs.import('http://localhost:8887/url-join.js');

    // console.log('a');
    // console.log(a);

    // const b = await systemJs.import('http://localhost:8081/app.js');
    // Solution 1
    // const microApp1Bundle = await systemJs.import('http://localhost:8081/app.js');
    const microApp2Bundle = await systemJs.import('http://localhost:8082/app.js');

    // Soliution 1 - Production
    const chunkVendors = await systemJs.import('http://localhost:8887/chunk-vendors.6525cb8c.js');
    const microApp1Bundle = await systemJs.import('http://localhost:8887/app.305ecf91.js');

    microApp1Bundle.initialize();

    // new Vue({
    //   render: (h) => h(microApp1Bundle.components.Home),
    // }).$mount('#micro-app1');

    new Vue({
      render: (h) => h(microApp2Bundle.components.Home),
    }).$mount('#micro-app2');
  }
}
</script>
