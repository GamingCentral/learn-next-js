//this is the root layout to the main page.
import Topbar from '../../Components/general/TopBar'
import Footer from '../../Components/general/Footer'

export const metadata = {
  title: 'try nextJs',
  description: 'By Mannoj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode //indicating the children that are about to come are react components
}) {
  return (
    <html lang="en">
      <body style={{padding: 0, margin: 0}}>
        <Topbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
