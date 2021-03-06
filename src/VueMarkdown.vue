
<script>
import markdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import figuresite from 'markdown-it-figuresite'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import toc from 'markdown-it-toc-and-anchor'
import katex from 'markdown-it-katex'
import tasklists from 'markdown-it-task-lists'
import centerText from 'markdown-it-center-text'
import twemoji from 'twemoji'
import container from 'markdown-it-container'
import mili from 'markdown-it-linkify-images'
import justifyText from 'markdown-it-justify-text'
export default {
  md: new markdownIt(),
  name: 'vue-markdown',

  data() {
    return {
      sourceData: this.source,
    }
  },

  props: {
    watches: {
      type: Array,
      default: () => ['source', 'show', 'toc'],
    },
    source: {
      type: String,
      default: ``,
    },
    show: {
      type: Boolean,
      default: true,
    },
    highlight: {
      type: Boolean,
      default: true
    },
    html: {
      type: Boolean,
      default: true,
    },
    xhtmlOut: {
      type: Boolean,
      default: true,
    },
    breaks: {
      type: Boolean,
      default: true,
    },
    linkify: {
      type: Boolean,
      default: true,
    },
    emoji: {
      type: Boolean,
      default: true,
    },
    typographer: {
      type: Boolean,
      default: true,
    },
    langPrefix: {
      type: String,
      default: 'language-',
    },
    quotes: {
      type: String,
      default: '“”‘’',
    },
    tableClass: {
      type: String,
      default: 'table',
    },
    taskLists: {
      type: Boolean,
      default: true
    },
    toc: {
      type: Boolean,
      default: false,
    },
    tocId: {
      type: String,
    },
    tocClass: {
      type: String,
      default: 'table-of-contents',
    },
    tocFirstLevel: {
      type: Number,
      default: 2,
    },
    tocLastLevel: {
      type: Number,
    },
    tocAnchorLink: {
      type: Boolean,
      default: true,
    },
    tocAnchorClass: {
      type: String,
      default: 'toc-anchor',
    },
    tocAnchorLinkSymbol: {
      type: String,
      default: '#',
    },
    tocAnchorLinkSpace: {
      type: Boolean,
      default: true,
    },
    tocAnchorLinkClass: {
      type: String,
      default: 'toc-anchor-link',
    },
    anchorAttributes: {
      type: Object,
      default: () => ({})
    },
    prerender: {
      type: Function,
      default: (sourceData) => { return sourceData }
    },
    postrender: {
      type: Function,
      default: (htmlData) => { return htmlData }
    }
  },

  computed: {
    tocLastLevelComputed() {
      return this.tocLastLevel > this.tocFirstLevel ? this.tocLastLevel : this.tocFirstLevel + 1
    }
  },

  render(createElement) {
    this.md = new markdownIt()
      .use(subscript)
      .use(superscript)
      .use(footnote)
      .use(deflist)
      .use(abbreviation)
      .use(insert)
      .use(mark)
      .use(katex, { "throwOnError": false, "errorColor": " #cc0000" })
      .use(tasklists, { enabled: this.taskLists })
      .use(figuresite, {youtube: {width: 640, height:390}})
      .use(centerText)
      .use(justifyText)

      this.md.use(container, 'spoiler', {
        validate: function(params) {
          if (params.trim() === 'spoiler') {
            return params
          }
        },

        render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              // opening tag
              return '<span class="spoiler">'+ '\n';
            } else {
              // closing tag
              return '</span>\n';
          }
        }
      })

    this.md.use(container, 'cita', {
      validate: function(params) {
        return params
      },

      render: function (tokens, idx) {
        console.log('current token: ', tokens[idx])
        if(tokens[idx].type === 'container_cita_open') {
          if (tokens[idx].nesting === 1) {
            let token = tokens[idx].info.replace(/ +(?= )/g,'')
            token = token.trim()
            let username = token.split(' ')[1]
            let id = token.split(' ')[2]
            return `<UserQuote username="${username}" id="${id}">`+ '\n';
          } else {
            // closing tag
          }
        } else {
          return '</UserQuote>\n';
        }
      }
    })

    this.md.use(mili, {
      target: '_blank',
      imgClass: 'user-image'
    })

    if (this.emoji) {
      this.md.use(emoji)
    }

    this.md.renderer.rules.emoji = function(token, idx) {
      console.log('tuken', token[idx])
      return twemoji.parse(token[idx].content, {
        folder: 'svg',
        ext: '.svg'
      });
    }

    this.md.set({
      html: this.html,
      xhtmlOut: this.xhtmlOut,
      breaks: this.breaks,
      linkify: this.linkify,
      typographer: this.typographer,
      langPrefix: this.langPrefix,
      quotes: this.quotes,
    })
    this.md.renderer.rules.table_open = () => `<table class="${this.tableClass}">\n`
    let defaultLinkRenderer = this.md.renderer.rules.link_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }
    this.md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      Object.keys(this.anchorAttributes).map((attribute) => {
        let aIndex = tokens[idx].attrIndex(attribute)
        let value = this.anchorAttributes[attribute]
        if (aIndex < 0) {
          tokens[idx].attrPush([attribute, value]) // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = value
        }
      })
      return defaultLinkRenderer(tokens, idx, options, env, self)
    }

    if (this.toc) {
      this.md.use(toc, {
        tocClassName: this.tocClass,
        tocFirstLevel: this.tocFirstLevel,
        tocLastLevel: this.tocLastLevelComputed,
        anchorLink: this.tocAnchorLink,
        anchorLinkSymbol: this.tocAnchorLinkSymbol,
        anchorLinkSpace: this.tocAnchorLinkSpace,
        anchorClassName: this.tocAnchorClass,
        anchorLinkSymbolClassName: this.tocAnchorLinkClass,
        tocCallback: (tocMarkdown, tocArray, tocHtml) => {
          if (tocHtml) {
            if (this.tocId && document.getElementById(this.tocId)) {
              document.getElementById(this.tocId).innerHTML = tocHtml
            }

            this.$emit('toc-rendered', tocHtml)
          }
        },
      })
    }

    let outHtml = this.show ?
      this.md.render(
        this.prerender(this.sourceData)
      ) : ''

    outHtml = outHtml.split(':::').join('')

    outHtml = this.postrender(outHtml);

    this.$emit('rendered', outHtml)
    return createElement(
      'div', {
        domProps: {
          innerHTML: outHtml,
        },
      },
    )
  },

  beforeMount() {
    if (this.$slots.default) {
      this.sourceData = ''
      for (let slot of this.$slots.default) {
        this.sourceData += slot.text
      }
    }

    this.$watch('source', () => {
      this.sourceData = this.prerender(this.source)
      this.$forceUpdate()
    })

    this.watches.forEach((v) => {
      this.$watch(v, () => {
        this.$forceUpdate()
      })
    })
  },
}
</script>

<style>
.emoji {
  height: 1.45em;
  margin-left: .05em;
  margin-right: .1em;
  object-fit: contain;
  vertical-align: -.4em;
  width: 1.45em;
}

</style>
