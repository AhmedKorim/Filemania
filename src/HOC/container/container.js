import React from 'react'
import connect from "react-redux/es/connect/connect";
import './contaiener.scss';
const Container = props => {
    const {children, open} = props;
    return (
        <div className={['container', !open ? 'center' : ''].join(' ')}>
            {children}
        </div>
    )
}
const mapStateToProps = state => ({open: state.side.open})
export default connect(mapStateToProps)(Container);