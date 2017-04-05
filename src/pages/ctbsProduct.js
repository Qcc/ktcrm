import React from 'react';
import KtHeaderComp from '../components/ktheadercomp';
import KtFooterComp from '../components/ktfootercomp';

class Product extends React.Component{
    componentDidMount() {
        document.title='CTBS-深圳市沟通科技有限公司';
    }
    render(){
        return(
            <div>
            <KtHeaderComp active="ctbs"/>
            <h1>这是CTBS详情页</h1>
            <KtFooterComp/>
            </div>
        );
    }
}

export default Product;