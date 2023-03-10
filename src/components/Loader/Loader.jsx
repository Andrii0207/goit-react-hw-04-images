import { ColorRing } from 'react-loader-spinner';

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="140"
      width="140"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        top: '50%',
        left: '50%',
        position: 'absolute',
      }}
      //   wrapperClass="blocksWrapper"
      colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
    />
  );
}

export default Loader;
