import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Defs, Ellipse, RadialGradient, Stop, Svg } from 'react-native-svg';
import useViewerContext from '../user/useViewerContext.tsx';

export default function SplashScreen() {
  const router = useRouter();
  const { isAuthenticated } = useViewerContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(isAuthenticated ? '/(app)/(tabs)/' : '/login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

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
            <RadialGradient id="splash-glow" cx="50%" cy="50%" rx="50%" ry="50%">
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
            fill="url(#splash-glow)"
          />
        </Svg>
      </View>
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
});
