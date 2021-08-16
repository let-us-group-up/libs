import { IThemeOptions } from '../ITheme';
import lightTheme from './variants/light';
import darkTheme from './variants/dark';

export enum ThemeName {
  Light,
  Dark,
}

type IThemesOptions = Record<ThemeName, IThemeOptions>;

const themes: IThemesOptions = {
  [ThemeName.Light]: lightTheme,
  [ThemeName.Dark]: darkTheme,
};

export default themes;
