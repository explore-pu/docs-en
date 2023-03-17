<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Elegant-admin 是免费和开源的, 由出色的赞助商提供赞助"
    action-text="成为赞助商"
    action-link="https://github.com/sponsors/yyx990803"
    :data="data"
  />
</template>
