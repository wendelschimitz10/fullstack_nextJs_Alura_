import { Breakpoints } from "@displaykit/responsive_styles";

// Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
	fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
}

// xs: 0 From 0 screen width until 479
// sm: 480 From 480 screen width until 767
// md: 768 From 768 screen width until 991
// lg: 992 From 992 screen width until 1199
// xl: 1200 From 1200 and beyond