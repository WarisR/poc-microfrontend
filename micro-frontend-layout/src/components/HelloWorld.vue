<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="micro-app1" />
    <div id="micro-app2" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $s from 'scriptjs';
import systemJs from 'systemjs/dist/system-production.js';
import axios from 'axios';


const addScriptTag = () => {
    let script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'http://localhost:8081/app.js';
    document.body.appendChild(script);
    return script;
};


const addStyleTag = () => {
    let style = document.createElement('link');

    style.rel = 'stylesheet';
    style.href = 'http://localhost:8887/css/app.c70b0f51.css';

    document.head.appendChild(style);
};

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  async mounted() {
    const microApp2Bundle = await systemJs.import('http://localhost:8082/app.js');

    // Solution 1 - Production
    // const chunkVendors = await systemJs.import('http://localhost:8887/js/chunk-vendors.6525cb8c.js');
    // const microApp1Bundle = await systemJs.import('http://localhost:8887/js/app.fc8abb3a.js');
    // addStyleTag();

    const microApp1Bundle = await systemJs.import('http://localhost:8081/app.js');

    microApp1Bundle.initialize();

    new Vue({
      render: (h) => h(microApp2Bundle.components.Home),
    }).$mount('#micro-app2');

    // Solution 2
    // this.script = addScriptTag();
  }

  destroyed() {
    // Solution 2
    // document.body.removeChild(this.script);
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
