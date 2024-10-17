type Props = {
  children?: React.ReactNode;
};
const SampleComponent = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        height: 'calc(100% - 2px)',
        width: '100%',
      }}
    >
      {children ? children : 'SampleComponent'}
    </div>
  );
};

export default SampleComponent;
