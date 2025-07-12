"use client"
import React, { use, useEffect, useState } from 'react';
import Headers from '../../components/headers';
import { RiLoader2Line } from "react-icons/ri";


function Home() {
    const [data, setData] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);


    const [dataCategoryList, setCategoryList] = useState([]);


    const [loading, setLoading] = useState(true);


    const [sortData, setSortData] = useState([]);


    const [products, setProducts] = useState([]);



    const [category, setCategory] = useState([]);


    const [listCategory, setListCategory] = useState([]);


    const [listProduct, setListProduct] = useState([]);







    // async function sortDataList() {
    //     let data = await fetch('https://dummyjson.com/recipes?sortBy=name&order=asc')
    //     let response = await data.json();
    //     setSortData(response);

    // }


    async function sortDataList() {
        let data = await fetch('https://dummyjson.com/recipes?sortBy=name&order=asc');
        let response = await data.json();
        setSortData(response.recipes || []); // Assuming the response has a "recipes" key
    }













    async function fetchApiCategory() {
        let data = await fetch("https://dummyjson.com/products/category-list");
        let response = await data.json();
        setCategoryList(response);
    }

    async function fetchApiSlug() {
        let data = await fetch("https://dummyjson.com/products/categories");
        let response = await data.json();
        setData(response);
    }

    async function fetchApiProducts() {
        let data = await fetch("https://dummyjson.com/products?sortBy=title&order=asc");
        let response = await data.json();
        setDataProduct(response?.products);
    }



    async function getProductList() {
        let data = await fetch('https://dummyjson.com/products');
        let response = await data.json();
        setProducts(response.products)

    }



    async function fetchCategoryList() {
        let data = await fetch('https://dummyjson.com/products/categories');
        let response = await data.json();
        setCategory(response.data)
    }



    async function fetchListCategory() {
        let data = await fetch('https://dummyjson.com/products/category-list');
        let response = await data.json();
        setListCategory(data);

    }


    async function fetchListsProducts() {
        let data = await fetch('https://dummyjson.com/products/category/smartphones');
        let response = await data.json();
        setListProduct(response.products)
        
    }




    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await fetchApiSlug();
            await fetchApiProducts();
            await fetchApiCategory();
            await sortDataList();
            await getProductList();
            await fetchCategoryList();
            await fetchListCategory();

            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            <Headers />
            <div className='py-10'>
                <div className='container'>


                    {loading ? (
                        <div className="text-center text-lg font-bold m-auto flex justify-center h-full items-center">
                            <RiLoader2Line size={60} className="animate-spin" />
                        </div>
                    ) : (
                        <>





                        {products && products[0] &&(
                            <div><p>Product Id : <span>{products[0].id}</span></p>
                            <p>Title :<span>{products[0].titles}</span></p>
                            </div>
                            
                        )
                        
                        }

                           {data && data.map((data) => (
                                <div>
                                    <p><b>List Category:</b> <span>{data.name}</span></p>
                                </div>
                           )
                                )}

                            <hr className='my-10' />





                            
                            
                            {
                                data && data[0] && (
                                    <div><p>Categoy: <span>{data[0].name}</span></p></div>
                                )
                            }


                            {data && data.map((data) => (
                                <div>
                                    <p><b>Catagory Name</b>: <span>{data.name}</span></p>
                                    <p><b>Slug Name</b>: <span>{data.slug}</span></p>
                                    <p><b>Url</b>: <span>{data.url}</span></p>

                                </div>
                            )
                            )

                            }


                            <hr className='my-10' />

                            <div className='product_box grid grid-cols-3 gap-8'>


                                {products && products.map((productss) => (
                                    <div className='border p-6' key={productss.id}>
                                        <p><b></b> <span>{productss.images?.[0] && (
                                            <div>
                                                <img
                                                    src={productss.images[0]}
                                                    alt="Product Image"
                                                    style={{ width: '200px' }}
                                                />
                                            </div>
                                        )}</span></p>
                                        <p><b>Product Name</b>: <span>{productss.title}</span></p>
                                        <p><b>Description</b>: <span>{productss.title}</span></p>
                                        <p><b>Category</b>: <span>{productss.category}</span></p>
                                        <p><b>Price</b>: <span>{productss.price}</span></p>
                                        <p><b>Discount Price</b>: <span>{productss.discountPercentage}</span></p>
                                        <p><b>Price</b>: <span>{productss.price}</span></p>
                                        <p><b>Rating</b>: <span>{productss.rating}</span></p>
                                        <p><b>Tags</b>: <span>{productss.tags?.map(items => <span className='capitalize mr-2'>{items},</span>)}</span></p>

                                    </div>
                                ))}
                            </div>



                            <hr className='my-10' />



                            {/* 
                            {products && products[0] &&(
                                <div>
                                    <h2>Name : <span>{products[0].title}</span></h2>
                                    <h2>Desc : <span>{products[0].description}</span></h2>
                                </div>
                            )

                            }


                            {products && products[0] && (
                                <div>
                                    <p>Product Name: <span>{products[0].title}</span></p>
                                </div>
                            )} */}




















                            {/* {dataCategoryList?.map((category, index) => (
                                <h2 key={index}>Category Name: {category}</h2>
                            ))} */}



                            <hr className='my-10' />



                            {/* {dataProduct?.map((products) => (
                                <div key={products.id}>
                                    <h2>Product Id: {products?.id}</h2>
                                    <h2>Product Title: {products?.title}</h2>
                                    <h2>Product Price: {products?.price}</h2>
                                </div>
                            ))} */}



                            {/* <hr className='my-10' />




                            {sortData.length > 0 ? (
                                sortData.map((item, index) => (
                                    <h2 key={index}>Title: {item?.name}</h2>
                                ))
                            ) : (
                                <p>Loading...</p> // Display loading message while data is being fetched
                            )}




                            {data?.map((item, index) => (
                                <h2 key={index}>Title Mitttt: {item?.slug}</h2>
                            ))} */}




                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;