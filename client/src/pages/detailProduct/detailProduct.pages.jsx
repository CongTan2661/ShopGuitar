import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./detailProduct.pages.scss";
import { getProductItemAction } from "../../store/actions/product.action";
import Slider from "react-slick";

class DetailProduct extends Component {
  state = {
    ktra: false,
    listSp: [],
    quantityChoice: 1,
    checkChar: true,
    content: "content1",
  };
  renderListImage = () => {
    const { listImg, imgProductMain } = this.props.productIdList;
    if (listImg) {
      let listImage = JSON.parse(listImg);
      listImage.splice(0, 0, JSON.parse(imgProductMain));
      return listImage.map((image, index) => {
        return <img src={image} className="imgSlick" key={index} alt="" />;
      });
    }
    // return listImage.map((image, index) => {
    //   return <img src={image.itemImage} key={index} alt="" />;
    // });
  };
  getMainImg = () => {
    const { imgProductMain } = this.props.productIdList;
    if (imgProductMain) {
      return JSON.parse(imgProductMain);
    }
  };
  themGioHang = (infoPro) => {
    let { listSp } = this.state;
    if (this.state.ktra === false) {
      this.setState({ ktra: true });
      listSp = JSON.parse(localStorage.getItem("info")) || [];
      listSp.push(infoPro);
      console.log("them thanh cong");
      listSp = listSp
        .map((v) => v["id"])
        .map((v, i, array) => array.indexOf(v) === i && i)
        .filter((v) => listSp[v])
        .map((v) => listSp[v]);
      localStorage.setItem("info", JSON.stringify(listSp));
      this.setState({ listSp: listSp });
      // console.log(infoPro);
    } else {
      console.log("da hoa khoi gio hang");
      this.setState({ ktra: false });
      listSp.splice(listSp.indexOf(infoPro), 1);
      this.setState({ listSp: listSp });
      localStorage.setItem("info", JSON.stringify(listSp));
    }
  };
  onChange = (e) => {
    let { quantityProduct } = this.props.productIdList;
    let name = e.target.name;
    let value =
      name === "quantityChoice" &&
      (quantityProduct < e.target.value ||
        e.target.value <= 0 ||
        Number.isInteger(e.target.value) === false)
        ? this.state.quantityChoice
        : e.target.value;
    // let value = e.target.value;
    console.log(value, quantityProduct);
    this.setState({
      [name]: value,
    });
  };
  minusPro = () => {
    if (this.state.quantityChoice > 1) {
      this.setState({ quantityChoice: this.state.quantityChoice - 1 });
    }
  };
  addPro = () => {
    const { quantityProduct } = this.props.productIdList;
    if (this.state.quantityChoice < quantityProduct) {
      this.setState({ quantityChoice: this.state.quantityChoice + 1 });
    }
  };
  isNumber = (e) => {
    let charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  };
  infoMota = () => {
    const { productIdList } = this.props;
    return (
      <>
        <p>
          <b>T??n s???n ph???m: </b>
          <span>{productIdList.nameProduct}</span>
        </p>
        <p>
          <b>Ch???t l?????ng: </b>
          <span>{productIdList.nameProduct}</span>
        </p>
        <p>
          <b>T??n s???n ph???m: </b>
          <span>{productIdList.nameProduct}</span>
        </p>
        <p>
          <b>T??n s???n ph???m: </b>
          <span>{productIdList.nameProduct}</span>
        </p>
        <p>
          <b>T??n s???n ph???m: </b>
          <span>{productIdList.nameProduct}</span>
        </p>
      </>
    );
  };
  infoChiTiet = () => {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          culpa! Reiciendis beatae quidem illum. Illo ratione fugit ex a odit
          recusandae aperiam, suscipit ea nobis odio, quaerat corporis harum
          eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae modi atque, accusantium dignissimos blanditiis accusamus
          nostrum totam distinctio quas ducimus commodi at vel voluptate id
          asperiores dicta perferendis itaque eum.
        </p>
      </>
    );
  };
  render() {
    const { productIdList } = this.props;
    // console.log(listImage);
    // console.log(productIdList);
    const settings = {
      customPaging: function (i) {
        return (
          <button style={{ padding: 0 }}>
            <div
              style={{
                // width: "100px ",
                height: "125px",
                // margin: "auto",
                backgroundColor: "white",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // margin: "auto",
                }}
                alt=""
                src={`http://localhost:8082/public/images/ukulele_${i + 1}.jpg`}
              />
            </div>
          </button>
        );
      },
      dots: true,
      fade: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <div className="infoProduct " style={{ paddingTop: "100px" }}>
          <div className="row detailPro">
            <div className="col-md-5 hinhDemo">
              {/* {this.renderListImage()} */}
              {/* <img
                src={this.getMainImg()}
                style={{ width: "400px", height: "500px", objectFit: "cover" }}
                alt=""
              /> */}
              <Slider {...settings}>{this.renderListImage()}</Slider>
            </div>

            <div className="col-md-6 moTa">
              <h3 className="text-center"> {productIdList.nameProduct}</h3>

              <div className="gia">
                {productIdList.priceProduct
                  ? productIdList.priceProduct.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  : ""}
              </div>
              <div className="quantityPro">
                <b>S??? L?????ng</b>
                <span className="minusIcon" onClick={this.minusPro}>
                  <RemoveIcon />
                </span>
                <input
                  className="quantityInput"
                  name="quantityChoice"
                  type="text"
                  value={this.state.quantityChoice}
                  onChange={this.onChange}
                />
                <span className="addIcon" onClick={this.addPro}>
                  <AddIcon />
                </span>
                <span className="noticeQuantity">
                  {" "}
                  <i>C?? s???n {productIdList.quantityProduct} s???n ph???m</i>
                </span>
              </div>
              <div className="gioHang">
                <Button
                  className="btnCart"
                  variant="contained"
                  onClick={() => {
                    this.themGioHang(productIdList);
                  }}
                  color="primary"
                >
                  <AddShoppingCartIcon />
                  <div className="tooltipCart">?????t V??o Gi???</div>
                </Button>{" "}
                <Button
                  className="btnShop"
                  variant="contained"
                  color="secondary"
                >
                  <ShoppingBasketIcon />
                  <div className="tooltipShop">Mua Ngay</div>
                </Button>{" "}
              </div>
              <div className="detailInfo">
                <div className="headerInfo">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.setState({ content: "content1" })}
                  >
                    Mo Ta
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => this.setState({ content: "content2" })}
                  >
                    Chi tiet
                  </button>
                </div>
                <div className="bodyInfo">
                  <div className="content">
                    {this.state.content === "content1"
                      ? this.infoMota()
                      : this.infoChiTiet()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center">NH???NG S???N PH???M LI??N QUAN</h1>
        <div className="productDiff"></div>
      </div>
    );
  }
  componentDidMount() {
    const { maSp } = this.props.match.params;

    // console.log(maSp);
    // this.props.dispatch(getListImage(maSp));
    this.props.dispatch(getProductItemAction(maSp));
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    listImage: state.product.imageList,
    productIdList: state.product.productItem,
  };
};

export default connect(mapStateToProps)(withRouter(DetailProduct));
