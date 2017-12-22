import React from 'react'
import { Tabs, WhiteSpace,NavBar, Icon} from 'antd-mobile';
import { hashHistory } from 'react-router'
import Allorder from "./allorder/allorderComponent";
export default class orderlist extends React.Component{
    mine(event) {
        hashHistory.push('mine')
    }
    render(){
        const tabs = [
            { title: '全部订单' },
            { title: '待付款' },
            { title: '待收货' },
            { title: '待评价' },
        ];
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.mine()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >订单列表</NavBar>
                <Tabs tabs={tabs}>
                    <div style={{ display: 'flex' }}>
                        <Allorder url="allorder.php"/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        1
                    </div>
                    <div style={{ display: 'flex' }}>
                        2
                    </div>
                    <div style={{ display: 'flex' }}>
                       3
                    </div>
                </Tabs>
            </div>
        )
    }
}