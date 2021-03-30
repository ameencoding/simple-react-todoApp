import React from 'react';

const List = props => {
  const { items, clicked } = props;

  const listItems = items.map(item => {
    return (
      <ul className='list-group' key={item.key}>
        <li
          className='list-I'
        >
          {item.text}
          <i className='fa fa-trash'
            onClick={() => {
              clicked(item.key);
            }}> </i>
        </li>
      </ul>
    );
  });

  return <div>{listItems}</div>;
};
export default List;
