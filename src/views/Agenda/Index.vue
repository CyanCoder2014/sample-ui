<template>
  <div class="container pt-5">
  <card class="mt-5">
    <b-row align-v="center" slot="header" >
      <b-col cols="8">
        <h3 class="mb-0">Manage {{objectName}}s</h3>
      </b-col>
      <b-col cols="4" class="text-right">
      </b-col>
    </b-row>

    <list-table :objectName="objectName" :fields="fields"></list-table>

  </card>
  </div>
</template>
<script>
import ListTable from "./Table";
export default {
  components: {ListTable},
  data() {
    return {

      objectName: 'agenda',
      fields: ['id','title','date','note','state','actions']

    };
  },
  methods: {

  }
};
</script>
<style></style>
