import * as React from 'react'
import CloseButton from '../shared/CloseButton'

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <CloseButton />
        <main id="main" className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="h2 title">Settings</h1>
              <p className="text-light">
                <small>Modifier keys for global shortcuts</small>
              </p>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="ctrl"
                  id="global-shortcut-ctrl"
                />
                <label
                  className="form-check-label global-shortcut"
                  htmlFor="global-shortcut-ctrl"
                >
                  Ctrl
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Shift"
                  id="global-shortcut-Shift"
                />
                <label
                  className="form-check-label global-shortcut"
                  htmlFor="global-shortcut-Shift"
                >
                  Shift
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="alt"
                  id="global-shortcut-alt"
                />
                <label
                  className="form-check-label global-shortcut"
                  htmlFor="global-shortcut-alt"
                >
                  Alt
                </label>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
