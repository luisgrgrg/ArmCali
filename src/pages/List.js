import React from 'react';
import ListItem from './ListItem';

const List = ({ data }) => {
    // Organiza la lista por puntos en orden descendente
    const sortedData = [...data].sort((a, b) => b.points - a.points);
  
    return (
      <div className="list-container">
        {sortedData.map((item, index) => (
          <ListItem key={index} index={index} name={item.name} points={item.points} />
        ))}
      </div>
    );
  };
  
  export default List;