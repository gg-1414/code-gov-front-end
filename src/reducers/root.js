import { combineReducers } from 'redux'
import repo from './repo'
import agencies from './agencies'
import filters from './filters'
import siteConfig from './site-config'
import query from './query'
import searchHistory from './search'
import searchFilters from './search-filters'
import tasks from './tasks'
import taskFilters from './task-filters'
import taskFilterOptions from './task-filter-options'

const rootReducer = combineReducers({
  agencies,
  filters,
  query,
  repo,
  searchFilters,
  taskFilters,
  searchHistory,
  siteConfig,
  taskFilterOptions,
  tasks
})

export default rootReducer
