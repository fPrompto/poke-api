export interface RouteI {
  path: string;
  name: string;
  exact: boolean;
  element: any;
  props?: any;
}
