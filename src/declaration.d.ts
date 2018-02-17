type CommonState = {
    windowWidth: number
    windowHeight: number
    isMobile: boolean
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