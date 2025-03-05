import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Stack, router } from 'expo-router';
import { colors, patterns, typography, spacing } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useBiometrics } from '@/hooks/useBiometrics';

export default function Login() {
  const { isSupported, biometricType, authenticate } = useBiometrics();

  const handleBiometricAuth = async () => {
    const success = await authenticate();
    if (success) {
      // TODO: Handle successful authentication
      console.log('Biometric authentication successful');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ 
        headerShown: false 
      }} />
      
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Welcome to Sana</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              autoCapitalize="none"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {isSupported && (
            <TouchableOpacity 
              style={styles.biometricButton}
              onPress={handleBiometricAuth}
            >
              <MaterialCommunityIcons
                name={biometricType === 'face' ? 'face-recognition' : 'fingerprint'}
                size={24}
                color={colors.primary}
              />
              <Text style={styles.biometricText}>
                {biometricType === 'face' ? 'Sign in with Face ID' : 'Sign in with Touch ID'}
              </Text>
            </TouchableOpacity>
          )}

          {/* Helper Links */}
          <View style={styles.linksContainer}>
            <TouchableOpacity>
              <Text style={styles.link}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text style={styles.link}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as const,
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  } as const,
  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xl * 3,
    marginBottom: spacing.xl * 2,
  } as const,
  formContainer: {
    width: '100%',
    gap: spacing.lg,
  } as const,
  inputGroup: {
    gap: spacing.xs,
  } as const,
  bottomContainer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: spacing.xl,
  } as const,
  title: {
    fontSize: typography.sizes.header,
    fontWeight: typography.weights.bold,
    color: colors.primary,
    textAlign: 'center',
  } as const,
  label: {
    fontSize: typography.sizes.body,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  } as const,
  input: {
    ...patterns.input,
    width: '100%',
    height: 56,
    borderRadius: 4,
    backgroundColor: colors.white,
  } as const,
  button: {
    ...patterns.button,
    width: '100%',
    height: 56,
    borderRadius: 4,
    marginTop: spacing.lg,
  } as const,
  buttonText: {
    ...patterns.buttonText,
    fontSize: typography.sizes.large,
  } as const,
  linksContainer: {
    alignItems: 'center',
    marginTop: spacing.md,
  } as const,
  link: {
    fontSize: typography.sizes.body,
    color: colors.primary,
    textDecorationLine: 'underline',
  } as const,
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    gap: spacing.sm,
  } as const,
  biometricText: {
    fontSize: typography.sizes.body,
    color: colors.primary,
  } as const,
}); 