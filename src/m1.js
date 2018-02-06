/**
 * Created by zw on 2017/8/23.
 */

const Utils = {
    log(...args)
    {
        console.log(args)
        if (!(window.log || 'log' in window)) {
            window.log = this.log;
            log('init log')
        }
    }
}

export default Utils;