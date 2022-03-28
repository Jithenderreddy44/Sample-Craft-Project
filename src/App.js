import React,{useState} from 'react';
import Header from './components/Header';
import theme from './components/Theme';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Body from './components/Body';


console.log("Theme object",theme);

function App() {
  const [value,setValue] = useState(0);
  const [selectedIndex,setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
      <div>
       <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
       <Body />
       {/* <Switch>
       <Route path="/" exact={true} render={(props) => <LandingPage {...props} value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
       <Route path="/services" exact={true} render={(props) => <Services {...props} value={value} setValue={setValue} />} />
       <Route path="/customsoftware" exact={true} render={(props) => <CustomSoftware {...props} value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
       <Route path="/mobileapps" exact={true} render={(props) => (<MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />)} />
       <Route path="/websites" exact={true} component={() => <div>Websites</div>} />
       <Route path="/revolution" exact={true} component={() => <div>The Revolution</div>} />
       <Route path="/about" exact={true} component={() => <div>About Us</div>} />
       <Route path="/contact" exact={true} component={() => <div>Contact Us</div>} />
       <Route path="/estimate" exact={true} component={() => <div>Estimate</div>} />
       </Switch> */}
       </div>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
