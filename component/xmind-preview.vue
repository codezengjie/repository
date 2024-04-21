<template>
  <div id="xmind">右键拖拽文件位置</div>
</template>

<script setup>
import { onMounted } from "vue";
import { withBase } from 'vitepress'

const props = defineProps({
  xmindFilePath: {
    type: String,
    default: '',
    required: true
  }
});

onMounted(async () => {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/xmind-embed-viewer/dist/umd/xmind-embed-viewer.js';
  script.onload = async () => {
    const XMindEmbedViewer = window.XMindEmbedViewer;
    const viewer = new XMindEmbedViewer({
      el: '#xmind',
      region: 'cn'
    });
    fetch(withBase(props.xmindFilePath))
      .then(res => res.arrayBuffer())
      .then(file => viewer.load(file));
  };
  document.head.appendChild(script);
});
</script>

<style scoped>
</style>
