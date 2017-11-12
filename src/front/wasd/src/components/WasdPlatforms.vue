<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <h4 class="text-primary">Games by platform</h4>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <h5 class="emphasize text-amber" v-if="pc.length > 0">PC ></h5>
        <div>
          <div class="row justify-center">
            <q-card inline v-if="pc.length > 0" v-for="(game, index) in pc" :data="game" :key="game.id">
              <q-card-media style="max-height: 250px;" overlay-position="full" class="cursor-pointer"
                            @click="$router.push({ name: 'game', params: { id: game.id }})">
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
                <p class="no-padding no-margin" style="max-height: 40px;">
                  {{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
              </q-card-title>
            </q-card>
          </div>
        </div>
        <h5 class="emphasize text-amber" v-if="ps4.length > 0">Play Station 4 ></h5>
        <div>
          <div class="row justify-center">
            <q-card inline v-if="ps4.length > 0" v-for="(game, index) in ps4" :data="game" :key="game.id">
              <q-card-media style="max-height: 250px;" overlay-position="full" class="cursor-pointer"
                            @click="$router.push({ name: 'game', params: { id: game.id }})">
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
                <p class="no-padding no-margin" style="max-height: 40px;">
                  {{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
              </q-card-title>
            </q-card>
          </div>
        </div>
        <h5 class="emphasize text-amber" v-if="xboxOne.length > 0">Xbox One ></h5>
        <div>
          <div class="row justify-center">
            <q-card inline v-if="xboxOne.length > 0" v-for="(game, index) in xboxOne" :data="game" :key="game.id">
              <q-card-media style="max-height: 250px;" overlay-position="full" class="cursor-pointer"
                            @click="$router.push({ name: 'game', params: { id: game.id }})">
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
                <p class="no-padding no-margin" style="max-height: 40px;">
                  {{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
              </q-card-title>
            </q-card>
          </div>
        </div>
        <h5 class="emphasize text-amber" v-if="nintendoSwitch.length > 0">Nintendo Switch ></h5>
        <div>
          <div class="row justify-center">
            <q-card inline v-if="nintendoSwitch.length > 0" v-for="(game, index) in nintendoSwitch" :data="game" :key="game.id">
              <q-card-media style="max-height: 250px;" overlay-position="full" class="cursor-pointer"
                            @click="$router.push({ name: 'game', params: { id: game.id }})">
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
                <p class="no-padding no-margin" style="max-height: 40px;">
                  {{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
              </q-card-title>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QCard,
    QCardMedia,
    QCardTitle,
    QIcon,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QBtn
  } from 'quasar'

  import platformsEnum from './../utils/igdb/platforms'

  import igdb from './../api/igdb.js'

  export default {
    name: 'WasdPlatforms',

    components: {
      QCard,
      QCardMedia,
      QCardTitle,
      QIcon,
      QCardMain,
      QCardSeparator,
      QCardActions,
      QBtn
    },

    data () {
      return {
        platforms: [6, 48, 49, 130],
        pc: [],
        pcLoaded: false,
        ps4: [],
        ps4Loaded: false,
        xboxOne: [],
        xboxOneLoaded: false,
        nintendoSwitch: [],
        nintendoSwitchLoaded: false
      }
    },

    beforeRouteEnter (to, from, next) {
      Promise.all([
        igdb.getRandomGamesByPlatform(6),
        igdb.getRandomGamesByPlatform(48),
        igdb.getRandomGamesByPlatform(49),
        igdb.getRandomGamesByPlatform(130)
      ])
        .then((response) => {
          next(vm => {
            vm.setPcGames(response[0].data)
            vm.setPs4Games(response[1].data)
            vm.setXboxOneGames(response[2].data)
            vm.setSwitchGames(response[3].data)
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      Promise.all([
        igdb.getRandomGamesByPlatform(6),
        igdb.getRandomGamesByPlatform(48),
        igdb.getRandomGamesByPlatform(49),
        igdb.getRandomGamesByPlatform(130)
      ])
        .then((response) => {
          this.setPcGames(response[0].data)
          this.setPs4Games(response[1].data)
          this.setXboxOneGames(response[2].data)
          this.setSwitchGames(response[3].data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setPcGames (gamesList) {
        this.pc = gamesList
        this.pcLoaded = true
      },

      setPs4Games (gamesList) {
        this.ps4 = gamesList
        this.ps4Loaded = true
      },

      setXboxOneGames (gamesList) {
        this.xboxOne = gamesList
        this.xboxOneLoaded = true
      },

      setSwitchGames (gamesList) {
        this.nintendoSwitch = gamesList
        this.nintendoSwitchLoaded = true
      },

      getPlatformName (code) {
        switch (code) {
          case platformsEnum.linux:
            return 'Linux PC'
          case platformsEnum.pc:
            return 'PC'
          case platformsEnum.ps3:
            return 'Play Station 3'
          case platformsEnum.xbox_360:
            return 'Xbox 360'
          case platformsEnum.mac:
            return 'Mac'
          case platformsEnum.ps4:
            return 'Play Station 4'
          case platformsEnum.xbox_one:
            return 'Xbox One'
          case platformsEnum.nintendo_switch:
            return 'Nintendo Switch'
          default:
            return 'Unknown'
        }
      }
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
