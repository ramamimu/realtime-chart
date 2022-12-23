<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import datePickerVue from "../components/datePicker.vue";
</script>

<template>
  <div class="mx-7">
    <div>
      <!-- date filter -->
      <!-- <div><datePickerVue></datePickerVue></div> -->
      <!-- <button class="bg-slate-100">reset</button> -->

      <!-- Dropdown menu -->
      <div
        id="dropdownHelperRadio"
        class="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="top"
        style="
          position: absolute;
          inset: auto auto 0px 0px;
          margin: 0px;
          transform: translate3d(522.5px, 6119.5px, 0px);
        "
      >
        <ul
          class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHelperRadioButton"
        >
          <li>
            <div
              class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <div class="flex items-center h-5">
                <input
                  id="helper-radio-4"
                  name="helper-radio"
                  type="radio"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div class="ml-2 text-sm">
                <label
                  for="helper-radio-4"
                  class="font-medium text-gray-900 dark:text-gray-300"
                >
                  <div>Individual</div>
                  <p
                    id="helper-radio-text-4"
                    class="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Some helpful instruction goes over here.
                  </p>
                </label>
              </div>
            </div>
          </li>
          <li>
            <div
              class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <div class="flex items-center h-5">
                <input
                  id="helper-radio-5"
                  name="helper-radio"
                  type="radio"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div class="ml-2 text-sm">
                <label
                  for="helper-radio-5"
                  class="font-medium text-gray-900 dark:text-gray-300"
                >
                  <div>Company</div>
                  <p
                    id="helper-radio-text-5"
                    class="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Some helpful instruction goes over here.
                  </p>
                </label>
              </div>
            </div>
          </li>
          <li>
            <div
              class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <div class="flex items-center h-5">
                <input
                  id="helper-radio-6"
                  name="helper-radio"
                  type="radio"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div class="ml-2 text-sm">
                <label
                  for="helper-radio-6"
                  class="font-medium text-gray-900 dark:text-gray-300"
                >
                  <div>Non profit</div>
                  <p
                    id="helper-radio-text-6"
                    class="text-xs font-normal text-gray-500 dark:text-gray-300"
                  >
                    Some helpful instruction goes over here.
                  </p>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
