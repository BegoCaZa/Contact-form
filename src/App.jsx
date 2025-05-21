import { GlobalStyles } from './styles/GlobalStyles';
import Form from './components/form/Form';
import GeneralContainer from './components/generalContainer/GeneralContainer';

const App = () => {
  return (
    <GeneralContainer>
      <GlobalStyles />
      <Form />
    </GeneralContainer>
  );
};

export default App;
