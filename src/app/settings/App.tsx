import { ipcRenderer } from 'electron'
import * as React from 'react'
import config from '../../config'
import CloseButton from '../shared/CloseButton'

export default class App extends React.Component<{}, {}> {
  public state = { selectedOptions: [], loading: false }

  public async componentDidMount() {
    console.log('process.execPath', process.execPath)

    this.setState({ loading: false })
    const selectedOptions = await config.get('shortcutKeys')
    this.setState({ selectedOptions, loading: false })
  }

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
              <Option
                onChange={this.handleChange}
                selectedOptions={this.state.selectedOptions}
                value="CmdOrCtrl"
                loading={this.state.loading}
              />
              <Option
                onChange={this.handleChange}
                selectedOptions={this.state.selectedOptions}
                value="Shift"
                loading={this.state.loading}
              />
              <Option
                onChange={this.handleChange}
                selectedOptions={this.state.selectedOptions}
                value="Alt"
                loading={this.state.loading}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }

  private handleChange = async (selectedOptions: Modifiers[]) => {
    this.setState({ selectedOptions })
    await config.set('shortcutKeys', selectedOptions)
    ipcRenderer.send('set-global-shortcuts')
  }
}

type Modifiers = 'CmdOrCtrl' | 'Shift' | 'Alt'

interface IOptionProps {
  value: Modifiers
  onChange: (selectedOptions: Modifiers[]) => void
  selectedOptions: Modifiers[]
  loading: boolean
}

function Option(props: IOptionProps) {
  const id = `global-shortcut-${props.value}`
  const checked = props.selectedOptions.includes(props.value)
  const handleChange = () => {
    const nextSelected = checked
      ? props.selectedOptions.filter(option => option !== props.value)
      : [...props.selectedOptions, props.value]

    props.onChange(nextSelected)
  }

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        id={id}
        onChange={handleChange}
        type="checkbox"
        value={props.value}
        checked={checked}
        disabled={props.loading}
      />
      <label className="form-check-label global-shortcut" htmlFor={id}>
        {props.value}
      </label>
    </div>
  )
}
