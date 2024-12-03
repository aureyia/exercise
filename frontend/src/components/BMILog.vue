<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import BMIUpdate from '@/components/BMIUpdate.vue'

defineProps({
  entries: Object
})
</script>

<template>
  <div>
    <Card data-qa="entry-card" class="mt-5" v-for="entry in entries" :key="entry.id">
      <CardContent class="mt-3 mb-1 pb-0">
        <div data-qa="entry-height-value">Height: {{ entry.height * 100 }}cm</div>
        <div data-qa="entry-weight-value">Weight: {{ entry.weight }}kg</div>
        <div data-qa="entry-bmi-value">BMI: {{ Math.trunc(entry.bmi) }}</div>
        <div data-qa="entry-submission-date">Submitted on: {{ entry.createdAt.split('T')[0] }}</div>
        <div data-qa="entry-updated-date" v-if="entry.updatedAt">Updated on: {{ entry.updatedAt.split('T')[0] }}</div>
      </CardContent>
      <CardFooter class="mb-3 mt-1 pb-0">
        <BMIUpdate :entry="entry"/>
      </CardFooter>
    </Card>
  </div>
</template>
