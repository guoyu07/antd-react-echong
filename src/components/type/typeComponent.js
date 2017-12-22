import React from 'react'
import { Button,SearchBar, WhiteSpace, WingBlank,Tabs } from 'antd-mobile';
import {Spin} from 'antd'
import { hashHistory } from 'react-router';
import {connect} from 'react-redux'
import './type.scss';
import * as typeAction from './typeAction';

 class TypeComponent extends React.Component{
    state={
        url:'goods.php'
    }

    renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>

      <p>Content of {tab.title}</p>
    </div>);
    render(){
        const tabs = [
              { title: '狗狗服饰' },
              { title: '狗狗食物' },
              { title: '狗狗窝垫' },
              { title: '狗狗玩具' },
        
            ];

        return <div>
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
                              console.log(e,r)
                                  hashHistory.push(
                                                {
                                                   pathname: '/type/shoplist',
                                                   query: {
                                                      title:e.title,
                                                      }
                                                }
                                              )
                              

                            }}
                          >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28rem', backgroundColor: '#fff' }}>
                            {this.props.children}
                          </div>
                          
            
                        </Tabs>
                        <WhiteSpace />
                      </div>    
               </div>
    }
}

const mapToState = function(state){ 
    return {
        dataset: state.typeReducer.response
    }
}

export default connect(mapToState, typeAction)(TypeComponent);