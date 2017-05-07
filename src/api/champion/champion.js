//TODO: BIG ISSUE look into a different promise library (focus on performance)
//TODO: consider a different ajax library (is one even needed?)
import axios from 'axios';

import cache from '@/utilities/cache';
import keys from '@/_keys/keys.js';
import sortObject from '@/utilities/sortObject';


export default {
  // props
  keys: keys,

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
        axios.get('https://na1.api.riotgames.com/lol/static-data/v3/champions?champListData=info&api_key=' + _self.keys.riot)
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

  },


  // single champ
  getChampion: function (name) {
    let _self = this;

    return new Promise((resolve, reject) => {
      let championData = cache.get(name);

      if (championData) {
        // return cached data
        resolve(championData);

      } else {
        _self._getChampionId(name).then(id => {
          // get data from riot then cache
          //TODO: remove key from client
          axios.get('https://na1.api.riotgames.com/lol/static-data/v3/champions/' + id + '?champData=all&api_key=' + _self.keys.riot)
          .then(response => {
            // ensure valid data
            if (response && response['data'] ) {
              let championData = response.data;

              cache.set(name, championData);

              resolve(championData);

            } else {
              reject('Valid call, data was error');

            }

          })
          .catch(e => {
            reject(e.toString);

          });

        }, error => {
          reject(error);

        });

      }

    });

  },


  // map name to id
  _getChampionId: function (name) {
    let _self = this;

    return new Promise((resolve, reject) => {
      _self.getAllChampionStaticData().then(allChampions => {
        let champion = allChampions[name];

        if (champion) {
          resolve(champion.id);

        } else {
          reject('Not found');

        }

      }, error => {
        reject(error.toString());

      });

    });

  },

}
