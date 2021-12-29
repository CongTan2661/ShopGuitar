import React, { Component } from "react";
import CarouselHome from "./carouselHome/carousel.home";
import { connect } from "react-redux";
import ProductSpecial from "./productSpecial/productSpecial.home";
class Home extends Component {
  loadingPage = () => {
    return (
      <div id="preloader">
        <div id="loader"></div>
      </div>
    );
  };
  render() {
    return this.props.loading ? (
      this.loadingPage()
    ) : (
      <>
        <div className="container">
          <div id="home">
            <CarouselHome />
          </div>
          <div className="sanPhamNoiBac">
            <h1 className="text-center">CÁC SẢN PHẨM NỔI BẬT</h1>
            <ProductSpecial />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productList: state.product.productList,
    loading: state.loading.loading,
  };
};

export default connect(mapStateToProps)(Home);
