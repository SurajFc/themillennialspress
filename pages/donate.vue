<template>
  <div>
    <div class="row">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <blockquote class="blockquote">
          <p class="h4">Support Free & Independent Journalism</p>
        </blockquote>The founding premise of The Millennials is this: if good journalism is
        to survive and thrive, it can only do so by being both editorially and
        financially independent. This means relying principally on contributions
        from readers and concerned citizens who have no interest other than to
        sustain a space for quality journalism.
        <br />
        <br />
        <p class="h4">Got Questions?</p>If you have any specific query not
        answered there, then please write to us at
        <a
          href="mailto:info@themillennialspress.com"
          target="_blank"
        >info@themillennialspress.com</a>
        <p>
          <nuxt-link to="/refund-policy" exact>Refund Policy</nuxt-link>
        </p>
      </div>
      <DonateForm />
    </div>
  </div>
</template>

<script>
import DonateForm from "~/components/donateForm.vue";
export default {
  components: {
    DonateForm,
  },
  head() {
    return {
      title: "Support us | The Millennials Press | TheMillennialsPress.com",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Support us",
          name: "Support us",
          content: "Support us | The Millennials Press",
        },
      ],
    };
  },
};
</script>

<style></style>
