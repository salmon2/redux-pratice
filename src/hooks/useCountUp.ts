import { useEffect, useState } from 'react';

type Props = {
  initSecond: number;
};
const useCountUp = ({ initSecond }: Props) => {
  const [secondData, setSecondData] = useState<number>(initSecond ?? 0);

  useEffect(() => {
    setInterval(() => setSecondData((prev) => prev + 1), 1000);
  }, []);

  return { secondData: secondData };
};

export default useCountUp;
