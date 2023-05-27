import './globals.css'
import Navigation from './navagation'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body > 
        <div className='bg-gray-300 h-[2000px]'>
          <div className='bg-yellow-400 h-[2000px] mx-9'>
            <Navigation/>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
