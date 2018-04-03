type CommonState = {
    windowWidth: number
    windowHeight: number
    isMobile: boolean
    isload: boolean
    canScroll: boolean
}

type PictureState = {
    selectedPicture: object,
    isOpenDialog: boolean
}

type ResasState = {
    prefectures: Array,
    cities: Array,
    activePrefectureCode: number,
    activeCityCode: string,
    tourismAttractions: Array
}