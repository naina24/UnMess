import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mess Commitee</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Ram Kumar Upadhyay'
              label='Head'
              path='/services'
            />
            <CardItem
               src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Shyam Verma'
              label='Cook'
              path='/services'
            />
             <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Shubham Prakash'
              label='Cook'
              path='/services'
            />
             <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Gagan Baranwal'
              label='Cook'
              path='/services'
            />
             <CardItem
              src='https://i.ibb.co/YDpXB6k/opt-aboutcom-coeus-resources-content-migration-mnn-images-2018-12-Dislike-Cooking-Trend-42651ffd1865.jpg'
              text='Shashank Shukla'
              label='Cook'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
