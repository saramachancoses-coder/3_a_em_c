import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style = {styles.titulo}>

    <Text>O inicio do mundo</Text>

    <View style = {styles.container}>

    <Text>esse e um texte</Text>
    <Text>A vida perde o sentido a cada dia</Text>
    <Text style = {styles.card}>A vida e brilhante, Porem para poucos! </Text>
        
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    flex: 1,
    fontWeight: 'bold',
    fontSize: 28
  },
  card:{
backgroundColor: '##ffff00',
padding: 18,
borderRadius: 5,
boxShadow:'4px 4 px rgba(0,0,0,1.0)'
  }
})
