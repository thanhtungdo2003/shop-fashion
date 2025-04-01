import axios from "axios";
import { useEffect, useState } from "react";
import { getUri } from "../js/site";
import { toast } from "react-toastify";

function ShopFooter() {
    const [cateItems, setCateItem] = useState([]);
    useEffect(() => {
        axios.get(`${getUri()}/category/get-all`)
            .then((res) => {
                const categorys = res.data;
                setCateItem(categorys.map((cate, index) => {
                    return <a style={{ cursor: "pointer" }}>{cate.category_name}, </a>;
                }))
            }).catch(err => {
                toast.error(err.status + " Lỗi máy chủ");
            })
    }, [])
    return (
        <>
            <div className="scrollback-container">
                <a href="#container"><button>Lên trên cùng</button></a>
            </div>
            <div class="footer-2">
                <div class="footer-gioithieu">
                    <div>GIỚI THIỆU</div>
                    <span>

                        Chào mừng đến với Marc, nơi mang đến những xu hướng thời trang mới nhất. Chúng tôi cung cấp sản phẩm chất lượng, đa dạng phong cách từ năng động đến thanh lịch, giúp bạn tự tin thể hiện cá tính. Hãy để Marc đồng hành cùng bạn trên hành trình khẳng định phong cách riêng.
                    </span>
                </div>
                <div class="footer-top">
                    <div>TOP SẢN PHẨM</div>
                    <span>Áo phông</span>
                    <div>
                        <a href="#">GUCCI</a>, <a href="#">DIOR</a>,
                        <a href="#">NhaKen</a>
                    </div>
                    <span>Váy</span>
                    <div>
                        <a href="#">Dior</a>, <a href="#">D&G</a>,
                        <a href="#">LV</a>
                    </div>
                    <span>Quần Jean</span>
                    <div>
                        <a href="#">DIOR</a>, <a href="#">Jeans Calvin Klein.</a>, <a href="#">Jeans Lee Cooper.</a>
                    </div>
                    <span>Cổ trang</span>
                    <div>
                        <a href="#">Mẫu Đơn Shop</a>, <a href="#">Dạ Thiên Nguyệt Các</a>
                    </div>
                </div>
                <div class="footer-location">
                    <div>ĐỊA CHỈ</div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.2609062616098!2d106.05719710455183!3d20.94203499852238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a30555555555%3A0x39a8acd006ab8e69!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgVGh14bqtdCBIxrBuZyBZw6puLCBDxqEgc-G7nyAy!5e0!3m2!1svi!2s!4v1728696947337!5m2!1svi!2s"
                        width="90%"
                        height="70%"
                        style={{ border: "1px solid rgb(214, 214, 214)" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div class="footer-category">
                    <div>DANH MỤC</div>
                    <div>
                        {cateItems}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShopFooter;