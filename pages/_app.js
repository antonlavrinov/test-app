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


