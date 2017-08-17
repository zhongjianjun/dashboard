import {UpdateState} from './action'
import {validator} from  '../../util/validator'
import {config, searchKetWithPathname} from '../../config'
const {title, subTitle} = config()

function updateState(data) {
  if (validator.isObject(data)) {
    return {
      type: UpdateState,
      payload: data
    }
  } else {
    console.error('action updateState params must be a object')
  }
}

function initializeLayout() {
  return (dispatch, getState) => {
    process.env.NODE_ENV === 'production' || console.log('initializeLayout', searchKetWithPathname())

    if (searchKetWithPathname()) {
      dispatch(updateState({menusSelectedKeys: [searchKetWithPathname()]}))
    }

    dispatch(updateState({
      root: false,
      LoginLoading: false,
    }))
  }
}

function toggleSide() {
  return (dispatch, getState) => {
    const layout = getState().layout

    dispatch(updateState({
      collapsed: !layout.collapsed,
      menusOpenKeys: (layout.collapsed) ? ['2', '3'] : [],
    }))

    if (layout.collapsed) {
      setTimeout(() => dispatch(updateState({title: title})), 100)
    } else {
      dispatch(updateState({title: subTitle}))
    }
  }
}

const changeSubMenus = (value) => {
  return (dispatch, getState) => {
    dispatch(updateState({
      menusOpenKeys: value,
    }))
  }
}


export {updateState, initializeLayout, toggleSide, changeSubMenus}
