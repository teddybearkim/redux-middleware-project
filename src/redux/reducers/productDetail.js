const product = useSelector((state) => state.product.selectedItem);
const dispatch = useDispatch();
const getProductDetail = async () => {
  dispatch(productAction.getProductDetail(id));
};

export default getProductDetail