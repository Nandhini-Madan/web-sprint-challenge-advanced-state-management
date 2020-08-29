import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../Actions/smurfsActions";



const NewsList = (props) => {
    //    useEffect(() => {
    //         getNews();
    //     }, [getNews]);

    //     if (isFetching) {
    //         return (
    //             <h2>Loading</h2>
    //         )
    //     }
    console.log("news", props);
    return (
        <>
            {
                props.smurfs.map((item) =>
                    <div key={item.id}>
                        <p >{item.name}</p>
                        <p>{item.age}</p>
                    </div>
                )
            }
            <button onClick={props.getSmurfs}>GeSmurfs</button>
           
           

        </>
    )
};

const mapStateToProps = (state) => {
    return { smurfs: state.smurfs, isFetching: state.isFetching }
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);