<template>
  <section
    v-if="item"
    :style="{ 'background-image': `url(${item})` }"
    class="flex-ycc header-cover"
  >
    <h1 class="cover-title">
      <img v-if="logoImg" :src="logoImg" class="title-img" />
      <span v-else class="title-text">{{ $title }}</span>
    </h1>
    <h2 class="cover-text">{{ $site.description || JSON.stringify($site.frontmatter) }}</h2>
  </section>
</template>

<script>
export default {
  name: 'HeaderCover',
  props: {
    item: {
      type: String,
      default: null
    }
  },
  computed: {
    logoImg() {
      return this.$themeConfig.logo
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-cover
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  height 100%
  background-size cover
  background-position center
  .cover-title
    .title-img
      height ($coverHeight / 5)
    .title-text
      font-size 3rem
      color $whiteColor
      -webkit-text-fill-color $blackColor
      -webkit-text-stroke 1.5px $whiteColor
  .cover-text
    margin-top .5rem;
    font-size 1.2rem
    color $whiteColor
</style>
