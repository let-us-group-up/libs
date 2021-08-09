import {
  buildTitle as buildDesignSystemTitle,
} from '../designSystem/utils';

export const title = 'components';

export const buildTitle = (
  storyName: string,
): string => `${buildDesignSystemTitle(title)}/${storyName}`;
