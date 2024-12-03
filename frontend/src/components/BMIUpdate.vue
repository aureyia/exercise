<script setup>
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import axios from "axios";
import * as z from "zod";

const formSchema = toTypedSchema(
  z.object({
    height: z.number().int().positive().max(300),
    weight: z.number().int().positive().max(1000),
  })
);

function onSubmit(values) {
  console.log("Form submitted!", values);
  const finalisedValues = {
    id: props.entry.id,
    height: values.height / 100,
    weight: values.weight,
  };
  axios.put("/bmi-log", finalisedValues);
}

const props = defineProps({
  entry: Object,
});
</script>

<template>
  <Form
    v-slot="{ handleSubmit }"
    as=""
    keep-values
    :validation-schema="formSchema"
  >
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Update </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new entry</DialogTitle>
        </DialogHeader>

        <form id="dialogForm" @submit="handleSubmit($event, onSubmit)">
          <FormField v-slot="{ componentField }" name="height">
            <FormItem>
              <FormLabel>Height</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="175"
                  :default-value="entry.height * 100"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription> Your height in Centimeters. </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="weight">
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="70"
                  :default-value="entry.weight"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription> Your weight in Kilograms. </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </form>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="submit" form="dialogForm"> Submit </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Form>
</template>
