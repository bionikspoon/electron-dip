import { remote } from 'electron'
import * as React from 'react'

export default class CloseButton extends React.Component {
  public render() {
    return <div className="CloseButton" onClick={this.handleCloseClick} />
  }

  private handleCloseClick = (_event: React.MouseEvent<HTMLDivElement>) => {
    const window = remote.getCurrentWindow()

    window.close()
  }
}
