# D3 + Vue

During my work I have created server visualizations with chart-libraries. TheI always  with the
fact, that

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks. (see community maintained variation forks)

## The problem with Chart-Libraries
There are many libraries to create nice charts. They work great until you come the point where you
have to build unique features like custom functionalities and custom styles.

## Reativity
D3 Functions working great with Vue computed properties and vue-templates.
Use the advantage of the vue-reactivity system direct in your template
```vue
<tempalte>
  <svg :width="width" :height="height">
    <path :path="lineGenerator(data)"></path>
  </svg>
</tempalte>

<script setup>
const width = ref(100);
const height = ref(100);
const lineGenerator = computed(() => {
  ...
})
</script>
```
