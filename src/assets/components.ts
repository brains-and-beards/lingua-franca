interface IPlatformComponent {
  name: string
  image: string
}

interface IComments {
  text: string
  variant?: 'info' | 'warning' | 'caution' | 'plain'
}
interface IImpementation {
  text: string
  link: string
}

export interface IComponent {
  reactNativeName: string
  iOSComponent: IPlatformComponent
  androidComponent: IPlatformComponent
  reactNativeImplementation: Array<IImpementation>
  comments: Array<IComments>
}
export const Components: Array<IComponent> = [
  {
    reactNativeName: 'alert',
    iOSComponent: {
      name: 'Alert',
      image: 'https://picsum.photos/300/900'
    },
    androidComponent: {
      name: 'Alert',
      image: 'https://picsum.photos/300/300'
    },
    reactNativeImplementation: [
      { text: 'alert', link: 'https://reactnative.dev/docs/getting-started' },
      { text: 'alert0', link: 'https://reactnative.dev/docs/getting-started' },
      { text: 'alert00', link: 'https://reactnative.dev/docs/getting-started' }
    ],
    comments: [{ text: 'Just info comment', variant: 'info' }]
  },
  {
    reactNativeName: 'alert1',
    iOSComponent: {
      name: 'Alert1',
      image: 'https://picsum.photos/320/900'
    },
    androidComponent: {
      name: 'Alert1',
      image: 'https://picsum.photos/320/300'
    },
    reactNativeImplementation: [
      { text: 'alert1', link: 'https://reactnative.dev/docs/getting-started' },
      { text: 'alert11', link: 'https://reactnative.dev/docs/getting-started' },
      { text: 'alert111', link: 'https://reactnative.dev/docs/getting-started' }
    ],
    comments: [{ text: 'Just warning comment', variant: 'warning' }]
  },
  {
    reactNativeName: 'alert2',
    iOSComponent: {
      name: 'Alert2',
      image: 'https://picsum.photos/320/900'
    },
    androidComponent: {
      name: 'Alert2',
      image: 'https://picsum.photos/320/300'
    },
    reactNativeImplementation: [
      { text: 'alert2', link: 'https://reactnative.dev/docs/getting-started' },
      { text: 'alert22', link: 'https://reactnative.dev/docs/getting-started' },
      { text: 'alert222', link: 'https://reactnative.dev/docs/getting-started' }
    ],
    comments: [{ text: 'Just caution comment', variant: 'caution' }]
  }
]
