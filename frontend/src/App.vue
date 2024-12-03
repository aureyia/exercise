<script setup>
import BMILog from '@/components/BMILog.vue'
import BMISubmit from '@/components/BMISubmit.vue'
import { Button } from '@/components/ui/button'
import { onMounted, ref } from "vue";
import { getBMIEntries } from "@/lib/getBMIEntries.js";

const entries = ref([])

const fetchEntries = async () => {
  entries.value = await getBMIEntries();
}

onMounted(() => {
  fetchEntries()
})
</script>

<template>
  <div class="m-5">
    <Button class="mr-2" @click="fetchEntries" data-qa="refresh-button">Refresh</Button>
    <BMISubmit />
    <BMILog :entries="entries" />
  </div>
</template>
