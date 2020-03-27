/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux'
class Add extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        }
    }
    getBack() {
        if (this.props.data.length > 0) {
            return (
                <a
                    className="backLink"
                    onClick={() => {
                        this.props.history.goBack();
                    }}
                >返回</a>
            )
        }
    }
    render() {
        // console.log(this.props);

        return (
            <header>
                <h2 className="title">
                    播放列表
                    {this.getBack()}
                </h2>
                <input
                    type="text"
                    placeholder="输入歌曲名字"
                    value={this.state.title}
                    onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }}
                ></input>
                <input
                    type="text"
                    placeholder="输入歌手名字"
                    value={this.state.singer}
                    onChange={(e) => {
                        this.setState({
                            singer: e.target.value
                        })
                    }}
                ></input>
                <input
                    type="button"
                    value="添加音乐"
                    onClick={() => {
                        // console.log(this.state)
                        this.props.dispatch({
                            type: 'ADD',
                            title: this.state.title,
                            singer: this.state.singer
                        });
                        this.setState({
                            title: '',
                            singer: ''
                        });
                        this.props.history.push('/');
                    }}
                ></input>
            </header>
        )
    }
}

export default connect((state) => state)(Add);