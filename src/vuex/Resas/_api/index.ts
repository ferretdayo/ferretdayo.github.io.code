import axios from 'axios'

export default {
  getPrefectures (): Promise<any> {
    return axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY
      }
    })
  },
  getCities (prefCode: number): Promise<any> {
    return axios.get('https://opendata.resas-portal.go.jp/api/v1/cities', {
      params: {
        prefCode
      },
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY
      }
    })
  },
  getTourismAttractions (prefCode: number, cityCode: string): Promise<any> {
    return axios.get('https://opendata.resas-portal.go.jp/api/v1/tourism/attractions', {
      params: {
        prefCode,
        cityCode
      },
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY
      }
    })
  },
  getAddressFromLatLng (latitude: number, longitude: number): Promise<any> {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        latlng: latitude + ',' + longitude,
        key: process.env.GOOGLE_MAP_API_KEY
      }
    })
  },
  getAddressFromLocation (locationName: string): Promise<any> {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: locationName,
        region: 'jp',
        key: process.env.GOOGLE_MAP_API_KEY
      }
    })
  }
}