import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropDown from "../components/DropDown";
import { Button } from "react-bootstrap";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getProductDetail = async () => {
    let url = "https://my-json-server.typicode.com/teddybearkim/hnm-final-2";
    let response = await fetch(url + `/products/${id}`);
    let data = await response.json();
    setDetail(data);
    setLoading(true);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className="flex"
          style={{ width: "100%", flexWrap: "wrap", marginBottom: "200px" }}
        >
          <div className="product-image">
            <img
              style={{ width: "100%" }}
              src={detail?.img}
              alt={detail?.title}
            />
          </div>
          <div className="product-info">
            <div className="info" style={{ fontSize: "20px" }}>
              {detail?.title}
            </div>
            <div className="price" style={{ fontSize: "20px" }}>
              ₩{detail?.price.toLocaleString()}
            </div>
            <div className="product-choice">
              {detail?.choice ? (
                <div className="choice">Conscious choice</div>
              ) : (
                <div className="choice">­</div>
              )}
            </div>
            <div className="product-size">
              <DropDown sizes={detail?.size} />
            </div>
            <Button variant="dark" className="buy">구매하기</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;