//http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json
import axios from 'axios';

export default {
  getAllChampionStaticData: axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(response => {
      return response.data.data;

    })
    .catch(e => {
      return e;

    })

};
