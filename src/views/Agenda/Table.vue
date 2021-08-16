<template>

  <b-card body-class="p-2" header-class="border-0">

    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">{{ makeTitle(objectName) }} List</h3>
        </b-col>
        <b-col class="text-right">
          <router-link :to="'/'+objectName+'/add'" class="btn btn-sm btn-primary">Add {{ objectName }}</router-link>
        </b-col>
      </b-row>
    </template>


    <b-table
        v-if="items && items.length > 0 && !isLoading"
        :key="items.id"
        responsive
        :fields="fields"
        :items="items"
    >
      <template
          v-slot:cell(tittle)="data"
      >
        <b>{{ data.item.title }}</b>
      </template>
      <template
          v-slot:cell(note)="data"
      >
        <small>{{ data.item.note }}</small>
      </template>
      <template
          v-slot:cell(state)="data"
      >
        <b-badge variant="dark" v-text="stateText(data.item.state)"></b-badge>
      </template>
      <template
          v-slot:cell(actions)="data"
      >
        <b-button
            v-b-tooltip.hover
            title="Edit"
            class="btn-plan p2"
            variant="warning"
            size="sm"
            @click="$router.push({ path: objectName+'/edit/'+data.item.id })"
        >
         <span class="svg-container">
            <i class="fas fa-edit"></i>
         </span>
        </b-button>
        <b-button
            v-b-tooltip.hover
            title="Delete"
            class="btn-plan p2"
            variant="danger"
            size="sm"
            @click="deleteItem(data.item.id)"
        >
         <span class="svg-container">
            <i class="fas fa-trash"></i>
         </span>
        </b-button>
      </template>
    </b-table>


  </b-card>
</template>
<script>
import {Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'

export default {
  name: 'list-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },

  props: {
    objectName: '',
    fields: [],
  },

  data() {
    return {

      isLoading: false,
      currentPage: 1,
      items: [],

    }
  },

  created() {

    this.getData()

  },

  methods: {

    async getData() {

      try {
        // let params = {
        //   page: this.currentPage
        // }
        this.isLoading = true
        const response = await axios.get(this.objectName)

        let data = response.data
        this.items = data.data
        this.total = data.total
        this.perPage = data.per_page

      } catch (err) {

        this.$snotify.error(err);

      } finally {

        this.isLoading = false

      }
    },

    async deleteItem(itemId) {

      if (confirm("Are sure to delete item?")) {

        try {
          // this.isLoading = true
          const response = await axios.delete(this.objectName + '/' + itemId)

          this.getData()

        } catch (err) {

          this.$snotify.error(err);

        } finally {

          // this.isLoading = false

        }
      }
    },

    makeTitle(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },


    stateText(item) {
      switch(item) {
        case '1':
          return 'To do'
          break;
        case '2':
          return 'Doing'
          break;
        case '3':
          return 'Done'
          break;
        default:
          return 'Unknown'
      }
    },



  },


}
</script>
<style>
</style>
