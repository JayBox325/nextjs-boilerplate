import { useState } from 'react'
import '@/styles/globals.scss'
import { AnimatePresence } from "framer-motion"
import getThemeClasses from '@/utils/helpers/getThemeClasses'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('violet')
  const themeClasses = getThemeClasses(theme)

  return (
    <>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
