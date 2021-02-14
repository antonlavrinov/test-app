import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start()) 
Router.events.on('routeChangeComplete', () => NProgress.done()) 
Router.events.on('routeChangeError', () => NProgress.done())




const MyApp = ({ Component, pageProps }) => {

  return (
      <Component {...pageProps} />
  ) 
}

export default MyApp


// загружает список платформ и передает в глобальный контекст
// MyApp.getInitialProps = async () => {
//   const response =  await fetch(`https://api.rawg.io/api/platforms?page_size=10`)
//   const platforms = await response.json()

//   const games = await rawgService.getAllGames()

//   return {platforms: platforms.results, games: games.results}
// }
