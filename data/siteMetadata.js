const siteMetadata = {
  title: 'My Tech Blog, @jamescardona11',
  user: '@jamescardona11',
  author: 'James Cardona',
  profileImage: '/static/images/avatar.jpg',
  role: 'Software Engineer | <>[57Blocks][https://57blocks.io]',
  company: 'https://57blocks.io',
  headerTitle: 'Hola people, Soy ',
  aboutThisBlog:
    'Bienvenidos a mi personal website, donde comparto un poco más acerca de mí. Soy Software Engineer apasionado por la tecnología, videojuegos y un entusiasta del mundo Cripto y NFTs. En mi tiempo libre me gusta aprender nuevas cosas, hacer algunos side-projects y recientemente crear algunos post para este blog.',

  AllBlogHeader:
    'Esté es mi primer blog, el objetivo principal es retarme para aprender mucho más.',

  aboutMe:
    'Tech Explorer | Apasionado por la tecnología, videojuegos y un entusiasta del mundo Cripto y NFTs.',
  topic1: '#fluter, #python, #nodejs, #web3, #solidity, #clojure <3 y #next.js.',
  topic2: 'Creando aplicaciones, emprendiendo y aprendiendo.',
  language: 'es-co',
  theme: 'light', // system, dark or light

  siteUrl: 'jamescardona11.com',
  siteRepo: 'https://github.com/jamescardona11/my-personal-page',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'jjcardonao@gmail.com',
  github: 'https://github.com/jamescardona11',
  twitter: 'https://twitter.com/Twitter',
  instagram: 'https://www.instagram.com/jamescardona11/',
  cv: 'https://www.dropbox.com/s/69l2vuo9ebjtly2/profile_us.pdf?dl=0',
  notion: 'https://jamescardona11.notion.site/Learning-Path-f43a762b328043269aeb4d6b6d2e31de',
  exa: 'exa.j11.io',
  deew: 'deew.j11.io',
  youtube: 'https://www.youtube.com/channel/UCoDHYabD2zNtMn17x2wu50Q',
  linkedin: 'https://www.linkedin.com/in/jamescardona11',
  locale: 'es-co',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // If you want to use a commenting system other than giscus you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'es',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata

// https://bit.ly/3bhIfuk notion
