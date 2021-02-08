import React from 'react';
// import React, {useState} from 'react'; >>>> деструктуризация


const Catigories = (props) => {
    const [activeItem, setActiveItem] = React.useState(null);

    // const onSelectItem = index =>{
    //     setActiveItem(index);
    // };
    // оборачиваем setActiveItem в функцию и прокидываем функцию в onClick
    // нужно, чтобы не городить анонимные функции (засоряет память - нужно постоянно делать ререндер)

    return (
        <div className="categories">
            <ul>
                <li 
                    className = {activeItem === null ? 'active' : ''}
                    onClick = {() => setActiveItem(null)}>Все
                </li>
                {props.items.map((item, index) => (
                <li 
                    className = {activeItem === index ? 'active' : ''}
                    onClick = {() => setActiveItem(index)}
                    //обработчик события см. #3 React 1.15.51
                    key={`${item}_${index}`}>{item}
                </li>))}
            </ul>
        </div>
    )
}

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





