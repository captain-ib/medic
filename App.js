import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/StackNav';
import {Home} from './infrastructure/screens/Home'
import { Service } from './infrastructure/screens/Service';

export default function App() {
  
  return (
      
     <NavigationContainer>
        {/* { <Service/> } */}
       <StackNavigation/>
        {/* <Home/> */}
     </NavigationContainer>
      
  )
};
