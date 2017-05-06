//TODO: look into a different promise library (focus on performance)
//TODO: consider a different ajax library (is one even needed?)
import axios from 'axios';

import cache from '@/api/cache/cache';
import keys from '@/_keys/keys.js';
import sortObject from '@/utilities/sortObject';


export default {
  // get all data provided by riot static endpoint
  getAllChampionStaticData: function() {
    let _self = this;

    // get champion data from cache or riot
    return new Promise((resolve, reject) => {
      let allChampions = cache.get('allChampions');

      if (allChampions) {
        // return cached data
        resolve(allChampions);

      } else {
        // get data from riot then cache
        //TODO: remove key from client
        axios.get('https://na1.api.riotgames.com/lol/static-data/v3/champions?champListData=info&api_key=' + keys.riot)
        .then(response => {
          // ensure valid data
          if (response && response['data'] && response.data['data']) {
            let allChampions = sortObject.byPropertyAlphabetical(response.data.data);

            cache.set('allChampions', allChampions);

            resolve(allChampions);

          } else {
            reject('Valid call, data was error');

          }

        })
        .catch(e => {
          reject(e.toString);

        });

      }

    });

  }

}
