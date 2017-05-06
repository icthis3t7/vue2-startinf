//http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json
import cache from '@/api/cache/cache';
import axios from 'axios';

export default {
  // get all data provided by riot static endpoint
  getAllChampionStaticData: function() {
    // get champion data from cache or riot
    return new Promise(function (resolve, reject) {
      let allChampions = cache.get('allChampions');

      if (allChampions) {
        // return cached data
        resolve(allChampions);

      } else {
        // get data from riot then cache
        axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
        .then(response => {
          if (response && response['data'] && response.data['data']) {
            cache.set('allChampions', response.data.data);

            resolve(response.data.data);

          } else {
            reject('Valid call, data was error');

          }

        })
        .catch(e => {
          alert('fix this error in champion.js: ' + e);
          reject(e);

        });

      }

    });

  }

};
