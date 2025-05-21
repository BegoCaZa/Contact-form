import Button from './button/Button';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1>REACT</h1>
      <Button color='lime' hoverColor='red' />
      <Button color='orange' hoverColor='purple' />
    </>
  );
};

export default App;
