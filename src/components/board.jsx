import React from 'react';
import List from './list';


const Board = props => {
  const { onSubmit, onChange, Allitems, onclickDelete } = props;
  return (
    <>
      <div className='rules'>
        <i className={Allitems.items.length >= 7 ? 'fa fa-exchange' : ''}></i>
        #1: you can add Only max of 7 lists. <br />
        <i className={Allitems.err ? 'fa fa-exchange' : ''}></i>
        #2: you cannot add an empty field. <br />
        <i className={Allitems.delFlag ? 'fa fa-exchange' : ''}></i>
        #3: you can delete any item. <br />
        <span>Any action you do an arrow will appear.</span> <br />
        <strong>Enjoy your Day. &copy; ameencoding <i className='fa fa-twitter'></i>. All right reserved!</strong>
      </div>
      <form className='form' onSubmit={onSubmit}>
        <input
          disabled={Allitems.items.length >= 7 ? 'disable' : ''}
          style={{ backgroundColor: Allitems.err ? '#db6337' : '' }}
          onChange={onChange}
          type='text'
          placeholder='add new item...'
          value={Allitems.currentItem.text}
        />
        <button className='fa fa-arrow-right'
          disabled={Allitems.items.length >= 7 ? 'disable' : ''}
        ></button>

        <List items={Allitems.items} clicked={onclickDelete} />
      </form>
    </>
  );
};

export default Board;
