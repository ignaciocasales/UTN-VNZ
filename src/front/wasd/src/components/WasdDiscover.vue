<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <h4 class="text-primary">Popular games</h4>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <q-infinite-scroll
            :handler="loadMore"
          >
            <q-card inline v-for="(game, index) in popularGames" :data="game" :key="game.id">
              <q-card-media style="max-height: 250px;" overlay-position="full" class="cursor-pointer" @click="$router.push({ name: 'game', params: { id: game.id }})">
                <img
                  :src="('cover' in game) ?
                    game.cover.url.replace('t_thumb','t_cover_uniform') :
                  ('screenshots' in game) ?
                    game.screenshots[0].url.replace('t_thumb','t_cover_uniform') :
                  'http://via.placeholder.com/210x250'"
                >

                <q-card-title slot="overlay">
                  <div class="text-secondary absolute-center"><strong>See More</strong></div>
                </q-card-title>
              </q-card-media>
              <q-card-title style="max-width: 210px;">
                <p class="no-padding no-margin" style="max-height: 40px;">{{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
              </q-card-title>
            </q-card>

            <div class="row justify-center" style="margin-bottom: 50px;">
              <q-spinner-dots slot="message" :size="40" />
            </div>
          </q-infinite-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QCarousel,
    QCard,
    QCardMedia,
    QCardTitle,
    QRating,
    QIcon,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QBtn,
    QInfiniteScroll,
    QSpinnerDots
  } from 'quasar'

  import igdb from './../api/igdb.js'

  export default {
    name: 'WasdDiscover',

    components: {
      QCarousel,
      QCard,
      QCardMedia,
      QCardTitle,
      QRating,
      QIcon,
      QCardMain,
      QCardSeparator,
      QCardActions,
      QBtn,
      QInfiniteScroll,
      QSpinnerDots
    },

    data () {
      return {
        popularGames: [],
        popularGamesLoaded: false
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getPopularGames(0)
        .then((response) => {
          next(vm => vm.setPopularGames(response.data))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getPopularGames(0)
        .then((response) => {
          this.setPopularGames(response.data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setPopularGames (gamesList) {
        this.popularGames = gamesList
        this.popularGamesLoaded = true
      },

      loadMore: function (index, done) {
        // Entries are not yet initially loaded, can not fetch next chunk
        if (!this.popularGamesLoaded) {
          done()
          return
        }

        // index - called for nth time
        // done - Function to call when you made all necessary updates.
        //        DO NOT forget to call it otherwise your loading message
        //        will continue to be displayed
        // make some Ajax call then call done()
        igdb.getPopularGames(20 * index)
          .then((response) => {
            response.data.forEach((currentGame) => {
              this.popularGames.push(currentGame)
            })
            done()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    created () {

    }
  }
</script>

<style scoped>
  .q-card-media-overlay {
    opacity: 0;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
  }

  .q-card-media-overlay:hover {
    opacity: 1;
  }
</style>
