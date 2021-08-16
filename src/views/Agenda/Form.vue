<template>

  <b-form @submit.prevent="submit()">
    <h6 class="heading-small text-muted mb-4">Base Date</h6>

    <div class="pl-lg-4">
      <b-row>
        <b-col lg="4">

          <label>Title</label>
          <b-input
              type="text"
              placeholder=""
              v-model="item.title"
          >
          </b-input>



        </b-col>
        <b-col lg="4">
          <label>Date</label>
          <b-input
              type="date"
              label="Date"
              placeholder=""
              v-model="item.date"
          >
          </b-input>
        </b-col>
        <b-col lg="4">
          <label>State</label>
          <b-select v-model="item.state" label="State" :options="options">
          </b-select>
        </b-col>
      </b-row>
    </div>

    <!-- Description -->
    <div class="pl-lg-4">
      <b-form-group label="Note" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
        <!--  <label class="form-control-label">About Me</label> -->
        <b-form-textarea v-model="item.note" rows="3" value="" id="about-form-textaria"
                         placeholder="Description ..."></b-form-textarea>
      </b-form-group>
    </div>


    <div class="pl-lg-4">
      <b-row>
        <b-col lg="12">
          <b-btn type="submit">Save</b-btn>
        </b-col>
      </b-row>
    </div>

  </b-form>

</template>
<script>
export default {
  name: 'item-form',

  props:{
    item:{},
  },

  data() {
    return {

      options: [
        { value: 1, text: 'To Do' },
        { value: 2, text: 'Doing' },
        { value: 3, text: 'Done'}
      ],
      errors:[]


    }
  },

  methods: {

    submit(){
      if (!this.checkForm())
        this.$parent.$options.parent.submitData()
    },

    checkForm() {

      this.errors = [];

      if (!this.item.title) {
        this.errors.push({
          field: 'title',
          message: 'Title required.',
        })
      }
      if (!this.item.date) {
        this.errors.push({
          field: 'date',
          message: 'Date required.',
        })
      }
      if (!this.item.note) {
        this.errors.push({
          field: 'note',
          message: 'Note required.',
        })
      }

      return !!this.errors.length
    },


  }

}
</script>
<style></style>
