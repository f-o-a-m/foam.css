import React, {Component, createClass} from "react"
import Markdown from 'react-markdown'
import Prism from 'prismjs'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'

Lowlight.registerLanguage('js', js)

class MarkdownPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      md: false,
    }
  }

  componentWillMount() {
    fetch('/reference.md')
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ md: text })
      })
  }

  render() {
    const { md } = this.state

    if (md) {
      return (
        <div className={'md'} style={{'padding': '2.5rem'}}>
          <Markdown
            source={md}
            renderers={{
              codeblock: PrettyCodeBlock,
              code: PrettyCodeBlock,
            }} />
        </div>
      )
    }
    return (
      <div />
    )
  }
}

class PrettyCodeBlock extends Component {
  render () {
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.value}
        inline={this.props.inline} />
    )
  }
}


export default MarkdownPage
