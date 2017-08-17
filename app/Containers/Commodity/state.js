const state = {
    //商品列表接口请求参数
    identifier: '',
    name: '',
    status: 1,
    //表格
    tableData: [],
    tableTotals: 0,
    tableCurrent: 1,
    tablePageSize: 10,
    tableLoading: false,
    //按钮
    buttonAddLoading: false,
    buttonSearchLoading: false,
    buttonResetLoading: false,

    headerPreviewDisabled: true,
    headerOnlineDisabled: true,
    headerRecommendDisabled: true,

    formSaveLoading: false,
    formSaveDisabled: false,
    formAddColumnLoading: false,

    formType: undefined,// add || edit

    image: [],
    price: '',
    num: '',
    content: '',
    create_id: 1,
    id: '',
    formId: '',

    formSaveLoading: false,
    formSaveDisabled: false,

    columnsStyles: [],
}

export default state