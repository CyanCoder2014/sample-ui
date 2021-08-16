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
  name: 'edit-item',

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

  created() {

    this.getItem()

  },

  methods: {

    async getItem() {

      try {


        this.isLoading = true
        const response = await axios.get(this.objectName + '/' + this.$route.params.id)

        let data = response.data
        this.item = data


      } catch (err) {

        console.log(err)

      } finally {

        this.isLoading = false

      }


    },


    submitData() {

      try {


        this.isLoading = true
        axios.patch(this.objectName + '/' + this.$route.params.id, this.item)

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
