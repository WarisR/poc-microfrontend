<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Micro frontend layout"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


// const ExampleComponent = Vue.component(
//   'example-component',
//   () => System.import(''),
// );

@Component({
  components: {
    HelloWorld,
    // ExampleComponent,
  },
})
export default class Home extends Vue {
}
</script>
