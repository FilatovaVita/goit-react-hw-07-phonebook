import { Hearts } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Hearts
      height="350"
      width="250"
      color="pink"
      ariaLabel="hearts-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
