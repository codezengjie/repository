# 思维导图

<script setup>
import XMindEmbedViewer from '../component/xmind-preview.vue';
const xmindFilePath = './index/PMP.xmind';
import { withBase } from 'vitepress'
</script>

![](./index/PMP.xmind)
<XMindEmbedViewer :xmindFilePath="withBase(xmindFilePath)"/>