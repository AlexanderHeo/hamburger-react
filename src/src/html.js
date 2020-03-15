import React from 'react'

export default props => (
  <html lang="en" className="antialiased">
    <head>
      <title>Animated hamburger icons for React 🍔</title>
      <meta
        name="description"
        content="Hamburger icons with CSS-driven transitions, created to be as elegant and performant as possible."
      />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {process.env.NODE_ENV !== 'development' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
          <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', '${process.env.GATSBY_ANALYTICS_ID}', 'auto');
            ga('send', 'pageview');
          </script>
        `,
          }}
        />
      )}
      {props.headComponents}
    </head>
    <body className="bg-gray-900 text-white">
      {props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)
