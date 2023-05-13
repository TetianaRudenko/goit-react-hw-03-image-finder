import { LoaderSpinner } from "./Loader.styled";
import { ThreeDots  } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderSpinner>
      
      <ThreeDots 
        height="100" 
        width="100" 
        radius="50"
        color="#3f51b5" 
        /* ariaLabel="three-dots-loading" */
        visible={true}
      /> 

    </LoaderSpinner>
  )
}