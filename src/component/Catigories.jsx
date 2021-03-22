import React from 'react';
// import React, {useState} from 'react'; >>>> деструктуризация

const Catigories = (props) => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    props.onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {/* <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li> */}
        {props.items.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            //обработчик события см. #3 React 1.15.51
            key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catigories;

// на классах >>>>>>>>>>>>>>>>>>>>>>
// class Catigories extends React.Component {
//     state = {
//         activeItem: null,
//     };

//     onSelectItem = index =>{
//         this.setState({
//             activeItem: index
//         });
//     }
//     render() {
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {this.props.items.map((item, index) => <li
//                     className = {this.state.activeItem === index ? 'active' : ''}
//                     onClick = {() => this.onSelectItem(index)}
//                     //обработчик события см. #3 React 1.15.51
//                     key={`${item}_${index}`}>{item}
//                     </li>)}
//                 </ul>
//             </div>
//         )
//     }
// };

// export default Catigories;
