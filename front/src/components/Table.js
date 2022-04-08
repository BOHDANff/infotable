import React from 'react';
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";

const Table = () => {
    const items = useSelector(state => state.table.table);
    return (
        <div className="itemList__wrapper">
                {items.map(item => (
                    <Item id={item._id}
                          key={item._id}
                          name={item.name}
                          phone={item.phone}
                          age={item.age}
                          gender={item.gender}
                    />
                ))}
        </div>
    );
};

export default Table;