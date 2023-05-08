/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  highlight: ['typescript', 'bash', 'json', 'markdown'], 
  editLinkBase: 'https://github.com/J-KacaKaca/J-kacaKaca.github.io/',
  editLinkText: 'Edit this page on GitHub',
  logo: {
    template: `
    <div>
      <ImageZoom 
      src="./logo.png" 
      :border="false" 
      width="37"
      />
      <span 
      style="font-weight:bold;font-size:30px"
      >J-KasaKasa</span>
    </div>
    `
  },
  // banner: {
  //   template: `
  //   <Note :label="false">

  //   This is a warning for something very important.

  //   </Note>
  //   `
  // },
  
   nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  theme: 'default', //default dark
  detectSystemDarkTheme: true,
  darkThemeToggler: true, 
  layout: 'narrow', //wide narrow left
  sidebar: [
    {
      title: 'English',
      link: '/EN/'
    },
    {
      title: '中文',
      link: '/CN/'
    },
  ],
  overrides: {
    '/': {
      language: 'Home'
    },
    /**
     * English
     * link: '/EN/'
     */
    '/EN/': {
      language: 'English',
      sidebar: [  
        {
          title: 'Finish', //link: '/EN/en_finish/'
          children: [
            {
              title: 'P1',
              link: '/EN/en_finish/1'
            },
            {
              title: 'P2',
              link: '/EN/en_finish/2'
            }
          ],
        },
        {
          title: 'Live', //link: '/EN/en_live/'
          children: [
            {
              title: 'P1',
              link: '/EN/en_live/1'
            },
            {
              title: 'P2',
              link: '/EN/en_live/2'
            }
          ],
        },
        {
          title: 'Pool', //link: '/EN/en_pool/'
          children: [
            {
              title: 'P1',
              link: '/EN/en_pool/1'
            },
            {
              title: 'P2',
              link: '/EN/en_pool/2'
            }
          ],
        },
      ]
    },

    /**
     * Chinese
     * link: '/CN/'
     */
    '/CN/': {
      language: '中文',
      sidebar: [ 
        {
          title: '完结项目', //link: '/CN/cn_finish/'
          children: [
            {
              title: 'P1',
              link: '/CN/cn_finish/1'
            },
            {
              title: 'P2',
              link: '/CN/cn_finish/2'
            }
          ],
        },
        {
          title: '进行中的', //link: '/CN/cn_live/'
          children: [
            {
              title: 'P1',
              link: '/CN/cn_live/1'
            },
            {
              title: 'P2',
              link: '/CN/cn_live/2'
            }
          ],
        },
        {
          title: '预备项目池', //link: '/CN/cn_pool/'
          children: [
            {
              title: 'P1',
              link: '/CN/Cn_pool/1'
            },
            {
              title: 'P2',
              link: '/CN/cn_pool/2'
            }
          ],
        },
      ]
    },
  },

  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} 
  Copyright by <a href="https://github.com/Minoyoo" target="_blank">Mino</a>. 
  Powered by <a href="https://egoist.sh" target="_blank">EGOIST</a>. 
  Released under MIT license.
  </div>
  `,
  
})