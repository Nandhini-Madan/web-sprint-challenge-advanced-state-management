import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../Actions/smurfsActions";



const SmurfsList = (props) => {
    //    useEffect(() => {
    //         getNews();
    //     }, [getNews]);

    //     if (isFetching) {
    //         return (
    //             <h2>Loading</h2>
    //         )
    //     }
    console.log("Smurfs", props);
    return (
        <div className="Smurfs">
            {
                props.smurfs.map((item) =>
                    <div className="Smurfs_List" key={item.id}>
                        <p><span>NAME:</span>{item.name}</p>
                        <p><span>AGE:</span>{item.age}</p>
                        <p><span>HEIGHT:</span>{item.height}</p>
                    </div>
                )
            }
            <button onClick={props.getSmurfs}>GeSmurfs</button>



        </div>
    )
};

const mapStateToProps = (state) => {
    return { smurfs: state.smurfs, isFetching: state.isFetching }
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfsList);