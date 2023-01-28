<template>
  <div class="container m-auto mt-5">
    <h2 class="font-bold">Test</h2>
    <NuxtLink to="/dockerfile" class="text-blue-600" active-class="underline">Dockerfile</NuxtLink>
    <br>
    <NuxtLink to="/prism" class="text-blue-600" active-class="underline">Prism</NuxtLink>
    <div class="mt-5">
      <slot />
    </div>
  </div>
</template>