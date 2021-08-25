// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        text: string;
      };
      primary: string;
      secondary: string;
      background: string;
      backgroundSecondary: string;
      text: string;
      textSecondary: string;
    };
  }
}
