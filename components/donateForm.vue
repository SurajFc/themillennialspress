<template>
  <div class="col-lg-6 col-md-6 col-sm-10 col-xs-10">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form
        @submit.stop.prevent="handleSubmit(onSubmit)"
        ref="form"
        class="shadow-lg p-5 mb-5 bg-white rounded"
      >
        <div class="row">
          <div class="col-6">
            <validation-provider
              name="First Name"
              :rules="{ required: true, min: 3 }"
              v-slot="validationContext"
            >
              <b-form-group id="example-input-group-1" label-for="fname">
                <b-form-input
                  id="fname"
                  size="lg"
                  name="fname"
                  class="border-right-0 border-top-0 border-left-0 shadow-sm p-3 mb-5 bg-white rounded"
                  placeholder="first name *"
                  v-model="form.fname"
                  :state="getValidationState(validationContext)"
                  required
                ></b-form-input>

                <b-form-invalid-feedback>
                  {{
                  validationContext.errors[0]
                  }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </div>
          <div class="col-6">
            <validation-provider
              name="Last name"
              :rules="{ required: true, min: 3 }"
              v-slot="validationContext"
            >
              <b-form-group id="last name">
                <b-form-input
                  id="lname"
                  name="last name"
                  class="border-right-0 border-top-0 border-left-0 shadow-sm p-3 mb-5 bg-white rounded"
                  v-model="form.lname"
                  size="lg"
                  placeholder="last name *"
                  :state="getValidationState(validationContext)"
                  required
                ></b-form-input>

                <b-form-invalid-feedback>
                  {{
                  validationContext.errors[0]
                  }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </div>
        </div>

        <validation-provider
          name="Email"
          :rules="{ required: true, email: true }"
          v-slot="validationContext"
        >
          <b-form-group id="last name">
            <b-form-input
              id="email"
              class="border-right-0 border-top-0 border-left-0 shadow-sm p-3 mb-5 bg-white rounded"
              name="email"
              v-model="form.email"
              placeholder="email *"
              size="lg"
              :state="getValidationState(validationContext)"
              required
            ></b-form-input>

            <b-form-invalid-feedback>
              {{
              validationContext.errors[0]
              }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Phone"
          :rules="{ required: true, min: 8 }"
          v-slot="validationContext"
        >
          <b-form-group id="phone">
            <b-form-input
              id="phone"
              type="number"
              class="border-right-0 border-top-0 border-left-0 shadow-sm p-3 mb-5 bg-white rounded"
              name="phone"
              v-model="form.phone"
              placeholder="phone *"
              size="lg"
              :state="getValidationState(validationContext)"
              required
            ></b-form-input>

            <b-form-invalid-feedback>
              {{
              validationContext.errors[0]
              }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <validation-provider name="tnc" :rules="{ required: true }" v-slot="validationContext">
          <b-form-group id="tnc">
            <b-form-checkbox
              id="tnc"
              v-model="status"
              name="tnc"
              value="accepted"
            >I declare that I am a citizen of India.</b-form-checkbox>

            <b-form-invalid-feedback>
              {{
              validationContext.errors[0]
              }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
        <br />
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        fname: null,
        lname: null,
        email: null,
        phone: null,
      },
      status: true,
    };
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    onSubmit() {
      alert("Form submitted!");
    },
    onError(error) {
      console.log("Error happened:", error);
    },
    onSuccess(token) {
      console.log("Succeeded:", token);
      // here you submit the form
      //   this.$refs.form.submit();
    },
    onExpired() {
      console.log("Expired");
    },
  },
};
</script>

<style></style>
