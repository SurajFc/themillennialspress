<template>
  <div class="container">
    <div class="mr-3 ">
      <content-loader></content-loader>
    </div>
    <div class="col-9">
      <br />
      <ul v-for="x in 5" :key="x.id" class="mt-3 p-2">
        <li>
          <b-card no-body class="overflow-hidden" style=" border:none;">
            <b-row no-gutters>
              <b-col md="4">
                <content-loader></content-loader>
              </b-col>
              <b-col md="8">
                <b-card-body>
                  <b-card-text>
                    <content-loader>
                      <rect x="0" y="0" rx="4" ry="4" width="400" height="10" />
                      <rect
                        x="0"
                        y="20"
                        rx="4"
                        ry="4"
                        width="400"
                        height="10"
                      />
                      <rect
                        x="0"
                        y="50"
                        rx="4"
                        ry="4"
                        width="200"
                        height="10"
                      />
                    </content-loader>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  components: {
    ContentLoader
  }
};
</script>

<style></style>
