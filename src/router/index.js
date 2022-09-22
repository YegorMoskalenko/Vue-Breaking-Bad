import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import SeasonPage from '@/pages/SeasonPage'
import ErrorPage from '@/pages/ErrorPage'
import EpisodePage from "@/pages/EpisodePage";
import CharacterPage from "@/pages/CharacterPage";
import FavoritesCharactersPage from "@/pages/FavoritesCharactersPage";
import OccupationsPage from "@/pages/OccupationsPage";
import SerialInfo from "@/pages/SerialInfo";
import TopDeaths from "@/pages/TopDeaths";

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/error',
    component: ErrorPage
  },
  {
    path: '/season/:seasonNum',
    component: SeasonPage
  },
  {
    path: '/episode/:episodeId',
    component: EpisodePage
  },
  {
    path: '/character/:characterName',
    component: CharacterPage
  },
  {
    path: '/favorites-characters',
    component: FavoritesCharactersPage
  },
  {
    path: '/occupations',
    component: OccupationsPage
  },
  {
    path: '/serial-info',
    component: SerialInfo
  },
  {
    path: '/top-deaths',
    component: TopDeaths
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
