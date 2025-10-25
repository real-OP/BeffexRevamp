import { View, Text, StatusBar } from 'react-native';

export default function TestScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text style={{ color: 'black' }}>This is Test Screen</Text>
    </View>
  );
}
