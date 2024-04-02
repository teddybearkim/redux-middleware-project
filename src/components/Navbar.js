import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  auth,
  setAuth,
  setPage,
  categories,
  setMobileMenu,
  mobileMenu,
}) => {
  console.log(mobileMenu);
  const navigate = useNavigate();
  const search = (e) => {
    let keyword = e.target.value;
    if (e.key === "Enter") {
      navigate(`/?q=${keyword}`);
    }
  };


  return (
    <div>
      <div className="flex nav-top">
        <div
          className="mobile-menu-button"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setMobileMenu(true);
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="메뉴버튼"
          />
        </div>

        <div
          className="login-btn"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (auth === false) {
              navigate("/login");
            } else {
              setAuth(false);
              navigate("/login");
            }
          }}
        >
          <FontAwesomeIcon icon={faUser} />{" "}
          {auth === true ? (
            <span style={{ color: "gray" }}>로그아웃</span>
          ) : (
            <span>로그인</span>
          )}
        </div>
      </div>

      <div className="로고 flex logo">
        <img
          onClick={() => {
            navigate("/");
          }}
          src="https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg"
          alt="로고"
          style={{ width:"200px", height:"120px", margin:"-80px",cursor: "pointer"}}
        />
      </div>
      <div className="category-box center">
        <ul className="categories flex center">
          {categories.map((e, i) => {
            return (
              <li className="menu" key={i} style={{ cursor: "pointer" }}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input
          onKeyDown={(e) => {
            search(e);
          }}
          type="text"
          placeholder="찾으시는 제품을 검색하세요."
        />
      </div>
    </div>
  );
};

export default Navbar;