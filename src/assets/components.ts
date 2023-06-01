interface IPlatformComponent {
  name: string
  image: string
}

interface IComments {
  text: string
  variant?: 'warning' | 'caution' | 'plain'
}

export interface IComponent {
  reactNativeName: string
  iOSComponent: IPlatformComponent
  androidComponent: IPlatformComponent
  webComponent: IPlatformComponent
  reactNativeImplementation: Array<string>
  comments: Array<IComments>
}
export const Components: Array<IComponent> = [
  {
    reactNativeName: 'alert',
    iOSComponent: {
      name: 'Alert',
      image: 'https://picsum.photos/200/300'
    },
    androidComponent: {
      name: 'Alert',
      image: 'https://picsum.photos/200/300'
    },
    webComponent: {
      name: 'Alert',
      image: 'https://picsum.photos/200/300'
    },
    reactNativeImplementation: ['dasdas', 'dasdasfsdgasdf', 'dasdas'],
    comments: [{ text: 'Just normal component', variant: 'plain' }]
  }
]
