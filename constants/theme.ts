import { ViewStyle, TextStyle } from 'react-native';

export const colors = {
  // Brand colors from Sana web platform
  primary: '#1D3D47',    // Teal/dark green
  secondary: '#A1CEDC',  // Light teal
  accent: '#FFD23F',     // Yellow
  
  // Basic colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Text colors
  textPrimary: '#1D3D47',
  textSecondary: '#666666',
  
  // Status colors
  error: '#DC3545',
  success: '#28A745',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA'
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

export const typography = {
  sizes: {
    small: 14,
    body: 16,
    large: 18,
    title: 24,
    header: 32
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const
  }
};

// Common style patterns
export const patterns = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg
  } as ViewStyle,
  
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    fontSize: typography.sizes.body,
    color: colors.textPrimary
  } as TextStyle,
  
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg
  } as ViewStyle,
  
  buttonText: {
    color: colors.white,
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.semiBold
  } as TextStyle
}; 