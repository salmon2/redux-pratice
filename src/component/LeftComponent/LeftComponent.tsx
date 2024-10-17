import { useDispatch } from 'react-redux';
import SampleComponent from '../SampleComponent';
import useCountUp from '../../hooks/useCountUp';
import { useEffect } from 'react';
import { setSecondData } from '../../redux/dataSlice';

const LeftComponent = () => {
  const dispatch = useDispatch();
  // const secondData = useSelector((state: DataState) => state.data.secondData);
  const { secondData: hooksSecondData } = useCountUp({ initSecond: 0 });

  useEffect(() => {
    dispatch(setSecondData(hooksSecondData));
  }, [hooksSecondData]);

  console.log('left rendering');

  return (
    <SampleComponent>
      Left Component
      {/* <div>hooks secondData : {hooksSecondData}</div> */}
      {/* <div>secondData : {secondData}</div> */}
    </SampleComponent>
  );
};

export default LeftComponent;
