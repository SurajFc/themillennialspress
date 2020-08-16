<template>
  <span>
    <ShareNetwork
      network="facebook"
      :url="
                  'https://themillennialspress.com/' +
                    x.category.slug +
                    '/' +
                    x.slug
                "
      :title="x.title"
      :description="x.subtitle"
      quote="The Millennials Press"
      :hashtags="x.tags.join(',')"
    >
      <font-awesome-icon
        :icon="['fab', 'facebook-square']"
        style="color:#3B5998; background:white;"
        class="icons__btn"
      />
    </ShareNetwork>
    <ShareNetwork
      network="reddit"
      :url="
                  'https://themillennialspress.com/' +
                    x.category.slug +
                    '/' +
                    x.slug
                "
      :title="x.title"
    >
      <font-awesome-icon
        :icon="['fab', 'reddit']"
        style="color:#FF4500 ;background:white;"
        class="icons__btn ml-2"
      />
    </ShareNetwork>

    <ShareNetwork
      network="twitter"
      :url="
                  'https://themillennialspress.com/' +
                    x.category.slug +
                    '/' +
                    x.slug
                "
      :title="x.title"
      twitter-user="millennials_90"
      quote="The Millennials Press"
      :hashtags="x.tags.join(',')"
    >
      <font-awesome-icon
        :icon="['fab', 'twitter-square']"
        style="color: #1da1f2;background:white;"
        class="icons__btn ml-2"
      />
    </ShareNetwork>

    <ShareNetwork
      network="whatsapp"
      :url="
                  'https://themillennialspress.com/' +
                    x.category.slug +
                    '/' +
                    x.slug
                "
      :title="x.title"
    >
      <font-awesome-icon
        :icon="['fab', 'whatsapp']"
        style="color: white;background:#7DD666;"
        class="icons__btn ml-2 d-none d-sm-block d-md-none"
      />
    </ShareNetwork>
  </span>
</template>

<script>
export default {
  props: ["x"],
};
</script>

<style scoped>
.d-sm-block {
  display: inline !important;
}
</style>