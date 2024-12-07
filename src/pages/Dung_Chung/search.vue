<script setup>
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'

const props = defineProps({
    people: Array,
})

const emits = defineEmits(['update:selectedPerson'])

let selected = ref(null)
let query = ref('')

let filteredPeople = computed(() =>
  query.value === ''
    ? props.people
    : props.people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
function selectPerson(person) {
  emits('update:selectedPerson', person)
//   console.log('Selected person:', person)
}
</script>

<template>
    <div class="w-64 mx-3">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div
           class="shadow-md rounded-md"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none"
            :displayValue="(person) => person?.name || ''"
            @input="query = $event.target.value"
            placeholder="Tìm kiếm"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <!-- <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            /> -->
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="person in filteredPeople"
              as="template"
              :key="person.id"
              :value="person"
              v-slot="{ selected, active }"
            >
              <li
                @click="selectPerson(person)"
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ person.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
                  <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>