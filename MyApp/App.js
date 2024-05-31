import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, TouchableNativeFeedback } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.Header}>Hello , Devs</Text>
      <ImageBackground source={require('./images/image1.png')} style={styles.icon}></ImageBackground>
      </View>
      <Text style={styles.text}>14 tasks today</Text>
      <View>
      <TextInput style={styles.textInput} autoFocus={true}><FontAwesome6 name="magnifying-glass" size={24} color="black" />  Search</TextInput>
      <TouchableNativeFeedback>
      <Image source={require('./images/image.png')} style={styles.filter}></Image>
      </TouchableNativeFeedback>
      </View>
      <StatusBar style="auto" />
    <Text style={styles.textHeader}>Categories</Text>
    <View>
    <ScrollView horizontal={true}>
      <View style={styles.categories}><Text style={styles.categoriesHeader}>Focus</Text>
      <View>
      <Text style={styles.categoriesText}> 12 Tasks</Text>
      <Image source={require('./images/download (2).png')} style={styles.image}></Image>
      </View>
      </View>
      <View style={styles.categories}><Text style={styles.categoriesHeader}>Study</Text>
      <View>
      <Text style={styles.categoriesText}> 2 Tasks</Text>
      <Image source={require('./images/download.png')} style={styles.image}></Image>
      </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Cook</Text>
        <View>
        <Text style={styles.categoriesText}> 5 Tasks</Text>
        <Image source={require('./images/diet.png')} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Work</Text>
        <View>
        <Text style={styles.categoriesText}> 13 Tasks</Text>
        <Image source={require('./images/working.png')} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Relax</Text>
        <View>
        <Text style={styles.categoriesText}> 7 Tasks</Text>
        <Image source={require('./images/relax.png')} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Camping</Text>
        <View>
        <Text style={styles.categoriesText}> 3 Tasks</Text>
        <Image source={require('./images/camping.png')} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Travel</Text>
        <View>
        <Text style={styles.categoriesText}> 1 Task</Text>
        <Image source={require('./images/travel.png')} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Music</Text>
        <View>
        <Text style={styles.categoriesText}> 4 Tasks</Text>
        <Image source={require('./images/music.png')} style={styles.image}></Image>
        </View>
      </View>
      <View style={styles.categories}>
      <Text style={styles.categoriesHeader}>Exercise</Text>
        <View>
        <Text style={styles.categoriesText}> 6 Tasks</Text>
        <Image source={require('./images/exercise.png')} style={styles.image}></Image>
        </View>
      </View>
      </ScrollView>
    </View>
      <Text style={styles.textHeader}>Ongoing Task</Text>
      <FlatList data={[
        {key: 'Web Development'},
        {key: 'Mobile Development'},
        {key: 'Machine Learning'},
        {key: 'Data Science'},
        {key: 'Artificial Intelligence'},
        {key: 'Cyber Security'},
        {key: 'Blockchain'},
        {key: 'Push Ups'},
        {key: 'Pull Ups'},
        {key: 'Squats'},
        {key: 'Crunches'},
        {key: 'Plank'},
        {key: 'Lunges'},
        {key: 'Deadlifts'},
        {key: 'Bench Press'},
      ]}
      renderItem={({item}) => <View style={styles.task}><Text style={styles.taskHeader}>{item.key}</Text></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingEnd: 20,
    backgroundColor: '#f7f0e8',
    ...StyleSheet.absoluteFillObject,
    alignSelf: "flex-end",
    marginTop: 30,
    position: 'absolute',
    fontFamily:'Roboto',
  },

  Header: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },

  textHeader : {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 11,
  },

  text :{
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
  },

  textInput: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: 'white',
    paddingLeft: 8,
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    width: 260,
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 190,
    height: 190, 
    backgroundColor: 'white', 
    margin: 10,
    marginLeft: -1,
    borderRadius: 15,
    marginRight: 35,
  },

  categoriesText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
  },

  categoriesHeader: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 15,
  },

  task :{
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: 310,
    height: 140,
    borderStyle: 'solid',
  },

  image :{
    width: 125,
    height: 125,
    backgroundColor: 'white',
    marginLeft: 25,
  },

  taskHeader: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 30,
    padding: 10,
  },

  icon: {
    width: 50,
    height: 52,
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: 2,
    marginLeft: 280,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 30,
  },

  filter: {
    width: 50,
    height: 50,
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: 20,
    marginLeft: 280,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
