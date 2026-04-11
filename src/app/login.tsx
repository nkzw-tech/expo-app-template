import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Defs, Ellipse, Path, RadialGradient, Stop, Svg } from 'react-native-svg';
import useViewerContext from '../user/useViewerContext.tsx';

function GoogleIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24">
      <Path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <Path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <Path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </Svg>
  );
}

export default function Login() {
  const router = useRouter();
  const { login } = useViewerContext();

  const onPress = useCallback(async () => {
    await login();
    router.replace('/(app)/(tabs)/');
  }, [login, router]);

  return (
    <View style={styles.container}>
      <View style={styles.ellipseWrap}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 390 375"
          preserveAspectRatio="none"
        >
          <Defs>
            <RadialGradient id="login-glow" cx="50%" cy="50%" rx="50%" ry="50%">
              <Stop offset="0%" stopColor="#a78bfa" stopOpacity={0.8} />
              <Stop offset="60%" stopColor="#8b5cf6" stopOpacity={0.4} />
              <Stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <Ellipse
            cx="195"
            cy="187.5"
            rx="195"
            ry="187.5"
            fill="url(#login-glow)"
          />
        </Svg>
      </View>

      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <View style={{ flex: 1 }} />
        <Animated.View
          style={styles.content}
          entering={FadeInUp.duration(600).delay(100).springify()}
        >
          <View style={styles.textBlock}>
            <Text style={styles.heading}>
              {'Track Every \n'}
              <Text style={styles.headingAccent}>penny you spend</Text>
            </Text>
            <Text style={styles.subtitle}>
              <fbt desc="Login subtitle">
                Join over 10.000 learners over the World and enjoy online education!
              </fbt>
            </Text>
          </View>

          <View style={styles.buttonGroup}>
            <Pressable style={styles.googleButton} onPress={onPress}>
              <GoogleIcon />
              <Text style={styles.googleButtonText}>
                <fbt desc="Google login button">Continue with Google</fbt>
              </Text>
            </Pressable>

            <Text style={styles.legalText}>
              {'By continuing you agree to our '}
              <Text style={styles.legalLink}>Terms</Text>
              {' & '}
              <Text style={styles.legalLink}>Privacy Policy</Text>
              {'.\nYour data never leaves without permission.'}
            </Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c3aed',
  },
  ellipseWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 171,
    height: 375,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    gap: 32,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  textBlock: {
    gap: 12,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    color: '#ffffff',
  },
  headingAccent: {
    color: '#c1f75f',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(255,255,255,0.8)',
  },
  buttonGroup: {
    gap: 12,
  },
  googleButton: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8b5cf6',
    backgroundColor: '#ffffff',
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#3a383f',
  },
  legalText: {
    fontSize: 12,
    lineHeight: 17,
    color: 'rgba(255,255,255,0.7)',
  },
  legalLink: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    textDecorationLine: 'underline',
  },
});
