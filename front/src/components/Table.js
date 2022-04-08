import React, {useEffect} from 'react';
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../store/actionCreators/TableActionCreator";

const Table = () => {
    const items = useSelector(state => state.table.table);
    const isLoading = useSelector(state => state.table.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchItems())
    }, [])
    return (
        isLoading ?
            <h1>Loading...</h1> :
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