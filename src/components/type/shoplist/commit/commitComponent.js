import React from  "react";
import { NavBar, Icon,List,Button,TextareaItem} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import $ from 'jquery';
import {connect} from 'react-redux';
import * as commitAction from './commitAction';
class Commitcomponent extends React.Component{

    state={
        url:'commit.php',
        urldata:'commitdata.php'

    }
    componentDidMount(){
        this.props.getcommit(this.state.urldata)
    }
    
    commit(event){
        var username = window.localStorage.username;
        var detail = this.refs.zxcommit.state.value;
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
        var id = Date.parse(d);
        this.props.get(this.state.url,{username:username,detail:detail,time:str,id:id})
    }

    render(){
            if(!this.props.dataset){
                return null ;
            }
            console.log(JSON.parse(this.props.dataset.text))
            return  <div>
                     <NavBar
                          mode="light"
                          icon={<Icon type="left" />}
                          onLeftClick={() => history.go(-1)}
                          rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Button>发表评论</Button>
                          ]}
                        >评论</NavBar>

                        {
                            JSON.parse(this.props.dataset.text).map(function(item,index){
                             return <List renderHeader={() => '五星好评'} className="my-list">

                                <Item extra= {item.time} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
                                 {item.username} <Brief>{item.detail}</Brief>
                                </Item>
                            </List>
                            })
                        }
                    <List renderHeader={() => '您的评论'}>
                      <TextareaItem ref='zxcommit'
                        rows={5}
                        count={100}
                      />
                      <Button onClick={this.commit.bind(this)}>发表</Button>
                    </List>
                    </div>
    }
}

const commitState = function(state){
    console.log(state)
    return {
        dataset: state.commit.response,
    }
}

export default connect(commitState, commitAction)(Commitcomponent);