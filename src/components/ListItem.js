
import React from 'react';


const ListItem = ({ index, name, points }) => {
    const medalEmojis = {
      0: '🥇',
      1: '🥈',
      2: '🥉',
      3: '🎖️',
      4: '🎖️',
      5: '🎖️',
      6: '📍',
      // Puedes agregar más emojis según sea necesario
    };
  
    const medalEmoji = medalEmojis[index] || '📍'; // Por defecto, usar el emoji de ubicación
  
    return (
      <div className="list-item">
        <p style={{ fontWeight: 'normal' }}>{name}</p>
        <span className="index">{medalEmoji}</span>
        <span className="points" style={{fontWeight:'bold'}}>Pts: <span style={{fontWeight:'normal'}} >{points}</span></span>
      </div>
    );
  };

export default ListItem;