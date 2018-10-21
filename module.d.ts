interface IWebpackNodeModule extends NodeModule {
  hot?: {
    accept: (render: () => void) => void
  }
}

declare var module: IWebpackNodeModule
