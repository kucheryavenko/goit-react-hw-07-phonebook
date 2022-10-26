import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from 'components/Loader/Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="32"
        visible={true}
      />
    </LoaderContainer>
  );
};
