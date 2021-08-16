<template>

  <b-card body-class="p-2" header-class="border-0">

    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">{{makeTitle(objectName)}} List</h3>
        </b-col>
        <b-col class="text-right">
          <router-link :to="'/'+objectName+'/add'" class="btn btn-sm btn-primary">Add {{objectName}}</router-link>
        </b-col>
      </b-row>
    </template>


    <b-table
        v-if="items && items.length > 0"
        :key="items.id"
        responsive
        :fields="fields"
        :items="items"
    >
      <template
          v-slot:cell(tittle)="data"
      >
       <b>{{ data.item.title}}</b>
      </template>
      <template
          v-slot:cell(actions)="data"
      >
        <b-button
            v-b-tooltip.hover
            title="See plan"
            class="btn-plan p2"
            variant="primary"
            size="sm"
        >
         <span class="svg-container">
            <i class="fas fa-user"></i>
         </span>
        </b-button>
      </template>
    </b-table>



  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'list-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },

    props:{
      objectName: '',
      fields:[],
    },

    data() {
      return {
        tableData: [
          {
            page: '/argon/',
            visitors: '4,569',
            unique: '340',
            bounceRate: '46,53%'
          },
          {
            page: '/argon/index.html',
            visitors: '3,985',
            unique: '319',
            bounceRate: '46,53%'
          },
          {
            page: '/argon/charts.html',
            visitors: '3,513',
            unique: '294',
            bounceRate: '36,49%'
          },
          {
            page: '/argon/tables.html',
            visitors: '2,050',
            unique: '147',
            bounceRate: '50,87%'
          },
          {
            page: '/argon/profile.html',
            visitors: '1,795',
            unique: '190',
            bounceRate: '46,53%'
          }
        ],


        currentPage:1,
        items:[],
      }
    },

    created() {
      this.getData()
    },

    methods:{
      async getData() {

        try {
          // let params = {
          //   page: this.currentPage
          // }
          // this.auth.params = params


          // this.isLoading = true
          const response = await axios.get('agenda')
          let data = response.data
          this.items = data.data
          this.total = data.total
          this.perPage = data.per_page

          // this.tableData = this.items

          this.items.map(item => {
            this.tableData.push(item.title)
          })


        } catch (err) {
          // this.$snotify.error(err);
        } finally {
          this.isLoading = false
        }
      },

      makeTitle(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

    },






  }
</script>
<style>
</style>
