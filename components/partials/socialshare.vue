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
      twitter-user="themillennialspress"
      quote="The Millennials Press"
      :hashtags="x.tags.join(',')"
    >
      <font-awesome-icon
        :icon="['fab', 'twitter-square']"
        style="color: #1da1f2;background:white;"
        class="icons__btn ml-2"
      />
    </ShareNetwork>
  </span>
</template>

<script>
export default {
  props: ["x"],
};
</script>

<style>
</style>