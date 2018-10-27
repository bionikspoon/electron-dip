import { EventEmitter, ipcRenderer } from 'electron'
import * as React from 'react'
import CloseButton from '../shared/CloseButton'

export default class App extends React.Component<{}, {}> {
  private sounds: { [sound in Sound]: HTMLAudioElement } = {
    'ba-dum-tsss': new Audio(`${__dirname}/wav/ba-dum-tsss.wav`),
    'crowd-laughing': new Audio(`${__dirname}/wav/crowd-laughing.wav`),
    'sad-trombone': new Audio(`${__dirname}/wav/sad-trombone.wav`),
    applause: new Audio(`${__dirname}/wav/applause.wav`),
    burp: new Audio(`${__dirname}/wav/burp.wav`),
    fart: new Audio(`${__dirname}/wav/fart.wav`),
    money: new Audio(`${__dirname}/wav/money.wav`),
  }
  public componentDidMount() {
    ipcRenderer.on('global-shortcut', this.handleGlobalShortcut)
  }

  public componentWillUnmount() {
    ipcRenderer.removeListener('global-shortcut', this.handleGlobalShortcut)
  }

  public render() {
    return (
      <React.Fragment>
        <div className="settings" onClick={this.handleSettingsClick} />
        <CloseButton />
        <main id="main" className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="speaker">
                <img src="img/speaker.png" alt="speaker" />
              </div>
              <h1 className="logo">
                <img src="img/logo.png" alt="logo" />
              </h1>
            </div>
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
            <ButtonSound sound="ba-dum-tsss" onClick={this.handleSoundClick} />
            <ButtonSound sound="money" onClick={this.handleSoundClick} />
          </div>
        </main>
      </React.Fragment>
    )
  }

  private handleSettingsClick = (_event: React.MouseEvent<HTMLDivElement>) => {
    ipcRenderer.send('open-settings-window')
  }
  private handleSoundClick = (sound: Sound) => {
    const audio = this.sounds[sound]

    audio.currentTime = 0
    audio.play()
  }
  private handleGlobalShortcut = (_event: EventEmitter, number: 0 | 1) => {
    switch (number) {
      case 0:
        this.handleSoundClick('money')
        break
      case 1:
        this.handleSoundClick('applause')
        break
    }
  }
}

type Sound =
  | 'applause'
  | 'ba-dum-tsss'
  | 'burp'
  | 'crowd-laughing'
  | 'fart'
  | 'money'
  | 'sad-trombone'

interface IButtonSoundProps {
  sound: Sound
  onClick: (sound: Sound) => void
}
function ButtonSound(props: IButtonSoundProps) {
  const handleClick = (_event: React.MouseEvent<HTMLDivElement>) =>
    props.onClick(props.sound)

  return (
    <div className="col-3 text-center">
      <div className="button-sound" onClick={handleClick}>
        <span className={`button-icon ${props.sound}`} />
      </div>
    </div>
  )
}
