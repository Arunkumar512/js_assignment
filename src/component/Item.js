"use client"
import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import './item.css'
import { Container } from "react-bootstrap";


function Item() {
  const [searchTerm, setSearch] = useState("");
  const [posts, setpost] = useState([]);
  useEffect(() => {
    const getposts = async () => {
      const { data: res } = await axios.get('https://fakestoreapi.com/products?limit=10')
      setpost(res);
    }
    getposts();
  }, [])

 
  return (
    <>
      <Container>
        <div className="search">
        <input type="text" placeholder='Category...'
        className='form-control'
          onChange={(e) =>
            setSearch(e.target.value)}/>
      </div>
      <br />
      </Container>
      <div style={{

      }} className="container">

        <table border={1} className="table">
          <thead>
            <tr style={{
              backgroundColor: "black", color
                : "white"
            }}>
              <th>Sr</th>
              <th>Product</th>
              <th>Category</th>
              <th>Product Image</th>
            </tr>
          </thead>
          <tbody style={{
          fontWeight: "300"
          }}>
            {posts.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.category.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val
              }

            }).map((post) => (
              <tr>
                <td >{post.id}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td><img className='pgimg' style={{
                  width: '3rem', height: 'auto'
                }} src={post.image} alt="" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button">
          <button className='button1'>
            <a className='button1' href="#"
            >Prev</a>
          </button>
          <button className='button2'>
            <a  className='button2'href="#"
            >Next</a>
          </button>
        </div>
      </div>

    </>
  )
}

export default Item