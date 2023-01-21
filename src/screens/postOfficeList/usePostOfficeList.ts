import {useState} from 'react';
import {Response} from '../../modals/postOfficeModal';
import {getPostOffices} from '../../services/getPostOffices';

export const usePostOfficeList = () => {
  const [getCity, setCity] = useState('');
  const [hasError, setError] = useState(false);
  const [getData, setData] = useState([]);
  const [isLoading, setLoader] = useState(false);

  const onChangeInput = (value: string) => {
    setCity(value);
  };

  const getPostOfficeDetails = async () => {
    setLoader(true);
    getPostOffices(getCity)
      .then((response: Response) => {
        setLoader(false);
        if (response?.status === 200) {
          setError(response?.data[0]?.PostOffice?.length > 0 ? false : true);
          setData(response?.data[0]);
        }
      })
      .catch(error => {
        setLoader(false);
        setError(true);
        setData({
          Message: 'Something Went Wrong',
        });
      });
  };

  return {
    getCity,
    hasError,
    getData,
    isLoading,
    onChangeInput,
    getPostOfficeDetails,
  };
};
