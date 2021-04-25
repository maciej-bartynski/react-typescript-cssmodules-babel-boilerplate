declare module "*.module.css" {
    interface IStyles {
        [key: string]: string
    }
    const styles:IStyles;
    export default styles;
}

declare module '*.svg' {
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default ReactComponent
  }