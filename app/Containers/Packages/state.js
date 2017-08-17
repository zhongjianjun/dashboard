const state = {
  packageId: '',
  columnId: '',
  columnsStyleKey: 0,
  previewUrl: '',
  tableData: [],
  tableTotals: 0,
  tableCurrent: 1,
  tablePageSize: 10,
  tableLoading: false,
  modalIntroVisible: false,
  modalColumsId: undefined,
  modalColumnsStyles: [],
  modalColumsVisible: false,
  headerPreviewDisabled: true,
  headerOnlineDisabled: true,
  headerRecommendDisabled: true,
  formId: false,
  formType: undefined,// add || edit
  formClass: undefined,
  formClasses: [{
    name: '家装套餐',
    value: '1'
  }, {
    name: '家居套餐',
    value: '2'
  }, {
    name: '家装+家居套餐',
    value: '3'
  }],
  formUrl: undefined,
  formStatus: undefined,
  formIsReco: undefined,
  formName: '',
  formSort: '',
  formImage: [],
  formPrice: '',
  formQuota: '',
  formSurplus: '',
  formSaveLoading: false,
  formSaveDisabled: false,
  formAddColumnLoading: false,
  columnsStyles: [],
  columnsStylesItem: {
    id: 'formId',
    type_id: 'formColumnTypeId',
    title: 'title',
    okLoading: false,
    cancelLoading: false,
    buttonOkDisabled: false,
    c_name: 'formName',
    n_name: 'formNav',
    content: 'formIntro',
    sort_order: 'formSort',
    sub_title: 'formSubTitle',
    image_url: 'formVideoImage[0]',
    video_url: 'formVideoUrl',
    items: [{
      menu_name: 'formMenuName',
      image_url: 'formImageUrl',
      external_link: 'formUrl',
      image_intro: 'formIntro',
    }]
  },
}

export default state