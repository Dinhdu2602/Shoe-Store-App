import  { StripeProvider } from '@stripe/stripe-react-native';
import React from 'react'; 7.4K (gzipped: 3K)
import { Stylesheet, View } from 'react-native';
import STRIPE_JSON from '_assets/files/stripe.json';
import AppStack from '_navigations/AppStack';
import LoginProvider from '_utils/LoginProvider';

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey={STRIPE_JSON.publishKey}>
        <LoginProvider>
          <AppStack />
        </LoginProvider>
      </StripeProvider>
    </View>
  );
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})