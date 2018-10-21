import * as React from 'react'

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <div className="settings" />
        <div className="close" />
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
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
          </div>
          <div className="row buttons">
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
            <ButtonSound sound="ba-dum-tsss" />
            <ButtonSound sound="money" />
          </div>
        </main>
      </React.Fragment>
    )
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

function ButtonSound(props: { sound: Sound }) {
  const audio = new Audio(`${__dirname}/wav/${props.sound}.wav`)
  const handleClick = (_event: React.MouseEvent<HTMLDivElement>) => {
    audio.currentTime = 0
    audio.play()
  }

  return (
    <div className="col-3 text-center">
      <div className="button-sound" onClick={handleClick}>
        <span className={`button-icon ${props.sound}`} />
      </div>
    </div>
  )
}
