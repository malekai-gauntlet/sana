import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export function useBiometrics() {
  const [isSupported, setIsSupported] = useState(false);
  const [biometricType, setBiometricType] = useState<'face' | 'fingerprint' | null>(null);

  // Check if device supports biometric authentication
  useEffect(() => {
    checkBiometricSupport();
  }, []);

  async function checkBiometricSupport() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      setIsSupported(false);
      return;
    }

    const enrolled = await LocalAuthentication.isEnrolledAsync();
    if (!enrolled) {
      setIsSupported(false);
      return;
    }

    // Get available biometric types
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    
    // Set the biometric type (Face ID or Touch ID)
    if (types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
      setBiometricType('face');
    } else if (types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
      setBiometricType('fingerprint');
    }

    setIsSupported(true);
  }

  // Function to authenticate using biometrics
  async function authenticate() {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Log in with biometrics',
        fallbackLabel: 'Use password instead',
      });

      return result.success;
    } catch (error) {
      console.error('Biometric authentication error:', error);
      return false;
    }
  }

  return {
    isSupported,
    biometricType,
    authenticate,
  };
} 