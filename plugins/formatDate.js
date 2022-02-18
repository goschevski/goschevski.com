import Vue from 'vue'
import { format } from 'date-fns'

export default () => {
  Vue.filter('formatDate', function (date) {
    return format(new Date(date), 'MMMM d, y')
  })
}
