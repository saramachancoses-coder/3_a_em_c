import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from '../assets/images/images (1).jpeg';



export default function Index() {
  return (
    <View style={styles.container}>


      <Image source={Logo} style={styles.logo} />


      <Text style={styles.title}>Pagina Sobre</Text>
      <Text>Alba a cabra bebe</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>
      "O mundo ficou um pouco mais bonito desde que a Alba chegou para alegrar os meus dias. 🌾🐐"
      </Text>

    <Link href= "/" style={styles.link}>inicio</Link>
    <Link href= "/contato" style={styles.link}>Entre em contato</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginVertical: 20,
    width: 120,
    height: 120,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18
  },
 link: {
  marginTop: 10,
  marginBptton: 10,
  backgroundColor: '#662952',
  padding: 18,
  borderRadius: 5,
  boxShadow: '4px 4px rgba(0,0,0,0,1)'
 }
});
