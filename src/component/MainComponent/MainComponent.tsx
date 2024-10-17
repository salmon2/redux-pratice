import { useSelector } from 'react-redux';
import { DataState } from '../../redux/store';
import SampleComponent from '../SampleComponent';
import { useGetUserInfoQuery } from '../../redux/dataApi';

const MainComponent = () => {
  // const data = useSelector((state: DataState) => state.data);
  // const userInfo = useSelector((state: DataState) => state.data.userInfo);

  const { data: userInfo, error, isLoading, refetch } = useGetUserInfoQuery(3);


  



  return <SampleComponent>Main Component</SampleComponent>;
};

export default MainComponent;
