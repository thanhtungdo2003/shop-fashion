import React, { useEffect, useState } from "react";
import Slideshow from "./SlideShow";
import ProductItem from "./ProductItem";

import uri, { getUri } from "../js/site";


import axios from "axios";
import { ArrowUpFromDot, Atom, BadgeCheck, Boxes, Clock, FlaskConical, FlaskConicalOff, HandCoins, HeartHandshake, WineOff } from "lucide-react";

function Home() {
    const [newProducts, setNewProducts] = useState([]);
    const [bestSaleProducts, setBestSaleProducts] = useState([]);
    useEffect(() => {
        axios.post(getUri() + "/products-get-by-params", {
            row: 10,
            page: 1,
            keyword: "",
            sort: "newest",
            get_type: "user",
            category_slug: ""
        }, { withCredentials: true })
            .then((res) => {
                if (!res.data) return <></>;
                const productsDatas = res.data;

                setNewProducts(productsDatas.map((p, index) => {
                    const imgNames = JSON.parse(p.product_imgs);
                    const imageName = imgNames.find(i => i.startsWith('1-'))?.split('-')[1] || imgNames[0].split('-')[1];

                    return (<ProductItem
                        key={p.product_id}
                        id={p.product_id}
                        displayName={p.display_name}
                        categoryName={p.category_name}
                        price={p.price}
                        categorySlug={p.category_slug}
                        img={getUri() + `/product/get-imgs/product_imgs/` + imageName}
                    />)
                }))
            }).catch(err => {

            })

        //
        axios.post(getUri() + "/products-get-by-params", {
            row: 10,
            page: 1,
            keyword: "",
            sort: "bestsale",
            get_type: "user",
            category_slug: ""
        }, { withCredentials: true })
            .then((res) => {
                if (!res.data) return <></>;
                setBestSaleProducts(res.data)
            }).catch(err => {

            })
    }, [])
    return (
        <>
            
            <div className="mini-slide">
                <div>
                    <Atom color="#666" size={100} strokeWidth={1}/><span>Chất liệu cao cấp</span>
                </div>
                <div>
                    <ArrowUpFromDot color="#666" size={100} strokeWidth={1}/><span>Thiết kế vượt thời trang</span>
                </div>
                <div>
                    <Boxes color="#666" size={100} strokeWidth={1}/><span>Đa dạng phong cách</span>
                </div>
            </div>
            <div className="product-container newproduct-container">
                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "30px" }}>
                    <div className="product-container-title">
                        <p>SẢN PHẨM MỚI</p>
                    </div>
                </div>
                <div className="products">
                    {newProducts}
                </div>
            </div>
            <div className="mini-slide">
                <div>
                    <HandCoins color="#666" size={100} strokeWidth={1}/><span>Giá cả hợp lý</span>
                </div>
                <div>
                    <BadgeCheck color="#666" size={100} strokeWidth={1}/><span>Dịch vụ tận tâm</span>
                </div>
                <div>
                    <Clock color="#666" size={100} strokeWidth={1}/><span>Hoạt động liên tục</span>
                </div>
            </div>
            <div className="product-container bestproduct-container">
                <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "30px" }}>
                    <div className="product-container-title">
                        <p>SẢN PHẨM NỔI BẬT</p>
                    </div>
                    
                </div>
                <div className="products">
                    {bestSaleProducts.map((p, index) => {
                        const imgNames = JSON.parse(p.product_imgs);
                        const imageName = imgNames.find(i => i.startsWith('1-'))?.split('-')[1] || imgNames[0].split('-')[1];

                        return (<ProductItem
                            key={p.product_id}
                            id={p.product_id}
                            displayName={p.display_name}
                            categoryName={p.category_name}
                            price={p.price}
                            categorySlug={p.category_slug}
                            img={getUri() + `/product/get-imgs/product_imgs/` + imageName}
                        />)
                    })}
                </div>
            </div>
        </>
    )
}
export default Home;