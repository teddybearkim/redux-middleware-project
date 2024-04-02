function getProducts(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/teddybearkim/hnm-final-2/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type: "GET_PRODUCT_SUCCESS", payload: { data }})
  }
}

export const productAction = { getProducts, getProductDetail  }