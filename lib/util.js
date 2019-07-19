import moment from 'moment'

export const checkUrl = url => /^((ht|f)tps?):\/\/?/.test(url)

export const formatDate = date => {
  return moment.utc(date).format('l')
}

export const getCategories = item => {
  if (item.categories) {
    return item.categories
  } else if (item.category) {
    return [item.category]
  } else {
    return []
  }
}

export const getTags = item => {
  if (item.tags) {
    return item.tags
  } else if (item.tag) {
    return [item.tags]
  } else {
    return []
  }
}
