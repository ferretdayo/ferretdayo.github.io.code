import axios from 'axios'

export default {
  getPeople (): Promise<any> {
    return axios.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear', {
      params: {
        cityCode: 11362,
        prefCode: 11
      },
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY
      }
    })
  }
}