import Styled from './HomePage.module.css';
import SampleComponent from '../../component/SampleComponent';
import LeftComponent from '../../component/LeftComponent';
import MainComponent from '../../component/MainComponent';
import RightComponent from '../../component/RightComponent';

const HomePage = () => {
  return (
    <div id={`${Styled.root}`}>
      <div className={`${Styled.header}`}>
        <SampleComponent />
      </div>
      <div className={`${Styled.center}`}>
        <div className={`${Styled.leftComp}`}>
          <LeftComponent />
        </div>
        <div className={`${Styled.main}`}>
          <MainComponent />
        </div>

        <div className={`${Styled.rightComp}`}>
          <RightComponent />
        </div>
      </div>
      <div className={`${Styled.footer}`}>
        <SampleComponent />
      </div>
    </div>
  );
};

export default HomePage;
