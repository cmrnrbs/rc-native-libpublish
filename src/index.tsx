import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rc-native-libpublish' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RcNativeLibpublishProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RcNativeLibpublishView';

export const RcNativeLibpublishView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RcNativeLibpublishProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
