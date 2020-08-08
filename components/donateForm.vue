<template>
  <div class="col-lg-6 col-md-6 col-sm-10 col-xs-10">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form
        @submit.stop.prevent="handleSubmit(onSubmit)"
        ref="myform"
        class="shadow-lg p-5 mb-1 bg-white rounded"
      >
        <validation-provider
          name="Amount"
          :rules="{ required: true, min_value: 100 }"
          v-slot="validationContext"
        >
          <b-form-group
            id="example-input-group-1"
            label="Amount"
            label-for="Amount"
          >
            <b-form-input
              id="Amount"
              size="lg"
              name="amount"
              class="border-right-0 border-top-0 border-left-0 shadow-sm p-3 mb-5 bg-white rounded"
              placeholder="first name *"
              v-model="form.amount"
              :state="getValidationState(validationContext)"
              required
            ></b-form-input>

            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <div class="row">
          <div class="col-6">
            <validation-provider
              name="First Name"
              :rules="{ required: true, min: 3, max: 20 }"
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
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </div>
          <div class="col-6">
            <validation-provider
              name="Last name"
              :rules="{ required: true, min: 3, max: 20 }"
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
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </div>
        </div>

        <validation-provider
          name="Email"
          :rules="{ required: true, email: true, max: 40 }"
          v-slot="validationContext"
        >
          <b-form-group id="email">
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
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Phone"
          :rules="{ required: true, plength: 10 }"
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
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>

        <b-form-checkbox
          id="tnc"
          v-model="status"
          name="tnc"
          value="accepted"
          unchecked-value="not_accepted"
          required
          >I declare that I am a citizen of India.</b-form-checkbox
        >
        <br />

        <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
        <br />
        <b-button type="submit" variant="primary">Make Payment</b-button>
        <b-button type="reset" hidden variant="primary">Make Payment</b-button>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  head() {
    return {
      script: [
        {
          src: "https://checkout.razorpay.com/v1/checkout.js",
          body: true
        }
      ]
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      form: {
        fname: null,
        lname: null,
        email: null,
        phone: null,
        amount: 500
      },
      status: "not_accepted",
      captcha: false
    };
  },

  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    onSubmit() {
      var order_id = "";
      if (this.captcha) {
        this.$axios.$post("news/razorpay", this.form).then(res => {
          order_id = res.id;
          var options = {
            key: "rzp_test_P1kchqg0zHT5QO",
            amount: this.form.amount * 100,
            name: "The Millennials Press",
            description: "Donation",
            currency: "INR",
            image: "tmp.webp",
            order_id: order_id,
            handler: response => {
              this.finalFunction(response);
            },
            prefill: {
              name: this.form.fname + this.form.lname,
              contact: "+91" + this.form.phone,
              email: this.form.email
            },
            notes: {
              address: "The Millennials Press"
            },

            theme: {
              color: "#FB5000"
            }
          };
          var rzp1 = new Razorpay(options);
          rzp1.open();
        });
      }
    },
    onError(error) {
      this.captcha = false;
      this.$store.dispatch("toasty/myToaster", {
        body: "Error",
        title: "Captcha Failed",
        variant: "danger"
      });
    },
    onSuccess(token) {
      this.captcha = true;

      // here you submit the form
      //   this.$refs.form.submit();
    },
    onExpired() {
      this.captcha = false;
      this.$store.dispatch("toasty/myToaster", {
        body: "Error",
        title: "Captcha expired. Retry Again",
        variant: "danger"
      });
    },
    finalFunction(response) {
      if (response["razorpay_signature"]) {
        this.$axios
          .$post(`news/razorpay/${response.razorpay_order_id}`)
          .then(
            this.$router.push("/"),
            this.$store.dispatch("toasty/myToaster", {
              body: "Donation Success. Thank You..!",
              title: "Success",
              autoHideDelay: 4000
            })
          )
          .catch(e => {
            this.$store.dispatch("toasty/myToaster", {
              body: "Error",
              title: "Error",
              variant: "danger"
            });
          });
      }
    }
  }
};
// cusMsg(response) {
//   console.log("in here", response);
//   if (response) {
//     this.$store.dispatch("toasty/myToaster", {
//       body: "Donation Success",
//       toaster: "b-toaster-top-right",
//     });
//   } else {
//     this.$store.dispatch("toasty/myToaster", {
//       body: "Unsuccessfull",
//       variant: "danger",
//       title: "Error",
//     });
//   }
// },
</script>

<style></style>
