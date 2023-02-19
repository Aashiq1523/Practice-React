// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
import { AppRegistry } from 'react-native';

// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.box}>
//         <Text style={styles.text}>Hello, world!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   box: { padding: 10 },
//   text: { fontWeight: 'bold' }
// });

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
