import React, { Fragment } from 'react';
import styles from './index.module.css';
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux';
import  { actionCreators } from './store';

const Header = (props)=>{
  return(
    <Fragment>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <a href="/" className={styles.logo}> </a>
            <div className={styles.nav}>
              <div className={styles.nav_page}><span className={styles.iconfont}>&#xe651;</span>首页</div>
              <div className={styles.floatLeft}><span className={styles.iconfont}>&#xe608;</span>下载App</div>
              <div className={styles.floatRight}>登录</div>
              <div className={styles.floatRight}><span className={styles.iconfont}>&#xe676;</span></div>
              <div className={styles.floatRight}><span className={styles.iconfont}>&#xe636;</span></div>
              <div className={styles.search_wrapper}>
              <CSSTransition
                in={props.focused}
                timeout={300}
                classNames={{
                  enter: styles.slipe_enter,
                  enterActive: styles.slipe_enter_active,
                  enterDone: styles.slipe_enter_done,
                  exit: styles.slipe_enter_active,
                  exitActive: styles.slipe_exit,
                  exitDone: styles.slipe_exit_active,
                 }}
              >
                <input 
                placeholder='搜索'
                className={styles.search}
                onFocus={props.handleInputFocused}
                onBlur = {props.handleInputBlur}
                ></input>
            </CSSTransition>
                <span className={props.focused ? styles.searchIcon_focused:styles.searchIcon}>&#xe751;</span>
              </div>
              <div className={styles.rightBtns}>
                <div className={styles.registerBtn}>注册</div>
                <div className={styles.writeBtn}><span className={styles.iconfont}>&#xe6e5;</span>写文章</div>
              </div>
            </div>
          </div>
        </div>
        <div>
        {props.focused}
        </div>
      </Fragment>
  )
}

const mapStateToProps =(state)=>{
  return{
    focused : state.header.focused
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    handleInputFocused(){
      const action = actionCreators.searchFocusAction();
      dispatch(action);
    },
    handleInputBlur(){
      const action = actionCreators.searchBlurAction();
      dispatch(action);
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Header);
