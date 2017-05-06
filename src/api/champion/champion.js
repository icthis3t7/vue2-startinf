//TODO: look into a different promise library (focus on performance)
//TODO: consider a different ajax library (is one even needed?)

import axios from 'axios';

import keys from '@/_keys/keys.js';
import cache from '@/api/cache/cache';


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
        //TODO: remove key from client
        axios.get('https://na1.api.riotgames.com/lol/static-data/v3/champions?champListData=info&api_key=' + keys.riot)
        .then(response => {
          debugger;
          // ensure valid data
          if (response && response['data'] && response.data['data']) {
            cache.set('allChampions', response.data.data);

            resolve(response.data.data);

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

};
