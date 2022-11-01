interface RootProps {
  isLoggedIn: boolean;
  theme: string;
  user: IUser;
}

interface RouteSwitch {
  isLoggedIn: boolean;
}

interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext, S = H.LocationState> {
  isLoggedIn: boolean;
  user: IUser;
  history: H.History;
  location: H.Location<S>;
  match: match<Params>;
  staticContext?: C;
}
interface RouteProps {
  location?: H.Location;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}

interface RouteRules {
  element?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}

interface LinkLocal {
  e?: any;
  url: string;
}

interface navConnection {
  effectiveType: string;
  downlink: number;
  downlinkMax: number;
  rtt: number;
  saveData: boolean;
  type?: any;
  onchange?: any;
}

interface Navigator {
  connection: navConnection;
}
