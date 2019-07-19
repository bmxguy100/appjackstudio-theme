<template>
  <section class="info">
    <!-- TODO: INSERT COVER IMAGE HERE? -->
    <info-content :plain="plain"></info-content>
    <info-nav v-if="!plain"></info-nav>
    <Vssue
      v-if="$themeConfig.useVssue && $list.total && !plain"
      title="comment"
      class="main info-vssue"
    ></Vssue>
  </section>
</template>

<script>
import InfoContent from '@theme/components/InfoContent'
import InfoNav from '@theme/components/InfoNav.vue'

export default {
  name: 'Info',
  props: {
    plain: Boolean
  },
  components: {
    InfoContent,
    InfoNav
  },
  computed: {
    style() {
      return this.$frontmatter.image
        ? { 'background-image': `url(${this.$frontmatter.image})` }
        : ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  padding ($headerHeight + 2rem) 0.5rem 2rem
  background-size cover
  background-position center
  background-attachment fixed
  .info-content
    min-height "calc(100vh - 8.45rem - %s)" % $headerHeight
  .info-vssue
    margin-top 3rem
    padding 2rem
    border-radius 1rem
    background $whiteColor
    box-shadow 0px 0px 8px $shadowColor
    transition all .5s ease-in-out
    @media (prefers-color-scheme: dark)
      background $whiteDarkColor
      box-shadow 0px 0px 8px $shadowDarkColor

@media (max-width $phoneWidth)
  .info
    .info-vssue
      padding 1rem
</style>
