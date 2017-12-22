import React from 'react'
import {  WhiteSpace, WingBlank,SearchBar,Tabs,Badge } from 'antd-mobile';
import Home_commonListComponent from './home_commonList/home_commonListComponent'

export default class HomeComponent extends React.Component{
    render(){
      const tabs = [
            { title: <Badge>主粮</Badge> },
            { title: <Badge>医疗</Badge> },
            { title: <Badge>零食</Badge> },
            { title: <Badge>玩具</Badge> },
          ];
        return (
          <div>
             <Tabs tabs={tabs}
                initialPage={1}
              >
              <Home_commonListComponent url="dogClothes.php"></Home_commonListComponent>   
            </Tabs>
          </div>
        )
    }
}
