import * as React from 'react'

export default class Page extends React.Component<{}, {}> {
  private keyA: HTMLAudioElement | null = null
  private keyB: HTMLAudioElement | null = null
  private keyC: HTMLAudioElement | null = null
  private keyD: HTMLAudioElement | null = null
  private keyE: HTMLAudioElement | null = null
  private keyF: HTMLAudioElement | null = null
  private keyG: HTMLAudioElement | null = null
  private keyH: HTMLAudioElement | null = null
  private keyI: HTMLAudioElement | null = null
  private keyJ: HTMLAudioElement | null = null
  private keyK: HTMLAudioElement | null = null
  private keyL: HTMLAudioElement | null = null
  private keyM: HTMLAudioElement | null = null
  private keyN: HTMLAudioElement | null = null
  private keyO: HTMLAudioElement | null = null
  private keyP: HTMLAudioElement | null = null
  private keyQ: HTMLAudioElement | null = null
  private keyR: HTMLAudioElement | null = null
  private keyS: HTMLAudioElement | null = null
  private keyT: HTMLAudioElement | null = null
  private keyU: HTMLAudioElement | null = null
  private keyV: HTMLAudioElement | null = null
  private keyW: HTMLAudioElement | null = null
  private keyX: HTMLAudioElement | null = null
  private keyY: HTMLAudioElement | null = null
  private keyZ: HTMLAudioElement | null = null
  private key1: HTMLAudioElement | null = null
  private key2: HTMLAudioElement | null = null
  private key3: HTMLAudioElement | null = null
  private key4: HTMLAudioElement | null = null
  private key5: HTMLAudioElement | null = null
  private key6: HTMLAudioElement | null = null
  private key7: HTMLAudioElement | null = null
  private key8: HTMLAudioElement | null = null
  private key9: HTMLAudioElement | null = null
  private key0: HTMLAudioElement | null = null

  public componentDidMount() {
    window.addEventListener('keydown', this.play)
  }

  public componentWillUnmount() {
    window.removeEventListener('keydown', this.play)
  }

  public render() {
    return (
      <div>
        <h1>Electron Dip</h1>

        <p>We are using node {process.versions.node}</p>
        <p>Chrome {process.versions.chrome}</p>
        <p>and Electron {process.versions.electron}</p>
        <div className="audio">
          <audio src="sounds/A.mp3" preload="auto" ref={r => (this.keyA = r)} />
          <audio src="sounds/B.mp3" preload="auto" ref={r => (this.keyB = r)} />
          <audio src="sounds/C.mp3" preload="auto" ref={r => (this.keyC = r)} />
          <audio src="sounds/D.mp3" preload="auto" ref={r => (this.keyD = r)} />
          <audio src="sounds/E.mp3" preload="auto" ref={r => (this.keyE = r)} />
          <audio src="sounds/F.mp3" preload="auto" ref={r => (this.keyF = r)} />
          <audio src="sounds/G.mp3" preload="auto" ref={r => (this.keyG = r)} />
          <audio src="sounds/H.mp3" preload="auto" ref={r => (this.keyH = r)} />
          <audio src="sounds/I.mp3" preload="auto" ref={r => (this.keyI = r)} />
          <audio src="sounds/J.mp3" preload="auto" ref={r => (this.keyJ = r)} />
          <audio src="sounds/K.mp3" preload="auto" ref={r => (this.keyK = r)} />
          <audio src="sounds/L.mp3" preload="auto" ref={r => (this.keyL = r)} />
          <audio src="sounds/M.mp3" preload="auto" ref={r => (this.keyM = r)} />
          <audio src="sounds/N.mp3" preload="auto" ref={r => (this.keyN = r)} />
          <audio src="sounds/O.mp3" preload="auto" ref={r => (this.keyO = r)} />
          <audio src="sounds/P.mp3" preload="auto" ref={r => (this.keyP = r)} />
          <audio src="sounds/Q.mp3" preload="auto" ref={r => (this.keyQ = r)} />
          <audio src="sounds/R.mp3" preload="auto" ref={r => (this.keyR = r)} />
          <audio src="sounds/S.mp3" preload="auto" ref={r => (this.keyS = r)} />
          <audio src="sounds/T.mp3" preload="auto" ref={r => (this.keyT = r)} />
          <audio src="sounds/U.mp3" preload="auto" ref={r => (this.keyU = r)} />
          <audio src="sounds/V.mp3" preload="auto" ref={r => (this.keyV = r)} />
          <audio src="sounds/W.mp3" preload="auto" ref={r => (this.keyW = r)} />
          <audio src="sounds/X.mp3" preload="auto" ref={r => (this.keyX = r)} />
          <audio src="sounds/Y.mp3" preload="auto" ref={r => (this.keyY = r)} />
          <audio src="sounds/Z.mp3" preload="auto" ref={r => (this.keyZ = r)} />
          <audio src="sounds/1.mp3" preload="auto" ref={r => (this.key1 = r)} />
          <audio src="sounds/2.mp3" preload="auto" ref={r => (this.key2 = r)} />
          <audio src="sounds/3.mp3" preload="auto" ref={r => (this.key3 = r)} />
          <audio src="sounds/4.mp3" preload="auto" ref={r => (this.key4 = r)} />
          <audio src="sounds/5.mp3" preload="auto" ref={r => (this.key5 = r)} />
          <audio src="sounds/6.mp3" preload="auto" ref={r => (this.key6 = r)} />
          <audio src="sounds/7.mp3" preload="auto" ref={r => (this.key7 = r)} />
          <audio src="sounds/8.mp3" preload="auto" ref={r => (this.key8 = r)} />
          <audio src="sounds/9.mp3" preload="auto" ref={r => (this.key9 = r)} />
          <audio src="sounds/0.mp3" preload="auto" ref={r => (this.key0 = r)} />
        </div>
      </div>
    )
  }

  private play = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'KeyA':
        if (!this.keyA) return
        this.keyA.play()
        break
      case 'KeyB':
        if (!this.keyB) return
        this.keyB.play()
        break
      case 'KeyC':
        if (!this.keyC) return
        this.keyC.play()
        break
      case 'KeyD':
        if (!this.keyD) return
        this.keyD.play()
        break
      case 'KeyE':
        if (!this.keyE) return
        this.keyE.play()
        break
      case 'KeyF':
        if (!this.keyF) return
        this.keyF.play()
        break
      case 'KeyG':
        if (!this.keyG) return
        this.keyG.play()
        break
      case 'KeyH':
        if (!this.keyH) return
        this.keyH.play()
        break
      case 'KeyI':
        if (!this.keyI) return
        this.keyI.play()
        break
      case 'KeyJ':
        if (!this.keyJ) return
        this.keyJ.play()
        break
      case 'KeyK':
        if (!this.keyK) return
        this.keyK.play()
        break
      case 'KeyL':
        if (!this.keyL) return
        this.keyL.play()
        break
      case 'KeyM':
        if (!this.keyM) return
        this.keyM.play()
        break
      case 'KeyN':
        if (!this.keyN) return
        this.keyN.play()
        break
      case 'KeyO':
        if (!this.keyO) return
        this.keyO.play()
        break
      case 'KeyP':
        if (!this.keyP) return
        this.keyP.play()
        break
      case 'KeyQ':
        if (!this.keyQ) return
        this.keyQ.play()
        break
      case 'KeyR':
        if (!this.keyR) return
        this.keyR.play()
        break
      case 'KeyS':
        if (!this.keyS) return
        this.keyS.play()
        break
      case 'KeyT':
        if (!this.keyT) return
        this.keyT.play()
        break
      case 'KeyU':
        if (!this.keyU) return
        this.keyU.play()
        break
      case 'KeyV':
        if (!this.keyV) return
        this.keyV.play()
        break
      case 'KeyW':
        if (!this.keyW) return
        this.keyW.play()
        break
      case 'KeyX':
        if (!this.keyX) return
        this.keyX.play()
        break
      case 'KeyY':
        if (!this.keyY) return
        this.keyY.play()
        break
      case 'KeyZ':
        if (!this.keyZ) return
        this.keyZ.play()
        break
      case 'Digit1':
        if (!this.key1) return
        this.key1.play()
        break
      case 'Digit2':
        if (!this.key2) return
        this.key2.play()
        break
      case 'Digit3':
        if (!this.key3) return
        this.key3.play()
        break
      case 'Digit4':
        if (!this.key4) return
        this.key4.play()
        break
      case 'Digit5':
        if (!this.key5) return
        this.key5.play()
        break
      case 'Digit6':
        if (!this.key6) return
        this.key6.play()
        break
      case 'Digit7':
        if (!this.key7) return
        this.key7.play()
        break
      case 'Digit8':
        if (!this.key8) return
        this.key8.play()
        break
      case 'Digit9':
        if (!this.key9) return
        this.key9.play()
        break
      case 'Digit0':
        if (!this.key0) return
        this.key0.play()
        break

      default:
        break
    }
  }
}
