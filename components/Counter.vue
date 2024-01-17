<template>
	<Button variant="gradient" color="success" class="mb-0 h-100 position-relative z-index-2" @click="state.count++">
		Counter {{ state.count }}
	</Button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 });
</script>
