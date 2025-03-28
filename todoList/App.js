import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View styles={styles.tasksWrapper}>
        <Text styles={styles.sectionTitle}>Today's tasks</Text>

        <View styles={styles.items}>
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },

});
