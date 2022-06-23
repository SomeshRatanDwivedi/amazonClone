import ElementArray from './Array';
export default function Home({addToCart}) {
    return (
        <div className='main-content-parent'>
            {
                ElementArray.map((ele, i) => {

                    return (
                        <div className="main-content">
                            <div className="showing-element-img">
                                <img className="main-content-img" src={require(`../images/pant/${ele.src}.webp`)}></img>
                            </div>
                            <div className="showing-element-text">
                                <h3 className="product-name">{ele.productName}</h3>
                                <p className="product-description">{ele.productDesc}</p>
                                <p>
                                    <span className="offerred-price">{ele.offerredPrice}</span>
                                    <span className="original-price">{ele.originalPrice}</span>
                                    <span className="offer" >{ele.offer}</span>

                                </p>
                                <button className="add_to_cart" onClick={()=>addToCart.addToCart(ele)}>Add to cart</button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
};