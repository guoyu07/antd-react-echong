import React from 'react'
import { Button,SearchBar, WhiteSpace, WingBlank,Tabs } from 'antd-mobile';
import {Spin} from 'antd'
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import './type.scss';
import $ from 'jquery';
import * as typeAction from './typeAction';

 class TypeComponent extends React.Component{
    state={
        url:'goods.php',
        title:'狗狗服饰'
    }
    componentDidMount(){


        this.props.getDatazx(this.state.url, {title:this.state.title})
        $('.am-tabs-tab-bar-wrap').css({display:'block'})
    }
    change(event){
      console.log(event.target.parentNode.parentNode.id)
     var id = event.target.parentNode.parentNode.id 
        hashHistory.push({
         pathname:'/shoplist',
          query:{
            id:id,
            title:this.state.title
          }
        })
        console.log(666);
        this.props.getType(this.state.url, {title:this.state.title})


    }
    renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>

      <p>Content of {tab.title}</p>
    </div>);
    getKeys(item){
        var newObj = item ? Object.keys(item) : []
        return newObj
    }
    
    render(){
      if(!this.props.dataset){
            return null
        }
        const thisr = this.props  
        const tabs = [
              { title: '狗狗服饰' },
              { title: '狗狗食物' },
              { title: '狗狗窝垫' },
              { title: '狗狗玩具' },
        
            ];

        return <div id='zx'>
                    <SearchBar
                        placeholder="手动获取获取光标"
                        ref={ref => this.manualFocusInst = ref}
                      />
                      <WhiteSpace />
                     <div style={{ height: '28rem' }}>
                        <WhiteSpace />
                        <Tabs tabs={tabs}
                          initalPage={'t2'}
                          tabBarPosition="left"
                          tabDirection="vertical"
                          onChange={(e,r,t) => {
                            var title = e.title

                              this.setState({title:title})
                              this.props.getDatazx(this.state.url, {title:e.title})
                              console.log(this.dataset)

                            }}
                          >
                          <div style={{ height: '28rem', backgroundColor: '#fff' }} >
                            
                            {

                                this.props.dataset.map(function(obj, index){
                                     return <ul key={index} id={obj.goodId} className='list_zx clearfix'  onClick={this.change.bind(this)}>
                                                <li className='list_img'>
                                                <img src={obj.goodpic} />
                                                </li>
                                                <li className='list_con clearfix'>
                                                    <h3>{obj.goodname}</h3>
                                                    <p>￥{obj.goodprice}</p>
                                                    <span className='span'>互动：(100%好评) 售出：18</span>
                                                    <Button type="primary" size='small' >添加到购物车</Button>
                                                </li>
                                            </ul>
                                        
                                }.bind(this))
                            }
                            
                          </div>
                          
                        </Tabs>
                        <WhiteSpace />
                      </div>    
               </div>
    }
}

const typeState = function(state){
    return {
        dataset: state.typeReducer.response
    }
}

export default connect(typeState, typeAction)(TypeComponent);