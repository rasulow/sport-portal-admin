import NavButton from "@/components/example/NavButton.vue";
import NewsTable from "@/components/example/Tables/NewsTable.vue";
import NewsDialog from "@/components/example/Dialogs/NewsDialog.vue";
import NewsDrawer from "@/components/example/Drawers/NewsDrawer.vue";
import axios from "axios";

export default {
    data: () => ({
        news: [],
        headers: ['id', 'category', 'nameTm', 'nameRu', 'action'],
        dialog: false,
        drawer: false,
        info: {},
        news_args: {}
    }),
    created() {
        this.getNews().then(() => {})
    },
    methods: {
        async getNews(item) {
            await axios.get('/news/', { params: { 'section': item } })
                .then((res) => {
                    this.news = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        openDialog(item) {
            this.info = item
            this.dialog = !this.dialog
        },

        closeNavDrawer(item) {
            this.drawer = false
            this.getNews(item).then(() => {})
        },

        openDrawerForUpdate(item) {
            this.news_args = item
            this.drawer = true
        }
    },
    components: {
        NavButton,
        NewsTable,
        NewsDialog,
        NewsDrawer
    }
}