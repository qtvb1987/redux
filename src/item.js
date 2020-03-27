import React from 'react';
import { connect } from 'react-redux'
class Item extends React.Component {
    render() {
        // console.log(this.props);

        let data = this.props.data;
        return (
            <tr className={(data.selected ? "selected" : "")
                + (data.like ? " like" : "")
            }>
                <td>
                    <input
                        type="checkbox"
                        checked={data.selected}
                        onChange={(e) => {
                            this.props.dispatch({
                                type: 'CHECK',
                                id: this.props.id,
                                check: e.target.checked
                            })
                            // this.props.setCheck(this.props.index, e.target.checked)
                        }}
                    />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input
                        type="checkbox"
                        checked={data.like}
                        onChange={(e) => {
                            this.props.dispatch({
                                type: 'CHECK_LIKE',
                                id: this.props.id,
                                check: e.target.checked
                            })
                            // this.props.setLike(this.props.index, e.target.checked)
                        }}
                    />
                </td>
                <td>

                    <span onClick={() => {
                        this.props.dispatch({
                            type: 'REMOVE',
                            id: this.props.id,

                        })
                        // this.props.remove(this.props.index)
                    }}>X</span>
                </td>
            </tr>
        );
    }
}

export default connect((state, props) => {
    let data = {};
    state.data.forEach((item) => {
        if (item.id === props.id) {
            data.data = item;
        }
    });
    return data;
})(Item);