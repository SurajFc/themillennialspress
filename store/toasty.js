// import {
//   BToast
// } from 'bootstrap-vue'
// let bootStrapToaster = new BToast();


const actions = {
  myToaster({
    context
  }, payload) {

    this._vm.$bvToast.toast(payload.body, {
      title: payload.title ? payload.title : 'Success',
      autoHideDelay: payload.autoHideDelay ? payload.autoHideDelay : 2800,
      variant: payload.variant ? payload.variant : 'success',
      solid: true,
      toaster: payload.toaster ? payload.toaster : 'b-toaster-top-center',
      appendToast: false
    })
    console.log("herere222")
  }
};

export default {
  actions
}
