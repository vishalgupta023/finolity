import React from 'react'
import { faker } from '@faker-js/faker';
import ReviewCard from './ReviewCard';
export default function Review() {
   let reviews=[...Array(20)].map(()=>{
    return(
      {
        avtar:faker.image.avatar(),
        comment:faker.name.jobTitle,
        name:faker.name,
        data:"IIT JEE .15k learning min"
      }
    )
   })
   console.log(reviews)
  return (
    <div>
        {
          reviews.map((item)=>(
            <ReviewCard avtar={item.avtar} />
          ))
        }
    </div>
  )
}
