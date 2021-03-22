import React from 'react'
import getPhotoUrl from 'get-photo-url'
import { posts } from '../data'

const Gallery = () => {
  const addPhoto = async () => {
    const imageUrl = await getPhotoUrl('#addPhotoInput')
    const post = {
      id: '',
      imageUrl,
      text: ''
    }
  }

  const galleryItems = posts.map(post => (
    <div className="item" key={post.id} tabIndex={8}>
      <img src={post.imageUrl} alt="" />
    </div>
  ))

  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <i className="add-photo fas fa-plus-square" onClick={addPhoto}/>
      </label>
      <div className="gallery-nav" />
      <section className="gallery">
        {galleryItems}
      </section>
    </>
  )
}

export default Gallery
