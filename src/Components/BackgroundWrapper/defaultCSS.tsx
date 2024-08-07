import { StyleSheet } from 'react-native';
import styles from '../../Styles/defaultCSS';


const stylesheet = StyleSheet.create({
    container: {
      flex: 1,
    },
    background:{
      opacity: 1,
      colorList: styles.background.colorList
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  });
export default stylesheet;
