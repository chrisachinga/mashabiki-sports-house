import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Basic SEO Tags */}
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta name="apple-mobile-web-app-title" content="Mashabiki Sports House" />
        <meta
          name='description'
          content='Mashabiki Sports House - Your ultimate destination for sports gear, apparel, and accessories. Shop online for the latest in sports fashion and equipment in Kenya.'
        />
        <meta
          name='keywords'
          content='sports gear, sports apparel, sports accessories, sports fashion, Kenya sports, Mashabiki Sports House'
        />
        <meta
          name='author'
          content='Mashabiki Sports House'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://mashabikisportshouse.com/'
        />
        <meta
          property='og:title'
          content='Mashabiki Sports House - Premium Sports Gear and Apparel'
        />
        <meta
          property='og:description'
          content='Your ultimate destination for sports gear, apparel, and accessories. Shop online for the latest in sports fashion and equipment in Kenya.'
        />
        <meta
          property='og:image'
          content='https://mashabikisportshouse.com/images/og-image.jpg'
        />

        {/* Twitter */}
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://mashabikisportshouse.com/'
        />
        <meta
          property='twitter:title'
          content='Mashabiki Sports House - Premium Sports Gear and Apparel'
        />
        <meta
          property='twitter:description'
          content='Your ultimate destination for sports gear, apparel, and accessories. Shop online for the latest in sports fashion and equipment in Kenya.'
        />
        <meta
          property='twitter:image'
          content='https://mashabikisportshouse.com/images/og-image.jpg'
        />

        {/* Canonical URL */}
        <link
          rel='canonical'
          href='https://mashabikisportshouse.com/'
        />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../../public/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='../../public/favicon/favicon-96x96.png'
        />

        <link rel='manifest' href='../../public/favicon/site.webmanifest' />

        {/* Additional SEO Tags */}
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='revisit-after' content='7 days' />
        <meta name='theme-color' content='#ffffff' />

        {/* Structured Data (JSON-LD) */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SportsOrganization',
            name: 'Mashabiki Sports House',
            url: 'https://mashabikisportshouse.com/',
            logo: 'https://mashabikisportshouse.com/images/logo.png',
            description:
              'Your ultimate destination for sports gear, apparel, and accessories. Shop online for the latest in sports fashion and equipment in Kenya.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Sports Lane',
              addressLocality: 'Nairobi',
              addressRegion: 'Nairobi',
              postalCode: '00100',
              addressCountry: 'Kenya',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+254-712-345-678',
              contactType: 'customer service',
            },
          })}
        </script>
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
