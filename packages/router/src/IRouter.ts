export type To = string | number;

export type PathnameBase = string;

export type Pathname = string;

export type Search = string;

export type Params = Record<string, string | undefined>;

export interface NavigateOptions {
  replace?: boolean;
}

export interface Location {
  pathname: Pathname;
  search: Search;
}

export interface PathMatch {
  pathnameBase: PathnameBase;
  pathname: Pathname;
  params: Params;
}
