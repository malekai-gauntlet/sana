import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Stack, router } from 'expo-router';
import { colors, patterns, typography, spacing } from '@/constants/theme';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function SignUp() {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ 
        headerShown: false 
      }} />
      
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Create Account</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              autoCapitalize="words"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              secureTextEntry
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={termsAccepted}
              onValueChange={setTermsAccepted}
              color={termsAccepted ? colors.primary : undefined}
            />
            <Text style={styles.termsText}>
              I accept the <Text style={styles.link}>Terms and Conditions</Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.link}>Already have an account? Sign in</Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
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
  termsText: {
    fontSize: typography.sizes.body,
    color: colors.textPrimary,
    flex: 1,
  } as const,
  link: {
    fontSize: typography.sizes.body,
    color: colors.primary,
    textDecorationLine: 'underline',
  } as const,
}); 