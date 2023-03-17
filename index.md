---
layout: home

title: Laravel-Admin
titleTemplate: a tool to quickly build back office management

hero:
  name: Laravel-Admin
  text: a tool to quickly build back office management
  tagline: It provides features such as page components and form elements that can help you implement full-featured back-end management functions with very little code
  image:
    src: /logo.png
    alt: Laravel-Admin
  actions:
    - theme: brand
      text: Begin
      link: /guide/

features:
  - icon: 📄
    title: model-grid
    details: support for quickly building data tables
  - icon: 📄
    title: model-form
    details: enables rapid construction of data forms
  - icon: 📄
    title: model-tree
    details: enables rapid construction of tree data
  - icon: 📄
    title: RBAC
    details: role based permission control
  - icon: 📄
    title: built in components
    details: Built-in 40+ form element components, as well as support extension components, support custom charts
  - icon: 📄
    title: high flexibility
    details: Multiple model relationships, local and OSS file upload, and multi-database support
---

<script setup>
import { onMounted } from 'vue'
import { fetchReleaseTag } from './.vitepress/utils/fetchReleaseTag.js'

onMounted(() => {
  fetchReleaseTag()
})
</script>