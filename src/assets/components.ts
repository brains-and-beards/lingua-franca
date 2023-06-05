import IOSModal from '@assets/components/iOSModal.jpg'
import AndroidModal from '@assets/components/androidModal.jpg'
import iOSModalSheet from '@assets/components/iOSModalSheet.png'
import AndroidModalSheet from '@assets/components/androidModalSheet.png'
import AndroidModalPicker from '@assets/components/andriodPicker.png'
import iOSModalPicker from '@assets/components/iOSPicker.png'
import iOSModalActivity from '@assets/components/iOSModalActivity.png'
import AndroidModalActivity from '@assets/components/androidModalActivity.png'
import iOSModalActionSheet from '@assets/components/iOSModalActionSheet.png'
import AndroidModalActionSheet from '@assets/components/androidModalActionSheet.png'
import iOSModalDatePicker from '@assets/components/iOSModalDatePicker.png'
import AndroidModalDatePicker from '@assets/components/androidModalDatePicker.png'
import AndroidModalTimePicker from '@assets/components/androidModalTimePicker.png'
import iOSModalTimePicker from '@assets/components/iOSModalDatePicker.png'
import IOSSheet from '@assets/components/iOSSheet.png'
import AndroidSheet from '@assets/components/androidSheet.png'
import AndroidDropdown from '@assets/components/androidDropdown.png'
import IOSDropdown from '@assets/components/iOSDropdown.png'
import IOSEditMenu from '@assets/components/iOSEditMenu.png'
import AndroidEditMenu from '@assets/components/androidEditMenu.png'
import AndroidSnackBar from '@assets/components/androidSnackbar.png'
import AndroidBanner from '@assets/components/androidBanner.png'
import AndroidNavigationBar from '@assets/components/AndroidNavigationBar.png'
import IOSNavigationBar from '@assets/components/iOSNavigationBar.png'
import IOSTabBar from '@assets/components/iOSTabBar.png'
import AndroidTabBar from '@assets/components/AndroidTabBar.png'
import IOSTabs from '@assets/components/iOSTabs.png'
import AndroidTabs from '@assets/components/androidTabs.png'
import AndroidSearchBar from '@assets/components/androidSearchBar.png'
import IOSSearchBar from '@assets/components/iOSSearchBar.png'
import IOSHomeIndicator from '@assets/components/iOSHomeIndicator.png'
import IOSStatusBar from '@assets/components/iOSStatusBar.png'
import AndroidStatusBar from '@assets/components/androidStatusBar.png'

interface IPlatformComponent {
  name: string
  image?: string
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
    reactNativeName: 'dialog / modal / alert',
    iOSComponent: {
      name: 'Alert',
      image: IOSModal
    },
    androidComponent: {
      name: 'Alert dialog',
      image: AndroidModal
    },
    reactNativeImplementation: [
      { text: 'React Native Docs', link: 'https://reactnative.dev/docs/alert' }
    ],
    comments: [{ text: 'Design of Alerts will be common across platforms', variant: 'info' }]
  },
  {
    reactNativeName: 'dialog / modal / sheet',
    iOSComponent: {
      name: 'Sheet',
      image: iOSModalSheet
    },
    androidComponent: {
      name: 'Full screen dialog',
      image: AndroidModalSheet
    },
    reactNativeImplementation: [
      {
        text: 'React Native Bottom Sheet',
        link: 'https://gorhom.github.io/react-native-bottom-sheet/'
      },
      { text: 'React Native Sheet', link: 'https://www.npmjs.com/package/react-native-sheet' },
      {
        text: 'react-native-simple-bottom-sheet',
        link: 'https://github.com/StefanoMartella/react-native-simple-bottom-sheet'
      },
      {
        text: 'Reanimated Bottom Sheet',
        link: 'https://github.com/osdnk/react-native-reanimated-bottom-sheet'
      }
    ],
    comments: [{ text: 'Design of modal Sheets will be common across platforms', variant: 'info' }]
  },
  {
    reactNativeName: 'dialog / modal / option picker',
    iOSComponent: {
      name: 'Picker',
      image: iOSModalPicker
    },
    androidComponent: {
      name: 'Confirmation dialog',
      image: AndroidModalPicker
    },
    reactNativeImplementation: [
      {
        text: '@react-native-picker/picker',
        link: 'https://github.com/react-native-picker/picker'
      },
      {
        text: 'react-native-picker-select',
        link: 'https://github.com/lawnstarter/react-native-picker-select'
      },
      { text: 'alert222', link: 'https://reactnative.dev/docs/getting-started' }
    ],
    comments: [
      { text: 'Used for option sets of 5-30ish options', variant: 'plain' },
      {
        text: 'Design of Pickers will be different across platforms: on iOS we will utilize the native picker component, while for Android we will make a custom design that follows the layout of the default Material component',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'dialog / modal / option picker searchable',
    iOSComponent: {
      name: 'N/A'
    },
    androidComponent: {
      name: 'N/A'
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: 'Used for option sets of more than 30ish options, usually in hundreds (e.g. country pickers)'
      },
      {
        text: 'such a component does not exist in the native platforms, but is rather constructed from different atomic components',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'dialog / modal / activity view',
    iOSComponent: {
      name: 'Activity view',
      image: iOSModalActivity
    },
    androidComponent: {
      name: 'Modal bottom sheet',
      image: AndroidModalActivity
    },
    reactNativeImplementation: [
      {
        text: 'React Native Bottom Sheet',
        link: 'https://gorhom.github.io/react-native-bottom-sheet/'
      },
      {
        text: 'React Native Docs - Share',
        link: 'https://reactnative.dev/docs/share'
      }
    ],
    comments: [
      {
        text: 'Design of Activity Views will be common across platforms',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'dialog / modal / action sheet',
    iOSComponent: {
      name: 'Action sheet',
      image: iOSModalActionSheet
    },
    androidComponent: {
      name: 'Simple dialog or Modal bottom sheet',
      image: AndroidModalActionSheet
    },
    reactNativeImplementation: [
      {
        text: '@expo/react-native-action-sheet',
        link: 'https://github.com/expo/react-native-action-sheet'
      }
    ],
    comments: [
      {
        text: 'Design of Action Sheets will be different across platforms: on iOS we will utilize the native action sheet, while for Android we will make a custom design that follows the layout of the default Material component',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'dialog / modal / date picker',
    iOSComponent: {
      name: 'Date picker',
      image: iOSModalDatePicker
    },
    androidComponent: {
      name: 'Date picker',
      image: AndroidModalDatePicker
    },
    reactNativeImplementation: [
      {
        text: 'React Native Date Picker',
        link: 'https://github.com/henninghall/react-native-date-picker'
      }
    ],
    comments: [
      {
        text: 'Design of Date Pickers will be different across platforms: on iOS we will utilize the native date picker, while for Android we will make a custom design that follows the layout of the default Material component',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'dialog / modal / time picker',
    iOSComponent: {
      name: 'Time picker',
      image: iOSModalTimePicker
    },
    androidComponent: {
      name: 'Time picker',
      image: AndroidModalTimePicker
    },
    reactNativeImplementation: [
      {
        text: 'React Native Date Picker',
        link: 'https://github.com/henninghall/react-native-date-picker'
      }
    ],
    comments: [
      {
        text: 'Design of Time Pickers will be different across platforms: on iOS we will utilize the native time picker, while for Android we will make a custom design that follows the layout of the default Material component',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'dialog / non-modal / sheet',
    iOSComponent: {
      name: 'Non-modal sheet',
      image: IOSSheet
    },
    androidComponent: {
      name: 'Standard bottom sheet',
      image: AndroidSheet
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: 'Design of non-modal Sheets will be common across platforms',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'dialog / non-modal / dropdown menu',
    iOSComponent: {
      name: 'Menu',
      image: IOSDropdown
    },
    androidComponent: {
      name: 'Dropdown menu',
      image: AndroidDropdown
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: 'Design of Dropdown Menus will be different across platforms: on iOS we will utilize the menu component, while for Android we will make a custom design that follows the layout of the default Material component',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'dialog / non-modal / edit menu',
    iOSComponent: {
      name: 'Edit menu',
      image: IOSEditMenu
    },
    androidComponent: {
      name: 'n/a*',
      image: AndroidEditMenu
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: '*Material doesn’t recognize this as a native component.'
      },
      {
        text: 'Design of Edit Menus will be different across platforms as we will utilize the native components',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'dialog / non-modal / snackbar',
    iOSComponent: {
      name: 'n/a*'
    },
    androidComponent: {
      name: 'Snackbar',
      image: AndroidSnackBar
    },
    reactNativeImplementation: [
      {
        text: 'React Native Snackbar',
        link: 'https://github.com/cooperka/react-native-snackbar'
      }
    ],
    comments: [
      {
        text: 'Snackbars disappear automatically after a timeout, although the user can dismiss them ahead of the timeout either by pressing a designated button on them, or swiping them away.'
      },
      {
        text: '*iOS does not recognize a component like this as an interaction pattern'
      },
      {
        text: 'Design of Snackbars will be common across platforms',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'dialog / non-modal / banner',
    iOSComponent: {
      name: 'n/a*'
    },
    androidComponent: {
      name: 'Banner',
      image: AndroidBanner
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: 'Banners remain persistent in the interface until dismissed by the user. They can also be ignored by the user.'
      },
      {
        text: '*iOS does not recognize a component like this as an interaction pattern'
      },
      {
        text: 'Design of Banners will be common across platforms',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'bar / header',
    iOSComponent: {
      name: 'Navigation bar',
      image: IOSNavigationBar
    },
    androidComponent: {
      name: 'Navigation bar',
      image: AndroidNavigationBar
    },
    reactNativeImplementation: [
      {
        text: 'React Navigation',
        link: 'https://reactnavigation.org/docs/headers/'
      },
      {
        text: 'React Native Elements',
        link: 'https://reactnativeelements.com/docs/1.2.0/header'
      }
    ],
    comments: [
      {
        text: 'iOS and Android’s choice of calling what essentially is a header, a “navigation bar” is misleading because the term “navigation” is also used to name other types of bars, and it implies its function without being specific. In relation to a page, the bar is a header, and the header can have multiple functions besides navigation (e.g. search, confirmation, closing, etc)'
      },
      {
        text: 'Design of Headers will be common across platforms, with a minor in how the “Back” button looks',
        variant: 'warning'
      }
    ]
  },
  {
    reactNativeName: 'bar / top-level navigation',
    iOSComponent: {
      name: 'Tab bar',
      image: IOSTabBar
    },
    androidComponent: {
      name: 'Bottom navigation',
      image: AndroidTabBar
    },
    reactNativeImplementation: [
      {
        text: 'React Navigation Bottom Tabs',
        link: 'https://reactnavigation.org/docs/bottom-tab-navigator'
      },
      {
        text: 'React Navigation Material Bottom Tabs',
        link: 'https://reactnavigation.org/docs/material-bottom-tab-navigator'
      }
    ],
    comments: [
      {
        text: '“Top-level” refers to the highest level app architecture in terms of screens (see view types). “Tabs” would have been an incorrect word because tabs are used for something else (explained in next row), while Android’s “bottom navigation” refers only to the placement of the bar, which is misleading in terms of the function (does bottom refer to app architecture?) and why wouldn’t the navigation be placed somewhere else?'
      },
      {
        text: 'Design of the Top-level Navigation Bar will be common across platforms',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'bar / tabs',
    iOSComponent: {
      name: 'Scope bars',
      image: IOSTabs
    },
    androidComponent: {
      name: 'Tabs',
      image: AndroidTabs
    },
    reactNativeImplementation: [
      {
        text: 'React Navigation Material Top Tabs',
        link: 'https://reactnavigation.org/docs/material-top-tab-navigator'
      }
    ],
    comments: [
      {
        text: 'Tabs are generally a pattern used to organize/scope out content related to a screen into more easily digestible chunks. So when we use use segmented controls as a representation of tabs, we will make sure that they are styled vastly different than when they are used as a representation for radio buttons/checkboxes.'
      },
      {
        text: 'Design of the Tabs Bar will be common across platforms',
        variant: 'info'
      }
    ]
  },
  {
    reactNativeName: 'bar / search',
    iOSComponent: {
      name: 'n/a',
      image: IOSSearchBar
    },
    androidComponent: {
      name: 'n/a',
      image: AndroidSearchBar
    },
    reactNativeImplementation: [
      {
        text: 'React Native Elements',
        link: 'https://reactnativeelements.com/docs/components/searchbar'
      },
      {
        text: 'React Native Paper',
        link: 'https://callstack.github.io/react-native-paper/docs/components/Searchbar/'
      },
    ],
    comments: [
      {
        text: 'A search bar is not explicitly defined on any platform, but appears on both as a distinct view that includes both a search field and additional buttons outside the field'
      },
      {
        text: 'Design of Search Bars will be different across platforms as both platforms have a slightly different behavior in terms of canceling/going back.',
        variant: 'caution'
      }
    ]
  },
  {
    reactNativeName: 'bar / status',
    iOSComponent: {
      name: 'Status bar',
      image: IOSStatusBar
    },
    androidComponent: {
      name: 'Android status bar',
      image: AndroidStatusBar
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: 'Note that this is a component that will be defined in the design, but will be used for layout purposes. If the need arises, its slightly editable nature will be exploited to make it better suit the in-app experience.'
      }
    ]
  },
  {
    reactNativeName: 'bar / home indicator',
    iOSComponent: {
      name: 'Home indicator bar',
      image: IOSHomeIndicator
    },
    androidComponent: {
      name: 'n/a'
    },
    reactNativeImplementation: [],
    comments: [
      {
        text: 'Note that this is a component that will be defined in the design, but will be used strictly for layout purposes and is not editable.'
      },
      {
        text: 'While some android phones have an “android navigation bar” as part of the display itself, the area covered by it is not included in the viewport.',
        variant: 'info'
      }
    ]
  },
]
