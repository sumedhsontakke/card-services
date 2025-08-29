// navigationService.ts
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import type { TRootStackParamList } from '../models';

export const navigationRef = createNavigationContainerRef<TRootStackParamList>();

export function navigate<RouteName extends keyof TRootStackParamList>(
  name: RouteName,
  params?: TRootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate({
      name,
      params,
    } as never);
  }
}

export function replace<RouteName extends keyof TRootStackParamList>(
  name: RouteName,
  params?: TRootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function reset<RouteName extends keyof TRootStackParamList>(
  name: RouteName,
  params?: TRootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  }
}
