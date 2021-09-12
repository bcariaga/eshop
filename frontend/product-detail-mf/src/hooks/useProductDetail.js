import {useState, useEffect} from 'react';
// To cancel this all requests on this module.
const controller = new AbortController();
const emmitCancelSignal = () => controller.abort();


export const useProdutDetail = (productId) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const effect = async () => {
      const detailResult = await getDetail(productId);
      setDetail(detailResult);
    };
    effect();
  }, [productId]);

  return [detail, () => emmitCancelSignal()];
};

const getDetail = async (id) => {
  if (!id) {
    return;
  }
  try {
    const response = await fetch(
        `${process.env.DETAIL_API_URL}/items/${id}`,
        {signal: controller.signal});
    if (!response.ok) {
      throw new Error(response.status + response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error('an error has ocurred fetching the detail result!!', error);
    // TODO: add error logging, (sentry??)
    return;
  }
};
