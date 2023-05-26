import React from 'react'

const Raiting = ({rating , reviews}) => {
  return (
    <div className='rating'>
    {rating >= 1 ? <i class="fa-solid fa-star"></i>
    :rating >= 0.5 ?<i class="fa-solid fa-star-half"></i>
    :<i class="fa-solid fa-star"></i>
    }

    {rating >= 2 ? <i class="fa-solid fa-star"></i>
    :rating >= 1.5 ?<i class="fa-solid fa-star-half"></i>
    :<i class="fa-solid fa-star"></i>
    }

    {rating >= 2 ? <i class="fa-solid fa-star"></i>
    :rating >= 1.5 ?<i class="fa-solid fa-star-half"></i>
    :<i class="fa-solid fa-star"></i>
    }

    
    {rating >= 4 ? <i class="fa-solid fa-star"></i>
    :rating >= 3.5 ?<i class="fa-solid fa-star-half"></i>
    :<i class="fa-solid fa-star"></i>
    }

    {rating >= 4 ? <i class="fa-solid fa-star"></i>
    :rating >= 4.5 ?<i class="fa-solid fa-star-half"></i>
    :<i class="fa-solid fa-star"></i>
    }
    <span>{rating}</span>
    <span>{reviews} Reviews</span>
    </div>
  )
}

export default Raiting