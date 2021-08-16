<template>
  <div class="container pt-5">
    <card class="mt-5">

      <b-row align-v="center" slot="header">
        <b-col cols="8">
          <h3 class="mb-0">Add </h3>
        </b-col>
        <b-col cols="4" class="text-right">
          <b-btn @click="$router.go(-1)" class="btn btn-sm btn-primary">Back</b-btn>
        </b-col>
      </b-row>

      <item-form :item="item"></item-form>

    </card>
  </div>
</template>

<script>


import ItemForm from "./Form";
export default {
  name: 'add-item',

  components: {ItemForm},
  data() {
    return {

      objectName: 'agenda',

      item: {
        title: '',
        date: '',
        state: 1,
        note: '',
      },

      isLoading:false

    };
  },
  methods: {

    submitData() {

        try {


          this.isLoading = true
          axios.post(this.objectName, this.item)

          this.$router.go(-1);
          this.$snotify.success('Item submitted successfully');

        } catch (err) {

          console.log(err)
          this.$snotify.error('Submit was unsuccessfully');

        } finally {

          this.isLoading = false

        }


    },



  }
};
</script>
<style></style>
