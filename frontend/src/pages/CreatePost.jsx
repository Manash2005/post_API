import React from 'react'

function CreatePost() {
  return (
    <section className='create-post-section'>
        <h1>Create post</h1>

        <form action="">

            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' required  placeholder='Enter caption'/>
            <button type='submit'>Submit</button>

        </form>
    </section>
  )
}

export default CreatePost