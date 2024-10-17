import { useSelector } from 'react-redux';
import { DataState } from '../../redux/store';
import SampleComponent from '../SampleComponent';

const RightComponent = () => {
  const secondData = useSelector((state: DataState) => state.data.secondData);
  // const { secondData: hooksSecondData } = useCountUp({ initSecond: 0 });

  console.log('right rendering');

  return (
    <SampleComponent>
      {/* <div>hooks secondData : {hooksSecondData}</div> */}
      <div>secondData : {secondData}</div>
    </SampleComponent>
  );
};

export default RightComponent;
